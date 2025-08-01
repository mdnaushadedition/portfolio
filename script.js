
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');
        
        themeToggle.addEventListener('click', toggleTheme);
        mobileThemeToggle.addEventListener('click', toggleTheme);
        
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> &nbsp; Dark Theme';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> &nbsp; Lite Theme';
            }
        }
        
        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Active Navigation
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-items a, .mobile-menu a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Typing Effect
        const typingText = document.getElementById('typingText');
        const text = "My self Md Naushad alam (@naushad_edition ) I am web  developer (software engineer).....";
        let index = 0;
        let isDeleting = false;
        let speed = 100;
        
        function type() {
            const currentText = text.substring(0, index);
            typingText.innerHTML = currentText + '<span>|</span>';
            
            if (!isDeleting && index < text.length) {
                index++;
                setTimeout(type, speed);
            } else if (isDeleting && index > 0) {
                index--;
                setTimeout(type, speed);
            } else {
                isDeleting = !isDeleting;
                speed = isDeleting ? 50 : 100;
                setTimeout(type, 500);
            }
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            type();
        });