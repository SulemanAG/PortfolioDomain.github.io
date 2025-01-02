// JavaScript to handle theme toggle and animations

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Change theme when the toggle is clicked
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '🌞';  // Change to sun icon
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';  // Change to moon icon
    }
});

// Add scroll-based animations for the personal details and find-me sections
const personalDetailsSection = document.getElementById('personal-details');
const findMeSection = document.getElementById('find-me');

// Function to add an "animate" class when scrolled into view
const animateOnScroll = () => {
    const sections = [personalDetailsSection, findMeSection];
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('animate');
        }
    });
};

// Trigger the animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);
