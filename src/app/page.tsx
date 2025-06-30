// Importing required Next.js components
import Link from 'next/link';
import Image from 'next/image';

// Main homepage component
export default function HomePage() {
  return (
    // Main container with responsive max width
    <div className="max-w-7xl mx-auto">
      {/* Hero Section - Full screen height with centered content */}
      <section className="section min-h-screen flex flex-col justify-center">
        {/* Fade-in animation wrapper */}
        <div className="fade-in">
          {/* Intro text with teal accent color */}
          <p className="text-teal-400 font-mono mb-5 text-base">Hi, my name is</p>
          {/* Main name heading with responsive font sizes */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-200 mb-4 leading-tight">
            Idris.
          </h1>
          {/* Secondary heading describing role */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-400 mb-8 leading-tight">
            I build things for the web.
          </h2>
          {/* Description paragraph with limited width for readability */}
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed mb-12">
            I&apos;m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I&apos;m focused on
            building accessible, human-centered products.
          </p>
          {/* Call-to-action buttons with responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Portfolio link button */}
            <Link href="/projects" className="btn-outline">
              Check out my work!
            </Link>
            {/* About page link button */}
            <Link href="/about" className="btn-outline">
              Learn more about me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="section">
        <div className="fade-in">
          <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-slate-200 mb-12 justify-center">
            Featured Project
            <div className="hidden sm:block ml-8 h-px bg-slate-600 flex-grow max-w-xs"></div>
          </h2>
          
          <div className="featured-project">
            <div className="project-image">
              <div className="relative">
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
                    and responsive design for all devices.
                  </p>
                </div>
                <ul className="project-tech-list">
                  <li>React</li>
                  <li>React Router</li>
                  <li>API Integration</li>
                  <li>Responsive Design</li>
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

      {/* Call to Action */}
      <section className="section text-center">
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">Ready to work together?</h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto mb-8">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <Link href="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}