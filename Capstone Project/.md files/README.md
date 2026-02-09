# MyBlog - Personal Blog Website

A modern, responsive, and attractive personal blog website built with HTML, CSS, and JavaScript. Perfect for showcasing your work and connecting with your audience.

## Features

✨ **Modern & Responsive Design**
- Clean, professional layout that looks great on all devices
- Mobile-first responsive design
- Smooth animations and transitions
- Fast loading times

📄 **Four Main Pages**
1. **Homepage** - Welcome section with featured content and recent blog posts
2. **About Me** - Professional background, skills, experience, and testimonials
3. **Blog** - Comprehensive blog section with search functionality
4. **Contact** - Contact form with Formspree integration and FAQ section

🎨 **Design Highlights**
- Modern color scheme with CSS variables for easy customization
- Gradient backgrounds and hover effects
- Beautiful cards and typography
- Mobile menu toggle
- Social media links

🔧 **Functionality**
- Smooth scrolling navigation
- Search functionality for blog posts
- Form validation
- Intersection observer animations
- Active navigation link highlighting
- Newsletter subscription ready
- Contact form with Formspree integration

## Project Structure

```
Capstone Project/
├── index.html                 # Homepage
├── styles.css                # Main stylesheet
├── script.js                 # JavaScript functionality
├── pages/
│   ├── about.html           # About Me page
│   ├── blog.html            # Blog page
│   └── contact.html         # Contact page
└── assets/
    └── (images go here)
```

## Getting Started

### Option 1: Direct File Opening
1. Simply open `index.html` in your web browser
2. No server required - all files work locally
3. Click "Open with Live Server" in VS Code for development

### Option 2: Using VS Code Live Server
1. Install the Live Server extension (if not already installed)
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will automatically open and refresh on changes

## Setting Up Formspree (Contact Form)

The contact form uses **Formspree** for email handling. Follow these steps:

### Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email

### Step 2: Create a New Form
1. After signing in, click "New Project"
2. Give your form a name (e.g., "MyBlog Contact Form")
3. Click "Create"

### Step 3: Get Your Form ID
1. You'll see a form with an endpoint URL like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
2. Copy the `YOUR_FORM_ID` part (everything after `/f/`)

### Step 4: Update the Contact Form
1. Open `pages/contact.html`
2. Find this line (around line 110):
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" name="contact">
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual form ID
4. Save the file

### Step 5: Test the Form
1. Fill out the contact form
2. Click "Send Message"
3. You should receive an email confirmation from Formspree

## Customization Guide

### Colors
Edit the CSS variables in `styles.css` (lines 3-17):
```css
:root {
  --primary-color: #2d3e50;      /* Main color */
  --secondary-color: #3498db;    /* Secondary color */
  --accent-color: #e74c3c;       /* Accent/highlight color */
  /* ... other colors ... */
}
```

### Font
Change the font family in `styles.css` (line 32):
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Profile Image
1. Add your profile image to the `assets` folder
2. In `pages/about.html`, change line 44:
   ```html
   <img src="../assets/profile.jpg" alt="Profile Picture" class="profile-image">
   ```

### Blog Content
- Edit blog posts directly in `pages/blog.html`
- Update dates, titles, excerpts, and descriptions
- Add new blog posts by copying the blog-post div structure

### Name and Branding
Search and replace "MyBlog" and "Your Name" throughout all files with your actual name and blog title.

## Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: Full layout with all features
- **Tablet (768px and below)**: Adjusted grid layouts
- **Mobile (480px and below)**: Single column, stacked elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with minimal redundancy
- Lightweight JavaScript (no jQuery required)
- Fast image loading with proper optimization
- Smooth animations using CSS transforms
- Lazy loading for blog post animations
- Mobile-optimized touch interactions

## SEO Optimization

The site includes:
- Semantic HTML5 markup
- Proper meta tags
- Open Graph support ready
- Fast loading times
- Mobile-friendly design
- Accessibility features (ARIA labels)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Form labels for all inputs
- Alt text for images

## Adding New Pages

To add new pages:
1. Create a new `.html` file in the `pages` folder
2. Copy the header and footer from an existing page
3. Update navigation links in all files
4. Link to the new page from navigation menus

## JavaScript Features

- Mobile menu toggle
- Form validation
- Smooth scroll navigation
- Intersection observer animations
- Blog post search
- Active link highlighting
- Email/phone validation

## Tips & Best Practices

1. **Keep content fresh** - Update blog posts regularly
2. **Optimize images** - Use tools like TinyPNG for image compression
3. **Add more content** - Expand skills, experience, and testimonials
4. **Update social links** - Replace placeholder URLs with your actual profiles
5. **Monitor analytics** - Add Google Analytics for insights
6. **Test responsiveness** - Check on real devices if possible

## Troubleshooting

### Form not sending emails?
- Check that you've replaced `YOUR_FORMSPREE_ID` with your actual ID
- Verify your Formspree account is properly set up
- Check browser console for errors (F12)

### Images not showing?
- Verify the image path is correct
- Ensure image files are in the `assets` folder
- Check file names match exactly (case-sensitive on some systems)

### Navigation not working?
- Verify all file paths are correct
- Check that file names match (e.g., `about.html` vs `About.html`)
- Ensure you're using the correct relative paths (`../` for parent directory)

## Future Enhancements

Consider adding:
- Blog comment system
- Dark mode toggle
- Dynamic blog loading
- RSS feed
- Google Analytics integration
- Schema markup
- Progressive Web App (PWA) features
- Email notifications

## License

Feel free to use this template for your personal blog. Modify and customize as needed!

## Credits

- Icons by [Font Awesome](https://fontawesome.com)
- Form handling by [Formspree](https://formspree.io)
- Built with vanilla HTML, CSS, and JavaScript

---

**Happy blogging!** 🚀

If you have any questions or need help, feel free to reach out through the contact form.
