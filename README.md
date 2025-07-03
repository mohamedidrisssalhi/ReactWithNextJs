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
---
