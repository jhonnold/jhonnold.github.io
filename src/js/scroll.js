export function initScrollNav() {
    const container = document.querySelector('[data-scroll-container]');
    const sections = document.querySelectorAll('[data-section]');
    const dots = document.querySelectorAll('[data-nav-dot]');

    if (!container || sections.length === 0) return;

    function setActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
            dot.setAttribute('aria-pressed', i === index);
        });
    }

    const observer = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.dataset.section);
                    setActiveDot(index);
                }
            }
        },
        { root: container, threshold: 0.5 },
    );

    sections.forEach(section => observer.observe(section));

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = Number(dot.dataset.navDot);
            sections[index]?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    container.addEventListener('keydown', e => {
        const currentIndex = [...dots].findIndex(d => d.classList.contains('active'));
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            e.preventDefault();
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });

    setActiveDot(0);
}
