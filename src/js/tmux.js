// Highlight the section under the upper third of the viewport in the tmux bar and nav.
export function initTmux() {
    const links = [...document.querySelectorAll('[data-tmux-link], [data-nav-link]')];
    const sections = [...document.querySelectorAll('[data-tmux-link]')]
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
    if (sections.length === 0) return;

    let queued = false;

    function update() {
        queued = false;
        const line = window.innerHeight / 3;
        // The last section can be too short to reach the line, so the page bottom selects it.
        const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
        const active = atEnd
            ? sections.at(-1)
            : (sections.findLast(s => s.getBoundingClientRect().top <= line) ?? sections[0]);
        const href = `#${active.id}`;
        for (const a of links) {
            if (a.getAttribute('href') === href) a.setAttribute('aria-current', 'location');
            else a.removeAttribute('aria-current');
        }
    }

    function queue() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(update);
    }

    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    update();
}
