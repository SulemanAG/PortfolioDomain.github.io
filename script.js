// Function to toggle between dark and light modes
function toggleTheme() {
    // Get the current body element
    const body = document.body;
    const sections = document.querySelectorAll('section');
    
    // Toggle theme classes for body
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    // Toggle theme classes for sections
    sections.forEach((section) => {
        section.classList.toggle('light-mode');
        section.classList.toggle('dark-mode');
    });

    // Toggle the theme button icon (sun/moon)
    const themeButton = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌙';  // Moon icon for dark mode
    } else {
        themeButton.textContent = '☀️';  // Sun icon for light mode
    }

    // Trigger re-animation for sections after theme toggle (Optional: If you want to re-trigger animations)
    triggerAnimations();
}

// Detect visibility of sections on scroll and add animation class
const sections = document.querySelectorAll('section');

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Function to trigger animations on page load and after theme switch
function triggerAnimations() {
    sections.forEach(section => {
        if (section.classList.contains('visible')) {
            section.classList.remove('visible');
        }
        // Trigger a re-animation
        setTimeout(() => {
            section.classList.add('visible');
        }, 50);
    });
}

// Initial check to add the class on page load
window.addEventListener('scroll', checkVisibility);

// Call the function on page load to check the sections visibility
checkVisibility();

// You can also call the toggleTheme function to toggle the theme on an event such as a button click
document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
