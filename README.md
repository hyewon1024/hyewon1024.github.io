# Academic Portfolio Website

A clean, modern two-column portfolio website built with Next.js, perfect for academics and researchers.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit `public/translations/en.json` to update:

- **Name and headline** in the `general` section
- **About section** with your bio
- **Social links** (email, LinkedIn, GitHub, Google Scholar)
- **Experience** with your work history
- **Education** with your academic background
- **Volunteering** with your academic services
- **Projects** with your research work

### Key Sections to Update:

1. **General Information:**
   ```json
   "general": {
     "name": "Your Name",
     "headline": "Your Title",
     "about": ["Your bio paragraphs"],
     "socials": {
       "email": "your.email@institution.edu",
       "linkedin": "https://linkedin.com/in/yourprofile",
       "github": "https://github.com/yourusername",
       "google_scholar": "https://scholar.google.com/citations?user=yourprofile"
     }
   }
   ```

2. **Experience:** Add your research positions, internships, etc.
3. **Education:** Your degrees and institutions
4. **Volunteering:** Conference reviewing, academic services
5. **Projects:** Your research projects and publications

### Styling
The website uses Tailwind CSS. You can customize colors and styling in:
- `tailwind.config.js` - Color scheme and design tokens
- `app/globals.css` - Global styles

## 🎨 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Two-Column Layout** - Fixed sidebar with main content area
- **Modern Typography** - Clean, readable fonts
- **Smooth Animations** - Subtle hover effects and transitions
- **Academic Focus** - Perfect for researchers and academics

## 📱 Mobile Friendly

The layout automatically adapts to mobile devices with a stacked design.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages
1. Build the project: `npm run build`
2. Export static files: `npm run export`
3. Deploy to GitHub Pages

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
