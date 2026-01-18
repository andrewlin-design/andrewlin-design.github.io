# Andrew Lin Portfolio

A modern React-based portfolio website showcasing UX design work and case studies.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern React Architecture**: Built with React 18 and React Router v6
- **Component-Based**: Modular, reusable components for easy maintenance
- **Accessible**: WCAG-compliant design with proper semantic markup
- **Performance Optimized**: Fast loading with efficient asset management

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Site header with logo
│   ├── Sidebar.js      # Navigation sidebar
│   └── *.css           # Component-specific styles
├── pages/              # Page components
│   ├── HomePage.js     # Landing page
│   ├── CompanyPage.js  # Company portfolio pages
│   ├── ProjectPage.js  # Individual project case studies
│   └── *.css           # Page-specific styles
├── data/               # Data layer
│   └── companies.js    # Company and project data
├── assets/             # Static assets
│   └── logos/          # Company logos
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Adding New Content

### Adding a New Company

1. Add company data to `src/data/companies.js`:
   ```javascript
   {
     id: 'company-slug',
     name: 'Company Name',
     logo: '/assets/logos/company.svg',
     projects: [...]
   }
   ```

2. Add the company logo to `src/assets/logos/`

### Adding a New Project

1. Add project data to the company's projects array in `src/data/companies.js`:
   ```javascript
   {
     id: 'project-slug',
     title: 'Project Title',
     description: 'Brief description',
     overview: 'Detailed overview...',
     challenge: 'Problem statement...',
     solution: 'How you solved it...',
     impact: 'Results and metrics...',
     timeline: '6 months',
     role: 'Lead UX Designer',
     team: 'Team composition...',
     images: ['path/to/image1.jpg', ...]
   }
   ```

2. Add project images to `src/assets/projects/company-slug/`

## Design System

The portfolio uses a consistent design system with:

- **Typography**: Inter font family with clear hierarchy
- **Colors**: 
  - Primary: #0066cc (blue)
  - Text: #1a1a1a (dark gray)
  - Secondary text: #666666, #999999
  - Background: #ffffff, #fafafa
- **Spacing**: 8px base unit with consistent spacing scale
- **Components**: Reusable buttons, cards, and navigation elements

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is for portfolio purposes.