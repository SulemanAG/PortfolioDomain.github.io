// Function to toggle theme between dark and light
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');

    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        themeToggle.textContent = '☀️'; // Sun symbol for light mode
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        themeToggle.textContent = '🌙'; // Moon symbol for dark mode
    }
}
