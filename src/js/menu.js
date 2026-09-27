// Mobile nav: a full-width dropdown of the section links.
export function initMenu() {
    const nav = document.querySelector('[data-nav]');
    const button = document.querySelector('[data-menu-button]');
    const menu = document.querySelector('[data-menu]');
    if (!nav || !button || !menu) return;

    function setOpen(open) {
        button.setAttribute('aria-expanded', open);
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.classList.toggle('hidden', !open);
        menu.classList.toggle('flex', open);
        nav.toggleAttribute('data-open', open);
    }

    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', e => {
        if (e.target.closest('a')) setOpen(false);
    });
    // The menu is md:hidden; close it when the viewport grows so the nav doesn't keep its open state.
    window.matchMedia('(min-width: 48rem)').addEventListener('change', e => {
        if (e.matches) setOpen(false);
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            button.focus();
        }
    });
}
