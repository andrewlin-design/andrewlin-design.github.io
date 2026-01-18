// Project data structure - easily scalable for adding new projects
const projectsData = [
    {
        id: 'ecommerce-redesign',
        title: 'E-commerce Platform Redesign',
        subtitle: 'User Experience • Shipped 2025',
        description: 'Complete redesign of a major e-commerce platform, improving conversion rates by 35% and reducing cart abandonment by 28%.',
        image: './assets/images/projects/ecommerce-redesign.jpg',
        tags: ['UX Research', 'Prototyping', 'Design Systems', 'A/B Testing'],
        featured: true,
        year: 2025,
        client: 'E-commerce Company',
        duration: '6 months',
        role: 'Lead UX Designer',
        team: ['Product Manager', 'Frontend Developer', 'Backend Developer'],
        challenges: [
            'Complex checkout flow causing high abandonment rates',
            'Inconsistent design patterns across different sections',
            'Poor mobile experience affecting mobile sales'
        ],
        solutions: [
            'Streamlined checkout to 3 simple steps',
            'Created comprehensive design system',
            'Implemented mobile-first responsive design'
        ],
        results: [
            '35% increase in conversion rate',
            '28% reduction in cart abandonment',
            '45% improvement in mobile sales'
        ]
    },
    {
        id: 'mobile-banking-app',
        title: 'Mobile Banking App',
        subtitle: 'Fintech • Concept 2024',
        description: 'Designed a next-generation mobile banking experience focused on financial wellness and intuitive money management.',
        image: './assets/images/projects/mobile-banking.jpg',
        tags: ['Mobile Design', 'Fintech', 'User Research', 'Accessibility'],
        featured: true,
        year: 2024,
        client: 'Financial Institution',
        duration: '4 months',
        role: 'Senior UX Designer',
        team: ['Product Manager', 'iOS Developer', 'Android Developer'],
        challenges: [
            'Complex financial data visualization',
            'Ensuring accessibility for all users',
            'Balancing security with usability'
        ],
        solutions: [
            'Created clear, scannable financial dashboards',
            'Implemented comprehensive accessibility features',
            'Designed progressive security measures'
        ],
        results: [
            '4.8/5 App Store rating',
            '60% increase in daily active users',
            'WCAG 2.1 AA compliance achieved'
        ]
    },
    {
        id: 'healthcare-dashboard',
        title: 'Healthcare Provider Dashboard',
        subtitle: 'Healthcare • Shipped 2024',
        description: 'Comprehensive dashboard for healthcare providers to manage patient data, appointments, and clinical workflows.',
        image: './assets/images/projects/healthcare-dashboard.jpg',
        tags: ['Dashboard Design', 'Healthcare', 'Data Visualization', 'Workflow'],
        featured: true,
        year: 2024,
        client: 'Healthcare Technology Company',
        duration: '8 months',
        role: 'UX Designer',
        team: ['Product Manager', 'Full-stack Developer', 'Healthcare Consultant'],
        challenges: [
            'Complex medical data requiring clear visualization',
            'Diverse user needs across different medical specialties',
            'Strict HIPAA compliance requirements'
        ],
        solutions: [
            'Developed modular dashboard components',
            'Created role-based customization options',
            'Implemented privacy-first design patterns'
        ],
        results: [
            '40% reduction in task completion time',
            '25% increase in user satisfaction',
            'Full HIPAA compliance certification'
        ]
    },
    {
        id: 'learning-platform',
        title: 'Online Learning Platform',
        subtitle: 'Education • Concept 2023',
        description: 'Interactive learning platform that adapts to individual learning styles and provides personalized educational experiences.',
        image: './assets/images/projects/learning-platform.jpg',
        tags: ['EdTech', 'Personalization', 'Interactive Design', 'Gamification'],
        featured: false,
        year: 2023,
        client: 'Educational Technology Startup',
        duration: '5 months',
        role: 'UX Designer',
        team: ['Product Manager', 'Frontend Developer', 'Learning Specialist'],
        challenges: [
            'Engaging different learning styles and preferences',
            'Complex content organization and navigation',
            'Maintaining motivation through long courses'
        ],
        solutions: [
            'Adaptive learning path algorithms',
            'Intuitive content categorization system',
            'Gamification elements and progress tracking'
        ],
        results: [
            '70% course completion rate',
            '85% user engagement improvement',
            '4.7/5 user satisfaction rating'
        ]
    },
    {
        id: 'smart-home-app',
        title: 'Smart Home Control App',
        subtitle: 'IoT • Prototype 2023',
        description: 'Unified control interface for smart home devices, focusing on automation and energy efficiency.',
        image: './assets/images/projects/smart-home.jpg',
        tags: ['IoT', 'Mobile App', 'Automation', 'Energy Management'],
        featured: false,
        year: 2023,
        client: 'Smart Home Technology Company',
        duration: '3 months',
        role: 'UX Designer',
        team: ['Product Manager', 'Mobile Developer', 'IoT Engineer'],
        challenges: [
            'Managing multiple device types and protocols',
            'Creating intuitive automation rules',
            'Balancing features with simplicity'
        ],
        solutions: [
            'Device-agnostic interface design',
            'Visual automation rule builder',
            'Progressive disclosure of advanced features'
        ],
        results: [
            'Prototype validated with 95% user approval',
            '50% reduction in setup time',
            'Successful investor presentation'
        ]
    },
    {
        id: 'food-delivery-redesign',
        title: 'Food Delivery App Redesign',
        subtitle: 'Food & Beverage • Shipped 2022',
        description: 'Complete redesign of a food delivery platform to improve order accuracy and delivery tracking experience.',
        image: './assets/images/projects/food-delivery.jpg',
        tags: ['Mobile Design', 'User Journey', 'Real-time Tracking', 'Personalization'],
        featured: false,
        year: 2022,
        client: 'Food Delivery Startup',
        duration: '4 months',
        role: 'Junior UX Designer',
        team: ['Senior Designer', 'Product Manager', 'Mobile Developer'],
        challenges: [
            'High order error rates and customer complaints',
            'Poor delivery tracking causing anxiety',
            'Complex menu navigation and search'
        ],
        solutions: [
            'Enhanced order review and confirmation flow',
            'Real-time delivery tracking with notifications',
            'AI-powered menu recommendations and search'
        ],
        results: [
            '60% reduction in order errors',
            '40% improvement in customer satisfaction',
            '25% increase in repeat orders'
        ]
    }
];

