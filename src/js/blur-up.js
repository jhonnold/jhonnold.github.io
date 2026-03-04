export function initBlurUp() {
    const images = document.querySelectorAll('.blur-up');

    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
        }
    });
}
