export function initAnimations() {
    const container = document.querySelector('[data-scroll-container]');
    const reveals = document.querySelectorAll('.reveal');
    if (!container || reveals.length === 0) return;

    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            }
        },
        { root: container, threshold: 0.1 },
    );

    reveals.forEach(el => observer.observe(el));
}
