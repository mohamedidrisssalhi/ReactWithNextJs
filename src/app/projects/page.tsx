// Importing Next.js components and types
import { Metadata } from 'next';
import Image from 'next/image';

// SEO metadata for the projects page
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Idris Salhi&apos;s portfolio of projects, showcasing modern web development and creative solutions.',
};

// Projects showcase page component
export default function ProjectsPage() {
  return (
    // Main container with wider max width for project displays
    <div className="max-w-6xl mx-auto">
      <section className="section">
        {/* Fade-in animation wrapper */}
        <div className="fade-in">
          {/* Page heading with numbered section and decorative line */}
          <h1 className="flex items-center text-3xl sm:text-4xl font-bold text-slate-200 mb-16">
            <span className="text-teal-400 font-mono text-xl sm:text-2xl mr-4">02.</span>
            Some Things I&apos;ve Built
            <div className="hidden sm:block ml-8 h-px bg-slate-600 flex-grow max-w-xs"></div>
          </h1>
          
          {/* Featured project showcase with image and details */}
          <div className="featured-project mb-20">
            {/* Project image container with hover effects */}
            <div className="project-image">
              <div className="relative">
                {/* Next.js optimized image with lazy loading */}
                <Image 
                  src="/projects/movie-site.png" 
                  alt="Movie Explorer"
                  width={600}
                  height={400}
                  className="w-full rounded filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-teal-400 rounded opacity-20 hover:opacity-0 transition-opacity duration-300 mix-blend-multiply"></div>
              </div>
            </div>
            <div className="project-content">
              <div>
                <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-teal-400 transition-colors">
                  <a href="https://github.com/mohamedidrisssalhi/ReactRouter" target="_blank" rel="noopener noreferrer">
                    Movie Explorer
                  </a>
                </h3>
                <div className="project-description">
                  <p>
                    A React Router-powered movie discovery app that fetches trending films 
                    using a public API. Features search functionality, detailed movie views, 
                    and responsive design for all devices. Built with modern React patterns 
                    and clean, maintainable code architecture.
                  </p>
                </div>
                <ul className="project-tech-list">
                  <li>React</li>
                  <li>React Router</li>
                  <li>API Integration</li>
                  <li>Responsive Design</li>
                  <li>JavaScript ES6+</li>
                </ul>
                <div className="project-links">
                  <a href="https://github.com/mohamedidrisssalhi/ReactRouter" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
