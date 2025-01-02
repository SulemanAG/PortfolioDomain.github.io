// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.querySelector('.theme-toggle');
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggleButton.innerHTML = '🌙'; // Moon icon for dark mode
    } else {
        themeToggleButton.innerHTML = '🌞'; // Sun icon for light mode
    }
}

// Scroll-triggered animations for image fading
window.addEventListener('scroll', function() {
    const image = document.querySelector('#find-me img');
    if (image) {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
            image.classList.add('fade-in');
            image.classList.remove('fade-out');
        } else {
            image.classList.add('fade-out');
            image.classList.remove('fade-in');
        }
    }
});
