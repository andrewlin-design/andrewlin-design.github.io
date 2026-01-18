export const companies = [
  {
    id: 'jpmorgan',
    name: 'JP Morgan Chase',
    logo: '/assets/logos/jpmorgan.svg',
    projects: [
      {
        id: 'mobile-banking-redesign',
        title: 'Mobile Banking App Redesign',
        description: 'Redesigned the mobile banking experience to improve user engagement and reduce support calls',
        overview: 'Led the redesign of JP Morgan Chase\'s mobile banking application, focusing on improving the user experience for everyday banking tasks. The project involved extensive user research, prototyping, and testing to create a more intuitive and accessible interface.',
        challenge: 'The existing mobile app had poor user ratings and high support call volumes. Users struggled with basic tasks like transfers and bill payments, leading to frustration and decreased digital adoption.',
        solution: 'Implemented a user-centered design approach with simplified navigation, clear visual hierarchy, and intuitive workflows. Created a comprehensive design system to ensure consistency across all features.',
        impact: 'Increased user satisfaction by 40%, reduced support calls by 25%, and improved task completion rates by 35%.',
        timeline: '6 months',
        role: 'Lead UX Designer',
        team: 'Product Manager, 2 UX Designers, 4 Developers, UX Researcher',
        images: [
          '/assets/projects/jpmorgan/overview.jpg',
          '/assets/projects/jpmorgan/wireframes.jpg',
          '/assets/projects/jpmorgan/final-design.jpg'
        ]
      }
    ]
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: '/assets/logos/shopify.svg',
    projects: [
      {
        id: 'merchant-dashboard',
        title: 'Merchant Analytics Dashboard',
        description: 'Designed a comprehensive analytics dashboard for Shopify merchants',
        overview: 'Created an intuitive analytics dashboard that helps Shopify merchants understand their business performance through clear data visualization and actionable insights.',
        challenge: 'Merchants were overwhelmed by data and couldn\'t easily identify trends or opportunities for growth. The existing analytics were scattered across multiple pages.',
        solution: 'Designed a unified dashboard with customizable widgets, clear KPIs, and drill-down capabilities. Implemented progressive disclosure to show relevant information at the right time.',
        impact: 'Increased merchant engagement with analytics by 60% and improved data-driven decision making.',
        timeline: '4 months',
        role: 'Senior UX Designer',
        team: 'Product Manager, UX Researcher, 3 Developers, Data Analyst',
        images: [
          '/assets/projects/shopify/dashboard.jpg',
          '/assets/projects/shopify/components.jpg'
        ]
      }
    ]
  },
  {
    id: 'kayak',
    name: 'Kayak',
    logo: '/assets/logos/kayak.svg',
    projects: [
      {
        id: 'trip-planning',
        title: 'Trip Planning Experience',
        description: 'Redesigned the trip planning flow to reduce booking abandonment',
        overview: 'Streamlined the trip planning and booking process on Kayak to reduce user friction and increase conversion rates.',
        challenge: 'High abandonment rates during the booking process and user feedback indicating the flow was too complex and overwhelming.',
        solution: 'Simplified the booking flow with a step-by-step approach, improved search filters, and added save-for-later functionality.',
        impact: 'Reduced booking abandonment by 30% and increased completed bookings by 25%.',
        timeline: '5 months',
        role: 'UX Designer',
        team: 'Product Manager, UX Researcher, 2 UX Designers, 5 Developers',
        images: [
          '/assets/projects/kayak/user-flow.jpg',
          '/assets/projects/kayak/booking-flow.jpg'
        ]
      }
    ]
  },
  {
    id: 'hp',
    name: 'HP',
    logo: '/assets/logos/hp.svg',
    projects: [
      {
        id: 'printer-setup',
        title: 'Wireless Printer Setup',
        description: 'Simplified the wireless printer setup process for better user experience',
        overview: 'Redesigned HP\'s wireless printer setup experience to reduce setup time and support calls.',
        challenge: 'Users struggled with connecting their printers to WiFi networks, leading to high support volumes and poor customer satisfaction.',
        solution: 'Created a guided setup wizard with clear visual instructions, automatic network detection, and troubleshooting tips.',
        impact: 'Reduced setup time by 50% and decreased setup-related support calls by 40%.',
        timeline: '3 months',
        role: 'UX Designer',
        team: 'Product Manager, UX Researcher, 3 Developers, Technical Writer',
        images: [
          '/assets/projects/hp/setup-flow.jpg',
          '/assets/projects/hp/mobile-app.jpg'
        ]
      }
    ]
  }
];

export const getCompanyById = (id) => {
  return companies.find(company => company.id === id);
};

export const getProjectById = (companyId, projectId) => {
  const company = getCompanyById(companyId);
  return company?.projects.find(project => project.id === projectId);
};