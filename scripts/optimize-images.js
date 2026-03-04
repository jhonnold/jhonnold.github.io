import sharp from 'sharp';
import { readdir, mkdir, copyFile, access } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const SRC = 'src/images';
const OUT = 'public/images';

const PASSTHROUGH = new Set(['.svg', '.webp']);

async function exists(path) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

async function optimizeImage(srcPath, outDir, name, ext) {
    const webpOut = join(outDir, `${name}.webp`);
    const avifOut = join(outDir, `${name}.avif`);
    const placeholderOut = join(outDir, `${name}-placeholder.webp`);

    const img = sharp(srcPath);

    const tasks = [];

    if (!(await exists(webpOut))) {
        tasks.push(img.clone().webp({ quality: 80 }).toFile(webpOut));
    }

    if (!(await exists(avifOut))) {
        tasks.push(img.clone().avif({ quality: 65 }).toFile(avifOut));
    }

    if (!(await exists(placeholderOut))) {
        tasks.push(img.clone().resize(20).webp({ quality: 50 }).toFile(placeholderOut));
    }

    if (tasks.length > 0) {
        await Promise.all(tasks);
        console.log(`  optimized: ${name}${ext}`);
    } else {
        console.log(`  skipped:   ${name}${ext} (already exists)`);
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
            if (!(await exists(destPath))) {
                await copyFile(srcPath, destPath);
                console.log(`  copied:    ${entry.name}`);
            } else {
                console.log(`  skipped:   ${entry.name} (already exists)`);
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
