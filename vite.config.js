import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { site } from './src/data/site.js';

export default defineConfig({
    plugins: [
        tailwindcss(),
        createHtmlPlugin({
            minify: true,
            inject: { data: { site } },
        }),
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    server: {
        port: 3000,
        open: true,
    },
});
