// Highlight the section under the upper third of the viewport in the tmux bar and nav.
export function initTmux() {
    const links = [...document.querySelectorAll('[data-tmux-link], [data-nav-link]')];
    const sections = [...document.querySelectorAll('[data-tmux-link]')]
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                const href = `#${entry.target.id}`;
                links.forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') === href));
            }
        },
        { rootMargin: '-33% 0px -66% 0px' },
    );

    sections.forEach(section => observer.observe(section));
}
