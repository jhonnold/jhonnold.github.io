export function initAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            }
        },
        { threshold: 0.15 }
    );

    reveals.forEach(el => observer.observe(el));
}
