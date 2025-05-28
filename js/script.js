document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    // Header Scroll Effect
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader();
    
    // Mobile Menu Toggle
    function toggleMenu() {
        mobileMenuBtn.classList.toggle('active');
        navbar.classList.toggle('active');
        
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    mobileMenuBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                toggleMenu();
            }
        });
    });
    
    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth >= 992) {
            navbar.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    window.addEventListener('resize', handleResize);
});