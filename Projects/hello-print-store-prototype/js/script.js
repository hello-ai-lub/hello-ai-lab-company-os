// ============================================
// Hello Print Store - Interactive Features
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollDetection();
    initIntersectionObserver();
    initCTAButtons();
    initKeyboardNavigation();
});

// ============================================
// Mobile Menu Toggle
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            headerNav.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                headerNav.classList.remove('active');
            });
        });
    }
}

// ============================================
// Scroll Detection
// ============================================

function initScrollDetection() {
    const header = document.querySelector('.header');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    let lastScrollPos = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.scrollY;

        // Hide scroll indicator when scrolling
        if (scrollIndicator) {
            if (currentScrollPos > window.innerHeight * 0.3) {
                scrollIndicator.classList.add('hide');
            } else {
                scrollIndicator.classList.remove('hide');
            }
        }

        // Parallax effect on hero
        const hero = document.querySelector('.hero-1');
        if (hero && currentScrollPos < window.innerHeight) {
            hero.style.backgroundPosition = `center ${currentScrollPos * 0.5}px`;
        }

        lastScrollPos = currentScrollPos;
    });

    // Scroll indicator click
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const firstSection = document.querySelector('.section-culture');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ============================================
// Intersection Observer for Reveal Animations
// ============================================

function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with reveal attributes
    const revealElements = document.querySelectorAll('[data-reveal-up], [data-reveal]');
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// CTA Buttons Analytics
// ============================================

function initCTAButtons() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.textContent.trim();
            console.log(`CTA Button Clicked: ${buttonText}`);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
        });
    });
}

// ============================================
// Keyboard Navigation
// ============================================

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape
        if (e.key === 'Escape') {
            const menuToggle = document.querySelector('.menu-toggle');
            const headerNav = document.querySelector('.header-nav');
            if (menuToggle && headerNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                headerNav.classList.remove('active');
            }
        }

        // Keyboard navigation
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (scrollIndicator && !scrollIndicator.classList.contains('hide')) {
                scrollIndicator.click();
            }
        }
    });
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// Performance: Lazy Load Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Accessibility: Skip to Main Content
// ============================================

const skipLink = document.createElement('a');
skipLink.textContent = 'Skip to main content';
skipLink.href = '#main';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-hello-orange);
    color: var(--color-white);
    padding: 8px;
    z-index: 99999;
    text-decoration: none;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ============================================
// Preload Critical Images
// ============================================

function preloadCriticalImages() {
    const criticalImages = document.querySelectorAll('[data-critical-image]');
    
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.style.backgroundImage.replace(/url\(['"]?([^'"]+)['"]?\)/g, '$1');
        document.head.appendChild(link);
    });
}

preloadCriticalImages();

// ============================================
// Scroll Progress Bar (Optional)
// ============================================

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 60px;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, var(--color-hello-orange), var(--color-hello-orange));
        z-index: 99;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Uncomment to enable scroll progress bar
// initScrollProgress();

console.log('Hello Print Store - Site loaded successfully ✓');