// Project management class
class ProjectManager {
    constructor() {
        this.projectsContainer = null;
        this.projects = projectsData;
        this.currentFilter = 'all';
        
        this.init();
    }
    
    init() {
        this.projectsContainer = document.getElementById('projectsGrid');
        if (this.projectsContainer) {
            this.renderProjects();
            this.setupFilters();
        }
    }
    
    renderProjects(filter = 'all') {
        if (!this.projectsContainer) return;
        
        let filteredProjects = this.projects;
        
        // Apply filters
        if (filter === 'featured') {
            filteredProjects = this.projects.filter(project => project.featured);
        } else if (filter !== 'all') {
            filteredProjects = this.projects.filter(project => 
                project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
            );
        }
        
        // Sort by year (newest first)
        filteredProjects.sort((a, b) => b.year - a.year);
        
        // Create projects container HTML
        const projectsHTML = `
            <div class="projects-container">
                ${filteredProjects.map(project => this.createProjectCard(project)).join('')}
            </div>
        `;
        
        // Update the projects grid section
        const existingContainer = this.projectsContainer.querySelector('.projects-container');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        this.projectsContainer.insertAdjacentHTML('beforeend', projectsHTML);
        
        // Add click events to project cards
        this.addProjectCardEvents();
    }
    
    createProjectCard(project) {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        return `
            <article class="project-card" data-project-id="${project.id}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='./assets/images/placeholder-project.jpg'">
                </div>
                <div class="project-content">
                    <p class="project-subtitle">${project.subtitle}</p>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </article>
        `;
    }
    
