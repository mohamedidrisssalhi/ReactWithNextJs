// Importing Next.js types and components
import { Metadata } from 'next';
import Image from 'next/image';

// SEO metadata for the about page
export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Idris Salhi, a passionate fullstack developer specializing in modern web technologies.',
};

// About page component showcasing personal background and skills
export default function AboutPage() {
  return (
    // Main container with responsive max width
    <div className="max-w-4xl mx-auto">
      <section className="section">
        {/* Fade-in animation wrapper */}
        <div className="fade-in">
          {/* Page heading with numbered section and decorative line */}
          <h1 className="flex items-center text-3xl sm:text-4xl font-bold text-slate-200 mb-8">
            <span className="text-teal-400 font-mono text-xl sm:text-2xl mr-4">01.</span>
            About Me
            <div className="hidden sm:block ml-8 h-px bg-slate-600 flex-grow max-w-xs"></div>
          </h1>
          
          {/* Grid layout for content and profile image */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content area - takes 2/3 of the grid on large screens */}
            <div className="lg:col-span-2">
              {/* Introduction paragraph */}
              <p className="text-slate-400 mb-4 text-lg">
                Hello! My name is Idris and I enjoy creating things that live on the internet.
                My interest in web development started back in 2016 when I decided to try
                editing custom websites — turns out hacking together HTML & CSS taught me
                a lot about web development!
              </p>
              <p className="text-slate-400 mb-4 text-lg">
                Fast-forward to today, and I&apos;ve had the privilege of working on projects
                ranging from personal portfolios to full-stack applications.
                My main focus these days is building accessible, inclusive products
                and digital experiences.
              </p>
              <p className="text-slate-400 mb-4 text-lg">
                Beyond web development, I&apos;m passionate about game development. I created a 2D video game 
                using C# and Unity 3D game engine, and for 3D modeling I used Blender. This experience 
                taught me valuable skills in programming logic, user experience design, and creative 
                problem-solving that I apply to all my projects.
              </p>
              <p className="text-slate-400 mb-6 text-lg">
                Here are a few technologies I&apos;ve been working with recently:
              </p>
              <ul className="tech-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>C# & Unity 3D</li>
                <li>Blender</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                <Image 
                  src="/profile.jpg" 
                  alt="Profile Photo"
                  width={256}
                  height={256}
                  className="relative w-full h-full object-cover rounded filter grayscale hover:grayscale-0 transition-all duration-300 z-10"
                  priority
                />
                <div className="absolute inset-0 bg-teal-400 rounded opacity-20 hover:opacity-0 transition-opacity duration-300 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
