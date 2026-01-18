// Main application initialization and utilities
class PortfolioApp {
    constructor() {
        this.isLoaded = false;
        this.currentTheme = 'light';
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.onDOMReady();
            });
        } else {
            this.onDOMReady();
        }
    }
    
    onDOMReady() {
        this.setupIntersectionObserver();
        this.setupLazyLoading();
        this.setupScrollEffects();
        this.setupFormHandling();
        this.setupAccessibility();
        this.setupPerformanceOptimizations();
        
        // Mark as loaded
        this.isLoaded = true;
        document.body.classList.add('app-loaded');
        
        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('portfolioLoaded'));
    }
    
    setupIntersectionObserver() {
        // Animate elements when they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate in
        const animateElements = document.querySelectorAll(
            '.project-card, .timeline-item, .skill-category, .principle, .contact-method'
        );
        
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    setupLazyLoading() {
        // Enhanced lazy loading for images
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Create a new image to preload
                    const newImg = new Image();
                    newImg.onload = () => {
                        img.src = newImg.src;
                        img.classList.add('loaded');
                    };
                    
                    newImg.onerror = () => {
                        img.src = './assets/images/placeholder-project.jpg';
                        img.classList.add('error');
                    };
                    
                    // Start loading
                    if (img.dataset.src) {
                        newImg.src = img.dataset.src;
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        
        // Observe all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrollY = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // Parallax effect for hero section
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const heroOffset = scrollY * 0.5;
                heroSection.style.transform = `translateY(${heroOffset}px)`;
            }
            
            // Update navigation indicator
            this.updateActiveSection();
            
            ticking = false;
        };
        
        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }
    
    updateActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    setupFormHandling() {
        // Handle contact form if it exists
        const contactForms = document.querySelectorAll('form[data-contact-form]');
        
        contactForms.forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.handleFormSubmission(form);
            });
        });
    }
    
    async handleFormSubmission(form) {
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Here you would typically send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            this.showNotification('Message sent successfully!', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            this.showNotification('Failed to send message. Please try again.', 'error');
            console.error('Form submission error:', error);
            
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles if not already present
        if (!document.getElementById('notificationStyles')) {
            const styles = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 16px 24px;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    max-width: 400px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                }
                
                .notification-success { background: #10b981; }
                .notification-error { background: #ef4444; }
                .notification-info { background: #3b82f6; }
                .notification-warning { background: #f59e0b; }
                
                .notification.show {
                    transform: translateX(0);
                }
            `;
            
            const styleElement = document.createElement('style');
            styleElement.id = 'notificationStyles';
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }
        
        // Add to DOM and show
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    setupAccessibility() {
        // Enhanced keyboard navigation
        this.setupKeyboardNavigation();
        
        // Skip link for accessibility
        this.createSkipLink();
        
        // Announce page changes to screen readers
        this.setupScreenReaderAnnouncements();
        
        // Focus management
        this.setupFocusManagement();
    }
    
    setupKeyboardNavigation() {
        // Add keyboard support for interactive elements
        document.addEventListener('keydown', (e) => {
            // Escape key handling
            if (e.key === 'Escape') {
                this.handleEscape();
            }
            
            // Tab navigation enhancements
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
        });
    }
    
    createSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link sr-only';
        skipLink.textContent = 'Skip to main content';
        
        // Add styles
        const styles = `
            .skip-link {
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--color-primary);
                color: white;
                padding: 8px;
                border-radius: 4px;
                text-decoration: none;
                transition: top 0.3s;
                z-index: 10001;
            }
            
            .skip-link:focus {
                top: 6px;
            }
        `;
        
        if (!document.getElementById('skipLinkStyles')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'skipLinkStyles';
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    setupScreenReaderAnnouncements() {
        // Create aria-live region for announcements
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.id = 'announcer';
        document.body.appendChild(announcer);
        
        // Announce section changes
        window.addEventListener('hashchange', () => {
            const currentSection = window.location.hash.substring(1) || 'home';
            const sectionNames = {
                home: 'Work section',
                about: 'About section',
                contact: 'Contact section'
            };
            
            const announcement = sectionNames[currentSection] || `${currentSection} section`;
            this.announce(`Navigated to ${announcement}`);
        });
    }
    
    announce(message) {
        const announcer = document.getElementById('announcer');
        if (announcer) {
            announcer.textContent = message;
        }
    }
    
    setupFocusManagement() {
        // Track the last focused element before opening modals
        this.lastFocusedElement = null;
        
        document.addEventListener('focusin', (e) => {
            if (!e.target.closest('.project-modal')) {
                this.lastFocusedElement = e.target;
            }
        });
    }
    
    handleEscape() {
        // Close any open modals
        const modal = document.querySelector('.project-modal-overlay.active');
        if (modal && window.projectManager) {
            window.projectManager.closeModal();
        }
        
        // Close mobile menu
        if (window.navigation) {
            window.navigation.closeMobileMenu();
        }
    }
    
    handleTabNavigation(e) {
        // Trap focus in modals
        const modal = document.querySelector('.project-modal-overlay.active');
        if (modal) {
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
    
    setupPerformanceOptimizations() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Setup connection to external domains
        this.setupResourceHints();
        
        // Monitor performance
        this.setupPerformanceMonitoring();
    }
    
    preloadCriticalResources() {
        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);
        
        // Preload hero image if it exists
        const heroImage = document.querySelector('.about-image img');
        if (heroImage && heroImage.src) {
            const imagePreload = document.createElement('link');
            imagePreload.rel = 'preload';
            imagePreload.href = heroImage.src;
            imagePreload.as = 'image';
            document.head.appendChild(imagePreload);
        }
    }
    
    setupResourceHints() {
        // DNS prefetch for external domains
        const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
        
        domains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = `//${domain}`;
            document.head.appendChild(link);
        });
    }
    
    setupPerformanceMonitoring() {
        // Log performance metrics
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const perfData = window.performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                
                // Log Largest Contentful Paint if available
                if ('PerformanceObserver' in window) {
                    const observer = new PerformanceObserver((entryList) => {
                        const entries = entryList.getEntries();
                        const lastEntry = entries[entries.length - 1];
                        console.log('LCP:', lastEntry.startTime, 'ms');
                    });
                    
                    observer.observe({ entryTypes: ['largest-contentful-paint'] });
                }
            }
        });
    }
    
    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Theme management
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        this.announce(`Switched to ${this.currentTheme} theme`);
    }
    
    initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        this.currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', this.currentTheme);
            }
        });
    }
}

// Initialize application
const portfolioApp = new PortfolioApp();

// Export for global access
window.portfolioApp = portfolioApp;

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}