    addProjectCardEvents() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.dataset.projectId;
                this.openProjectModal(projectId);
            });
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
    
    setupFilters() {
        // Create filter buttons
        const filterContainer = document.createElement('div');
        filterContainer.className = 'project-filters';
        filterContainer.innerHTML = `
            <button class="filter-btn active" data-filter="all">All Projects</button>
            <button class="filter-btn" data-filter="featured">Featured</button>
            <button class="filter-btn" data-filter="mobile">Mobile</button>
            <button class="filter-btn" data-filter="dashboard">Dashboard</button>
            <button class="filter-btn" data-filter="research">Research</button>
        `;
        
        // Add styles for filter buttons
        const filterStyles = `
            .project-filters {
                display: flex;
                gap: var(--spacing-md);
                margin-bottom: var(--spacing-2xl);
                flex-wrap: wrap;
            }
            
            .filter-btn {
                padding: var(--spacing-sm) var(--spacing-lg);
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                border-radius: var(--border-radius);
                font-size: var(--font-size-sm);
                font-weight: 500;
                color: var(--color-text-secondary);
                cursor: pointer;
                transition: all var(--transition-fast);
            }
            
            .filter-btn:hover {
                background: var(--color-hover);
                border-color: var(--color-primary);
                color: var(--color-text);
            }
            
            .filter-btn.active {
                background: var(--color-primary);
                border-color: var(--color-primary);
                color: white;
            }
            
            @media (max-width: 640px) {
                .project-filters {
                    gap: var(--spacing-sm);
                }
                
                .filter-btn {
                    padding: var(--spacing-xs) var(--spacing-md);
                    font-size: var(--font-size-xs);
                }
            }
        `;
        
        // Add styles to head
        const styleElement = document.createElement('style');
        styleElement.textContent = filterStyles;
        document.head.appendChild(styleElement);
        
        // Insert filter container before projects container
        if (this.projectsContainer) {
            this.projectsContainer.insertBefore(filterContainer, this.projectsContainer.querySelector('.projects-container'));
        }
        
        // Add filter event listeners
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.currentFilter = filter;
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Render filtered projects
                this.renderProjects(filter);
            });
        });
    }
    
    openProjectModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;
        
        // Create modal HTML
        const modalHTML = `
            <div class="project-modal-overlay" id="projectModal">
                <div class="project-modal">
                    <button class="modal-close" aria-label="Close modal">&times;</button>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">${project.title}</h2>
                            <p class="modal-subtitle">${project.subtitle}</p>
                        </div>
                        
                        <div class="modal-image">
                            <img src="${project.image}" alt="${project.title}" onerror="this.src='./assets/images/placeholder-project.jpg'">
                        </div>
                        
                        <div class="modal-details">
                            <div class="project-info">
                                <div class="info-item">
                                    <strong>Client:</strong> ${project.client}
                                </div>
                                <div class="info-item">
                                    <strong>Duration:</strong> ${project.duration}
                                </div>
                                <div class="info-item">
                                    <strong>Role:</strong> ${project.role}
                                </div>
                                <div class="info-item">
                                    <strong>Year:</strong> ${project.year}
                                </div>
                            </div>
                            
                            <div class="project-description">
                                <h3>Project Overview</h3>
                                <p>${project.description}</p>
                            </div>
                            
                            <div class="project-challenges">
                                <h3>Challenges</h3>
                                <ul>
                                    ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="project-solutions">
                                <h3>Solutions</h3>
                                <ul>
                                    ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="project-results">
                                <h3>Results</h3>
                                <ul>
                                    ${project.results.map(result => `<li>${result}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal styles
        this.addModalStyles();
        
        // Insert modal into DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add event listeners
        this.setupModalEvents();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Animate modal in
        setTimeout(() => {
            const modal = document.getElementById('projectModal');
            if (modal) {
                modal.classList.add('active');
            }
        }, 10);
    }
    
    addModalStyles() {
        if (document.getElementById('projectModalStyles')) return;
        
        const styles = `
            .project-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                overflow-y: auto;
                padding: var(--spacing-xl);
            }
            
            .project-modal-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            
            .project-modal {
                max-width: 900px;
                margin: 0 auto;
                background: var(--color-background);
                border-radius: var(--border-radius-lg);
                position: relative;
                transform: translateY(20px);
                transition: transform 0.3s ease;
            }
            
            .project-modal-overlay.active .project-modal {
                transform: translateY(0);
            }
            
            .modal-close {
                position: absolute;
                top: var(--spacing-lg);
                right: var(--spacing-lg);
                width: 40px;
                height: 40px;
                background: var(--color-surface);
                border: none;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                z-index: 10001;
                transition: all var(--transition-fast);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-close:hover {
                background: var(--color-hover);
            }
            
            .modal-content {
                padding: var(--spacing-2xl);
            }
            
            .modal-header {
                text-align: center;
                margin-bottom: var(--spacing-xl);
            }
            
            .modal-title {
                font-size: var(--font-size-3xl);
                margin-bottom: var(--spacing-sm);
            }
            
            .modal-subtitle {
                color: var(--color-text-secondary);
                font-size: var(--font-size-base);
            }
            
            .modal-image {
                margin-bottom: var(--spacing-2xl);
                border-radius: var(--border-radius-lg);
                overflow: hidden;
            }
            
            .modal-image img {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }
            
            .project-info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--spacing-lg);
                margin-bottom: var(--spacing-2xl);
                padding: var(--spacing-lg);
                background: var(--color-surface);
                border-radius: var(--border-radius);
            }
            
            .info-item {
                font-size: var(--font-size-sm);
                color: var(--color-text-secondary);
            }
            
            .info-item strong {
                color: var(--color-text);
            }
            
            .modal-details h3 {
                font-size: var(--font-size-lg);
                margin-bottom: var(--spacing-md);
                color: var(--color-text);
            }
            
            .modal-details > div {
                margin-bottom: var(--spacing-2xl);
            }
            
            .modal-details ul {
                list-style: none;
                padding: 0;
            }
            
            .modal-details li {
                padding: var(--spacing-sm) 0;
                border-bottom: 1px solid var(--color-border);
                position: relative;
                padding-left: var(--spacing-lg);
            }
            
            .modal-details li::before {
                content: '•';
                color: var(--color-primary);
                font-weight: bold;
                position: absolute;
                left: 0;
            }
            
            .modal-details li:last-child {
                border-bottom: none;
            }
            
            @media (max-width: 768px) {
                .project-modal-overlay {
                    padding: var(--spacing-md);
                }
                
                .modal-content {
                    padding: var(--spacing-lg);
                }
                
                .modal-title {
                    font-size: var(--font-size-2xl);
                }
                
                .project-info {
                    grid-template-columns: 1fr;
                }
                
                .modal-image img {
                    height: 200px;
                }
            }
        `;
        
        const styleElement = document.createElement('style');
        styleElement.id = 'projectModalStyles';
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }
    
    setupModalEvents() {
        const modal = document.getElementById('projectModal');
        const closeBtn = modal.querySelector('.modal-close');
        
        // Close modal events
        closeBtn.addEventListener('click', this.closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    closeModal() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    }
    
    // Method to add new projects (for scalability)
    addProject(projectData) {
        this.projects.unshift(projectData); // Add to beginning
        this.renderProjects(this.currentFilter);
    }
    
    // Method to get projects by tag
    getProjectsByTag(tag) {
        return this.projects.filter(project => 
            project.tags.some(projectTag => 
                projectTag.toLowerCase().includes(tag.toLowerCase())
            )
        );
    }
    
    // Method to get featured projects
    getFeaturedProjects() {
        return this.projects.filter(project => project.featured);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.projectManager = new ProjectManager();
});