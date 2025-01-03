const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                themeToggle.innerHTML = '☀️';
                document.documentElement.style.setProperty('--bg-color', '#f0f4f8');
                document.documentElement.style.setProperty('--text-color', '#333333');
                document.documentElement.style.setProperty('--section-bg', '#ffffff');
            } else {
                themeToggle.innerHTML = '🌙';
                document.documentElement.style.setProperty('--bg-color', '#0a192f');
                document.documentElement.style.setProperty('--text-color', '#e0e0e0');
                document.documentElement.style.setProperty('--section-bg', '#172a45');
            }
     });
