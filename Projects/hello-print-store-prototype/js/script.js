/* ============================================
   Hello Print Store - JavaScript Interactions
   ============================================ */

// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');
const scrollIndicator = document.getElementById('scrollIndicator');
const hero = document.getElementById('hero');
const ctaButtons = document.querySelectorAll('.cta-button');

// ============================================
// Mobile Menu Toggle
// ============================================

menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    headerNav.classList.toggle('active');
});

// Close menu when nav link clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    }
});

// ============================================
// Scroll Detection
// ============================================

let scrollTimeout;
let isScrolling = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // Hide scroll indicator when user scrolls
    if (scrollPosition > 100) {
        scrollIndicator.classList.add('hide');
        isScrolling = true;
    } else {
        scrollIndicator.classList.remove('hide');
        isScrolling = false;
    }

    // Add shadow to header on scroll
    if (scrollPosition > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }

    // Parallax effect on background (subtle)
    const bgElement = document.querySelector('.hero-bg');
    if (scrollPosition < heroHeight) {
        const offset = scrollPosition * 0.5;
        bgElement.style.transform = `translateY(${offset}px)`;
    }
}, { passive: true });

// ============================================
// Scroll Indicator Click
// ============================================

scrollIndicator?.addEventListener('click', () => {
    window.scrollTo({
        top: hero.offsetHeight,
        behavior: 'smooth'
    });
});

// ============================================
// CTA Button Analytics (Placeholder)
// ============================================

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const text = button.textContent;
        console.log(`CTA clicked: ${text}`);
        
        // Add visual feedback
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    });
});

// ============================================
// Smooth Scroll Behavior Enhancement
// ============================================

// Improve scrollbar visibility on scroll
let scrollbarVisibilityTimeout;
document.addEventListener('wheel', () => {
    clearTimeout(scrollbarVisibilityTimeout);
    document.documentElement.style.scrollbarGutter = 'auto';
    
    scrollbarVisibilityTimeout = setTimeout(() => {
        document.documentElement.style.scrollbarGutter = 'stable';
    }, 2000);
}, { passive: true });

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    // Close menu on Escape
    if (e.key === 'Escape' && headerNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    }
    
    // Space or Arrow Down to scroll
    if (e.key === ' ' || e.key === 'ArrowDown') {
        if (!isScrolling && scrollIndicator.offsetParent !== null) {
            e.preventDefault();
            window.scrollTo({
                top: hero.offsetHeight,
                behavior: 'smooth'
            });
        }
    }
});

// ============================================
// Responsive Behavior
// ============================================

let isMobile = window.innerWidth <= 768;

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    
    // Close mobile menu on resize to desktop
    if (!isMobile && headerNav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    }
}, { passive: true });

// ============================================
// Accessibility - Focus Management
// ============================================

// Trap focus in mobile menu when open
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !headerNav.classList.contains('active')) {
        return;
    }
    
    const focusableElements = headerNav.querySelectorAll('a, button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        }
    } else {
        if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// ============================================
// Preload Images
// ============================================

function preloadImages() {
    const images = document.querySelectorAll('img, [style*="background-image"]');
    images.forEach(img => {
        if (img.style.backgroundImage) {
            const url = img.style.backgroundImage.slice(4, -1).replace(/"/g, '');
            const image = new Image();
            image.src = url;
        }
    });
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// ============================================
// Performance Monitoring
// ============================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const timingData = window.performance.timing;
        const pageLoadTime = timingData.loadEventEnd - timingData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}

// ============================================
// Service Worker Registration (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').catch(err => {
        //     console.log('ServiceWorker registration failed:', err);
        // });
    });
}
