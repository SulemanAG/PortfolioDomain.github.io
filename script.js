function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle');

    // Toggle the body class between light and dark mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change the button icon based on the theme
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌙'; // Moon icon for dark mode
    } else {
        themeButton.textContent = '☀️'; // Sun icon for light mode
    }
}
