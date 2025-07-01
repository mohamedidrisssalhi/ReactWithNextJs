// Global styles and core Next.js imports
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Import custom components
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import site configuration
import { siteMetadata } from '@/config/site';

// Configure Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

// SEO metadata configuration for the entire site
export const metadata: Metadata = {
  title: {
    default: siteMetadata.name + ' — Fullstack Developer',
    template: '%s | ' + siteMetadata.name
  },
  description: siteMetadata.description,
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Fullstack Developer', 'Web Development', 'Portfolio'],
  authors: [{ name: siteMetadata.name, url: siteMetadata.siteUrl }],
  creator: siteMetadata.name,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    title: siteMetadata.name + ' — Fullstack Developer',
    description: siteMetadata.description,
    siteName: siteMetadata.name,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.name + ' Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.name + ' — Fullstack Developer',
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        
        {/* Main Content */}
        <main className="min-h-screen px-6 lg:px-12 pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
