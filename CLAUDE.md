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
- `src/js/` — JS modules (hero parallax, tmux/nav active section, mobile menu, blur-up image loading)
- `src/css/` — Tailwind + self-hosted fonts (`@fontsource-variable` Bricolage Grotesque + JetBrains Mono)
- `scripts/optimize-images.js` — Sharp-based image optimization (runs as prebuild)
- `public/` — Static assets (CNAME, images)

## Key Details

- Tailwind CSS v4 (uses `@tailwindcss/vite` plugin, not PostCSS)
- "Dusk Terminal" design: tokens live in the `@theme` block of `src/css/main.css`; breakpoints are `sm` 640 (tablet), `md` 768 (desktop nav), `lg` 1024 (desktop layouts)
- Hero art is inline SVG in `index.html`: one `<svg class="layer" data-speed>` per parallax layer, separate desktop/mobile scenes
- `vite-plugin-html` minifies whitespace around `<br>`; use block/inline spans for responsive line breaks
- `postbuild` copies index.html to 404.html for GitHub Pages SPA routing
- Deployed to GitHub Pages from `main` branch
- Custom domain: honnold.me
