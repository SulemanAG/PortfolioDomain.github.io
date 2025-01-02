// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    // Toggle the sun and moon icons
    const themeToggle = document.querySelector('.theme-toggle');
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = "🌙";  // Show moon icon for light mode
    } else {
        themeToggle.innerHTML = "☀️";  // Show sun icon for dark mode
    }
}

// Scroll-triggered animations for text
const textSections = document.querySelectorAll('.fade-on-scroll');

window.addEventListener('scroll', () => {
    textSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        }
    });
});

// Cursor hover-triggered animations
document.querySelectorAll('.hover-animate').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('animate');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('animate');
    });
});
