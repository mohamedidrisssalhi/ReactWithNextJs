// Importing required Next.js types for metadata
import { Metadata } from 'next';

// SEO metadata for the contact page
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Idris. Let&apos;s discuss your next project or collaboration opportunity.',
};

// Main contact page component
export default function ContactPage() {
  return (
    // Main container with responsive max width and auto centering
    <div className="max-w-4xl mx-auto">
      {/* Contact section with custom padding and centered text */}
      <section className="section text-center">
        {/* Fade-in animation wrapper */}
        <div className="fade-in">
          {/* Section subtitle with teal accent color */}
          <h1 className="text-teal-400 font-mono text-lg mb-4">What&apos;s Next?</h1>
          {/* Main heading with responsive font sizes */}
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h2>
          {/* Contact description paragraph with max width and auto margins */}
          <p className="text-slate-400 text-lg max-w-lg mx-auto mb-12">
            Although I&apos;m not currently looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          
          {/* Contact buttons container with flexbox layout */}
          <div className="flex flex-row gap-12 justify-center items-center">
            {/* Email contact button with custom styling */}
            <a 
              href="mailto:mohamedidrisssalhi@gmail.com" 
              className="btn-outline flex items-center space-x-3 min-w-[140px] justify-center"
            >
              {/* Email icon SVG */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Say Hello</span>
            </a>
            
            {/* LinkedIn contact button with external link attributes */}
            <a 
              href="https://www.linkedin.com/in/idrissalhi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center space-x-3 min-w-[140px] justify-center"
            >
              {/* LinkedIn icon SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
