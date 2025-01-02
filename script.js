// Toggle between light and dark theme
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('#theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeIcon.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});

// Scroll animation for images
const img = document.getElementById("profile-pic");

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        img.classList.add("fade-out");
    } else {
        img.classList.remove("fade-out");
    }
});
