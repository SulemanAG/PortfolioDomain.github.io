function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
}

// Set initial theme based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('light-mode');
}

