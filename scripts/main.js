document.addEventListener("DOMContentLoaded", () => {
    
    /* -----------------------------------------------
       1. Navbar Background Change on Scroll
    ----------------------------------------------- */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* -----------------------------------------------
       2. Intersection Observer for Fade In Animation
    ----------------------------------------------- */
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // stop observing once animated
            }
        });
    }, observerOptions);

    // Select all elements with the 'fade-on-scroll' class
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    /* -----------------------------------------------
       3. Simple Mobile Hamburger Toggle (Optional)
    ----------------------------------------------- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle visibility logic here if you want a mobile menu dropdown
            // For this demo, we'll just alert or do a simple console log
            // In a real project, you would toggle a class like .nav-active
            console.log("Hamburger clicked");
            
            // Example of simple toggle implementation:
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "70px";
                navLinks.style.right = "0";
                navLinks.style.background = "rgba(0,0,0,0.9)";
                navLinks.style.width = "100%";
                navLinks.style.padding = "20px";
                navLinks.style.textAlign = "center";
            }
        });
    }
});