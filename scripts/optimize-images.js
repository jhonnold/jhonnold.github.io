import sharp from 'sharp';
import { readdir, mkdir, copyFile, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const SRC = 'src/images';
const OUT = 'public/images';

const PASSTHROUGH = new Set(['.svg', '.webp']);
const MAX_WIDTH = 640;

async function isStale(srcPath, outPath) {
    try {
        const [srcStat, outStat] = await Promise.all([stat(srcPath), stat(outPath)]);
        return srcStat.mtimeMs > outStat.mtimeMs;
    } catch {
        return true;
    }
}

async function optimizeImage(srcPath, outDir, name, ext) {
    const webpOut = join(outDir, `${name}.webp`);
    const avifOut = join(outDir, `${name}.avif`);
    const placeholderOut = join(outDir, `${name}-placeholder.webp`);

    const meta = await sharp(srcPath).metadata();
    const needsResize = meta.width > MAX_WIDTH;
    const img = needsResize ? sharp(srcPath).resize({ width: MAX_WIDTH }) : sharp(srcPath);

    const tasks = [];

    if (await isStale(srcPath, webpOut)) {
        tasks.push(img.clone().webp({ quality: 80 }).toFile(webpOut));
    }

    if (await isStale(srcPath, avifOut)) {
        tasks.push(img.clone().avif({ quality: 65 }).toFile(avifOut));
    }

    if (await isStale(srcPath, placeholderOut)) {
        tasks.push(img.clone().resize(20).webp({ quality: 50 }).toFile(placeholderOut));
    }

    if (tasks.length > 0) {
        await Promise.all(tasks);
        console.log(`  optimized: ${name}${ext}`);
    } else {
        console.log(`  skipped:   ${name}${ext} (up to date)`);
    }
}

async function processDirectory(srcDir, outDir) {
    await mkdir(outDir, { recursive: true });

    const entries = await readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = join(srcDir, entry.name);
        const destPath = join(outDir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(srcPath, join(outDir, entry.name));
            continue;
        }

        const ext = extname(entry.name).toLowerCase();
        const name = basename(entry.name, ext);

        if (PASSTHROUGH.has(ext)) {
            if (await isStale(srcPath, destPath)) {
                await copyFile(srcPath, destPath);
                console.log(`  copied:    ${entry.name}`);
            } else {
                console.log(`  skipped:   ${entry.name} (up to date)`);
            }
            continue;
        }

        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            await optimizeImage(srcPath, outDir, name, ext);
        }
    }
}

console.log('Optimizing images...');
await processDirectory(SRC, OUT);
console.log('Done!');
