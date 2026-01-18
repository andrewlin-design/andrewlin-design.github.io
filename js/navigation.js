// Navigation functionality
class Navigation {
    constructor() {
        this.sideNav = document.getElementById('sideNav');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        
        this.init();
    }
    
    init() {
        // Mobile menu toggle
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                this.showSection(targetSection);
                this.setActiveLink(link);
                
                // Close mobile menu on link click
                if (window.innerWidth <= 640) {
                    this.closeMobileMenu();
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 640) {
                if (!this.sideNav.contains(e.target) && !this.mobileMenuToggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && window.innerWidth <= 640) {
                this.closeMobileMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 640) {
                this.closeMobileMenu();
            }
        });
    }
    
    toggleMobileMenu() {
        const isOpen = this.sideNav.classList.contains('open');
        if (isOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
        this.sideNav.classList.add('open');
        this.mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add backdrop
        this.addBackdrop();
    }
    
    closeMobileMenu() {
        this.sideNav.classList.remove('open');
        this.mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
        
        // Remove backdrop
        this.removeBackdrop();
    }
    
    addBackdrop() {
        if (document.querySelector('.mobile-backdrop')) return;
        
        const backdrop = document.createElement('div');
        backdrop.className = 'mobile-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.25s ease;
        `;
        
        document.body.appendChild(backdrop);
        
        // Trigger animation
        setTimeout(() => {
            backdrop.style.opacity = '1';
        }, 10);
        
        // Close menu when backdrop is clicked
        backdrop.addEventListener('click', () => {
            this.closeMobileMenu();
        });
    }
    
    removeBackdrop() {
        const backdrop = document.querySelector('.mobile-backdrop');
        if (backdrop) {
            backdrop.style.opacity = '0';
            setTimeout(() => {
                backdrop.remove();
            }, 250);
        }
    }
    
    showSection(sectionId) {
        // Hide all sections
        this.sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Scroll to top of main content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollTop = 0;
            }
            
            // Add animation class
            setTimeout(() => {
                targetSection.classList.add('animate-fade-in');
            }, 50);
        }
        
        // Update URL hash without jumping
        history.pushState(null, null, `#${sectionId}`);
    }
    
    setActiveLink(activeLink) {
        // Remove active class from all links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        activeLink.classList.add('active');
    }
    
    // Initialize based on URL hash
    initializeFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetLink = document.querySelector(`[data-section="${hash}"]`);
            if (targetLink) {
                this.showSection(hash);
                this.setActiveLink(targetLink);
                return;
            }
        }
        
        // Default to home section
        const homeLink = document.querySelector('[data-section="home"]');
        if (homeLink) {
            this.showSection('home');
            this.setActiveLink(homeLink);
        }
    }
}

// Smooth scrolling for anchor links
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Handle hash changes
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                this.scrollToElement(hash);
            }
        });
    }
    
    scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const offset = 100; // Account for fixed navigation
            const elementPosition = element.offsetTop - offset;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    const smoothScroll = new SmoothScroll();
    
    // Initialize from URL hash
    navigation.initializeFromHash();
    
    // Export for global access
    window.navigation = navigation;
});