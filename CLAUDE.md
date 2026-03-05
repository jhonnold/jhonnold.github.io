# Portfolio Site (jhonnold.github.io)

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Optimize images + Vite build + copy 404.html
npm run preview    # Preview production build
npm run lint       # ESLint with auto-fix
npm run format     # Prettier formatting
```

## Architecture

Vanilla HTML/CSS/JS portfolio site built with Vite and Tailwind CSS v4.

- `index.html` — Single-page entry point
- `src/data/site.js` — Site content/data
- `src/js/` — JS modules (animations, scroll, blur-up image loading)
- `src/css/` — Tailwind + font styles
- `scripts/optimize-images.js` — Sharp-based image optimization (runs as prebuild)
- `public/` — Static assets (CNAME, images)

## Key Details

- Tailwind CSS v4 (uses `@tailwindcss/vite` plugin, not PostCSS)
- `postbuild` copies index.html to 404.html for GitHub Pages SPA routing
- Deployed to GitHub Pages from `main` branch
- Custom domain: honnold.me
