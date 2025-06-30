import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Brand section - content removed */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/mohamedidrisssalhi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/idrissalhi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mohamedidrisssalhi@gmail.com"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Idris. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
