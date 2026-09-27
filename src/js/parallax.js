// Hero parallax: one passive scroll listener, one rAF per frame, transforms only.
const DESKTOP = { copy: 0.5, fade: 420, nav: 500 };
const MOBILE = { copy: 0.3, fade: 360, nav: 400 };

export function initParallax() {
    const hero = document.getElementById('top');
    if (!hero) return;

    const nav = document.querySelector('[data-nav]');
    const wide = window.matchMedia('(min-width: 40rem)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    let layers = [];
    let tune = DESKTOP;
    let queued = false;

    function pickScene() {
        tune = wide.matches ? DESKTOP : MOBILE;
        layers = [...hero.querySelectorAll(`[data-scene="${wide.matches ? 'desktop' : 'mobile'}"] [data-speed]`)];
    }

    function paint() {
        queued = false;
        const y = window.scrollY;
        const heroHeight = hero.offsetHeight;
        // Scoped to the nav and hero so each frame restyles only those subtrees, not the whole page.
        nav?.style.setProperty('--nav-bg', Math.min(1, y / tune.nav));
        nav?.style.setProperty('--nav-line', Math.min(1, Math.max(0, (y - heroHeight + 200) / 200)));
        if (calm.matches || y > heroHeight) return;
        for (const el of layers) el.style.transform = `translate3d(0, ${y * el.dataset.speed}px, 0)`;
        hero.style.setProperty('--copy-y', `${y * tune.copy}px`);
        hero.style.setProperty('--fade', Math.max(0, 1 - y / tune.fade));
    }

    function queue() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(paint);
    }

    window.addEventListener('scroll', queue, { passive: true });
    wide.addEventListener('change', () => {
        pickScene();
        queue();
    });
    calm.addEventListener('change', queue);

    pickScene();
    paint();
}
