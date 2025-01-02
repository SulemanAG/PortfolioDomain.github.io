// Script for Theme Toggle functionality
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeToggleButton.innerHTML = '🌞'; // Sun icon
    } else {
        body.classList.add('dark-theme');
        themeToggleButton.innerHTML = '🌙'; // Moon icon
    }
});
