function toggleTheme() {
    // Get the current body element
    const body = document.body;
    const sections = document.querySelectorAll('section');
    
    // Toggle classes for body and sections
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    sections.forEach((section) => {
        section.classList.toggle('light-mode');
        section.classList.toggle('dark-mode');
    });
    
    // Toggle the theme button icon
    const themeButton = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌙';  // Change to moon icon for dark mode
    } else {
        themeButton.textContent = '☀️';  // Change to sun icon for light mode
    }
}
