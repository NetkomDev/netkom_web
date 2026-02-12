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
    const animatedElements = document.querySelectorAll('.animate-up, .feature-card, .service-item, .section-header');

    animatedElements.forEach((el, index) => {
        // Add base class if not present
        if (!el.classList.contains('animate-up') &&
            !el.classList.contains('feature-card') &&
            !el.classList.contains('service-item')) {
            el.classList.add('reveal');
        } else {
            el.classList.add('reveal');
        }

        // Add staggering delays for grids
        if (el.classList.contains('feature-card') || el.classList.contains('service-item')) {
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

    // Portfolio Auto Slider Logic
    const portfolioSlider = document.querySelector('.portfolio-slider');
    const portfolioTrack = document.querySelector('.portfolio-track');

    if (portfolioSlider && portfolioTrack) {
        const items = Array.from(portfolioTrack.children);
        const originalCount = items.length;

        // Calculate dynamic width of one set
        function getSingleSetWidth() {
            const firstCard = items[0];
            const gap = 30; // Defined in CSS
            const cardWidth = firstCard.offsetWidth;
            return (cardWidth + gap) * originalCount;
        }

        // Clone items until we have enough width for seamless scrolling
        // We need: totalWidth > singleSetWidth + viewportWidth
        const singleSetWidth = getSingleSetWidth();
        let currentWidth = singleSetWidth;
        const viewportWidth = window.innerWidth;

        // Safety multiplier: ensure we have at least enough clones to cover viewport + buffer
        // Strategy: Keep cloning sets until total width is significantly larger than viewport
        while (currentWidth < (viewportWidth * 2) + singleSetWidth) {
            items.forEach(item => {
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                portfolioTrack.appendChild(clone);
            });
            currentWidth += singleSetWidth;
        }

        // Credentials Toggle Logic (Event Delegation)
        portfolioTrack.addEventListener('click', (e) => {
            const toggleBtn = e.target.closest('.toggle-credentials');
            if (toggleBtn) {
                e.preventDefault();
                e.stopPropagation();

                const content = toggleBtn.nextElementSibling;
                const isHidden = window.getComputedStyle(content).display === 'none';

                content.style.display = isHidden ? 'block' : 'none';

                const icon = toggleBtn.querySelector('i');
                if (icon) {
                    icon.className = isHidden ? 'fas fa-unlock' : 'fas fa-key';
                    icon.style.marginRight = '6px';
                }
            }
        });

        // Auto Scroll Logic
        let scrollAmount = 0;
        const speed = 0.5; // Smooth slow speed
        let isPaused = false;
        let animationId;

        function autoScroll() {
            if (!isPaused) {
                scrollAmount += speed;

                // Seamless Reset Logic:
                // Once we've scrolled past the first full set, reset to 0.
                if (scrollAmount >= singleSetWidth) {
                    scrollAmount = 0;
                    // Reset scrollLeft instantly to 0 (start of track)
                }

                portfolioSlider.scrollLeft = scrollAmount;
            } else {
                // Handle manual infinite scroll wrap-around
                if (portfolioSlider.scrollLeft >= singleSetWidth) {
                    portfolioSlider.scrollLeft -= singleSetWidth;
                    scrollAmount = portfolioSlider.scrollLeft;
                } else if (portfolioSlider.scrollLeft <= 0) {
                    // If manual backward scroll, this logic is complex to get perfect without visual jump
                    // But strictly speaking for infinite loop forward:
                } else {
                    scrollAmount = portfolioSlider.scrollLeft;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        }

        // Start animation
        animationId = requestAnimationFrame(autoScroll);

        // Pause on interaction
        portfolioSlider.addEventListener('mouseenter', () => isPaused = true);
        portfolioSlider.addEventListener('mouseleave', () => isPaused = false);
        portfolioSlider.addEventListener('touchstart', () => isPaused = true, { passive: true });
        portfolioSlider.addEventListener('touchend', () => {
            setTimeout(() => isPaused = false, 1000);
        });
    }
});
