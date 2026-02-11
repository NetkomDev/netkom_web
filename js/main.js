document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.animate-up, .feature-card, .service-item, .portfolio-card, .section-header');

    animatedElements.forEach((el, index) => {
        // Add base class if not present
        if (!el.classList.contains('animate-up') &&
            !el.classList.contains('feature-card') &&
            !el.classList.contains('service-item') &&
            !el.classList.contains('portfolio-card')) {
            el.classList.add('reveal');
        } else {
            el.classList.add('reveal');
        }

        // Add staggering delays for grids
        if (el.classList.contains('feature-card') || el.classList.contains('service-item') || el.classList.contains('portfolio-card')) {
            // Calculate index within parent to stagger
            const parent = el.parentElement;
            const siblings = Array.from(parent.children);
            const myIndex = siblings.indexOf(el);
            el.style.transitionDelay = `${myIndex * 0.1}s`;
        }

        observer.observe(el);
    });

    // Stats Counter Animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 1500;
                    const start = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = Math.floor(target * eased);

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    }
                    requestAnimationFrame(updateCounter);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) statsObserver.observe(statsSection);
});
