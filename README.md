# Andrew Lin - UX Designer Portfolio

A modern, responsive portfolio website built for showcasing UX design work. This site is optimized for GitHub Pages hosting and follows best practices for performance, accessibility, and user experience.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Side Navigation**: Fixed navigation bar inspired by modern portfolio sites
- **Project Showcase**: Dynamic project grid with detailed case study modals
- **Performance Optimized**: Fast loading with lazy loading images and optimized assets
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **SEO Friendly**: Semantic HTML structure with meta tags
- **GitHub Pages Ready**: Static site with no backend dependencies

## 🚀 Getting Started

### Prerequisites
- Git
- Web browser
- Code editor (recommended: VS Code)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/andrewlin/andrewlin.github.io.git
   cd andrewlin.github.io
   ```

2. **Serve locally** (choose one option)
   
   **Option A: Using Python (if installed)**
   ```bash
   python -m http.server 8000
   ```
   
   **Option B: Using Node.js (if installed)**
   ```bash
   npx serve .
   ```
   
   **Option C: Using VS Code Live Server extension**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**
   - Navigate to `http://localhost:8000` (or the port shown in terminal)

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access your live site**
   - Your site will be available at: `https://yourusername.github.io`

## 📁 Project Structure

```
andrewlin.github.io/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet
│   └── responsive.css      # Responsive design styles
├── js/
│   ├── main.js            # Main application logic
│   ├── navigation.js      # Navigation functionality
│   └── projects.js        # Project data and management
├── assets/
│   ├── images/
│   │   ├── andrew-profile.jpg
│   │   ├── projects/       # Project images
│   │   └── README.md       # Image guidelines
│   └── Andrew_Lin_Resume.pdf
└── README.md
```

## 🎨 Customization

### 1. Personal Information

**Update in `index.html`:**
- Name and title in the navigation
- About section content
- Contact information
- Social media links

### 2. Projects

**Edit `js/projects.js`:**
```javascript
const projectsData = [
    {
        id: 'your-project-id',
        title: 'Your Project Title',
        subtitle: 'Category • Status Year',
        description: 'Brief project description...',
        image: './assets/images/projects/your-project.jpg',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        featured: true,
        // ... additional project details
    }
];
```

### 3. Styling

**Colors** (in `css/styles.css`):
```css
:root {
    --color-primary: #2563eb;        /* Main brand color */
    --color-secondary: #64748b;      /* Secondary color */
    --color-background: #ffffff;     /* Background color */
    /* ... other color variables */
}
```

**Typography** (Google Fonts link in `index.html`):
- Current font: Inter
- To change: Update the Google Fonts URL and CSS font-family

### 4. Images

Add your images to the `assets/images/` directory:
- **Profile photo**: `andrew-profile.jpg` (400x400px)
- **Project images**: `assets/images/projects/` (800x600px recommended)
- **Resume**: `assets/Andrew_Lin_Resume.pdf`

See `assets/images/README.md` for detailed image guidelines.

## 🛠 Technical Features

### Performance
- Lazy loading for images
- Minified and optimized CSS/JS
- Efficient DOM manipulation
- Intersection Observer for animations

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

### SEO
- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Semantic URL structure

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Laptop**: 1024px - 1199px
- **Tablet**: 768px - 1023px
- **Mobile**: 640px and below
- **Small Mobile**: 480px and below

## 🎯 Best Practices Implemented

1. **Code Organization**
   - Modular JavaScript architecture
   - Separated concerns (HTML/CSS/JS)
   - Reusable component patterns

2. **Performance**
   - Optimized images and assets
   - Minimal external dependencies
   - Efficient CSS selectors

3. **User Experience**
   - Intuitive navigation
   - Fast loading times
   - Smooth animations
   - Touch-friendly interface

4. **Maintainability**
   - Clear code comments
   - Consistent naming conventions
   - Scalable project structure

## 🚨 Important Notes

### GitHub Pages Limitations
- **Static files only**: No server-side processing
- **No backend**: Use external services for forms (Netlify Forms, Formspree)
- **HTTPS only**: All external resources must use HTTPS
- **File size limits**: Keep images under 25MB total

### Content Updates
- **Projects**: Add new entries to `projectsData` array in `js/projects.js`
- **Images**: Optimize for web before uploading
- **Resume**: Replace PDF file and update link in contact section

## 🔧 Troubleshooting

**Site not loading on GitHub Pages:**
1. Check that `index.html` is in the root directory
2. Verify GitHub Pages is enabled in repository settings
3. Ensure all file paths are relative (no leading slash)

**Images not displaying:**
1. Check file paths are correct and case-sensitive
2. Ensure images are in the correct directory structure
3. Verify image files are committed to the repository

**Layout issues on mobile:**
1. Test responsive design at different screen sizes
2. Check CSS media queries are properly formatted
3. Validate HTML structure is correct

## 📧 Support

For questions or issues:
1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Refer to GitHub Pages documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for showcasing exceptional UX design work**