# 🚀 Idris - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This professional portfolio showcases projects, skills, and provides contact information in a clean, minimal design.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI inspired by Brittany Chiang's portfolio
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **⚡ Performance Optimized**: Built with Next.js 15 for lightning-fast loading
- **♿ Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **🎯 SEO Optimized**: Meta tags, sitemap, and robots.txt included
- **🌟 Smooth Animations**: Fade-in effects and hover transitions
- **📄 Multi-page Structure**: Separate pages for Home, About, Projects, and Contact

## �️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Icons**: Custom SVG icons
- **Deployment**: Ready for [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any hosting platform

## � Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (Hero + Featured Project)
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   ├── contact/           # Contact information
│   ├── layout.tsx         # Root layout with navigation
│   ├── globals.css        # Global styles and CSS variables
│   ├── sitemap.ts         # SEO sitemap generation
│   └── robots.ts          # SEO robots.txt
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation with mobile menu
│   └── Footer.tsx         # Footer with links and social icons
└── config/
    └── site.ts           # Site-wide configuration and metadata
```

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing & dynamic routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ProjectCard.tsx    # Project display component
│   └── Sidebar.tsx        # Navigation sidebar
└── config/               # Configuration files
    └── site.ts           # Site metadata
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohamedidrisssalhi/ReactWithNextJs.git
   cd ReactWithNextJs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your personal information in:
- `src/config/site.ts` - Site metadata and contact info
- `src/app/page.tsx` - Homepage content
- `src/app/about/page.tsx` - About page content

### Projects
Add your projects in:
- `src/app/projects/page.tsx` - Project listings
- `public/projects/` - Project images

### Styling
Customize the theme in:
- `src/app/globals.css` - CSS variables and global styles
- `tailwind.config.js` - Tailwind configuration

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with zero configuration

3. **Custom Domain (Optional):**
   - Add your custom domain in Vercel dashboard

### Other Deployment Options
- **Netlify:** Connect GitHub repo and deploy
- **GitHub Pages:** Use `next export` for static export
- **Self-hosted:** Build and serve the `out` folder

## 📊 SEO Features

- **Metadata optimization** for all pages
- **Open Graph** tags for social sharing
- **Twitter Cards** for Twitter sharing
- **Structured data** for search engines
- **Sitemap** generation (automatic)
- **Robots.txt** configuration

## � Deployment

This portfolio is ready for deployment on multiple hosting platforms. Choose your preferred option:

### 🟢 Vercel (Recommended)

Vercel is the company behind Next.js and offers seamless deployment:

1. **Using Vercel CLI:**
   ```bash
   # Install Vercel CLI globally
   npm install -g vercel
   
   # Login to your Vercel account
   vercel login
   
   # Deploy your project
   vercel --prod
   ```

2. **Using GitHub Integration:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Vercel will automatically build and deploy

3. **Environment Variables (if needed):**
   ```bash
   # Set environment variables
   vercel env add VARIABLE_NAME
   ```

### 🔵 Netlify

Alternative deployment option with great features:

1. **Using Netlify CLI:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy your project
   netlify deploy --prod --dir=.next
   ```

2. **Using Git Integration:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Go to [netlify.com](https://netlify.com)
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

3. **Manual Deploy:**
   ```bash
   # Build the project
   npm run build
   
   # Deploy the build folder
   netlify deploy --prod --dir=.next
   ```

### 🟣 Other Hosting Platforms

The project is also compatible with:
- **Railway**: Zero-config deployment
- **Render**: Easy static site hosting
- **AWS Amplify**: Scalable cloud hosting
- **GitHub Pages**: Free static hosting (requires static export)

### 📋 Pre-deployment Checklist

Before deploying, ensure:
- ✅ Build succeeds locally: `npm run build`
- ✅ No ESLint errors: `npm run lint`
- ✅ All images are optimized and in `/public`
- ✅ Environment variables are set (if any)
- ✅ Domain/subdomain is configured (optional)

## �🔧 Performance Optimizations

- **Image optimization** with Next.js Image component
- **Font optimization** with Google Fonts
- **CSS optimization** with Tailwind CSS purging
- **Bundle optimization** with Next.js built-in features
- **Lazy loading** for better performance

## 📈 Lighthouse Scores Target

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- Report bugs
- Suggest improvements
- Use as inspiration for your own portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Mohamed Idris Salhi**
- Email: [mohamedidrisssalhi@gmail.com](mailto:mohamedidrisssalhi@gmail.com)
- LinkedIn: [linkedin.com/in/idrissalhi](https://linkedin.com/in/idrissalhi)
- GitHub: [github.com/mohamedidrisssalhi](https://github.com/mohamedidrisssalhi)

---

⭐ **Star this repository if you found it helpful!**
