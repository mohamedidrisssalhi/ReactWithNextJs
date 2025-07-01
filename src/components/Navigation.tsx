// Client-side component directive for interactivity
'use client';

// Importing required React hooks and Next.js components
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Main navigation component with mobile menu functionality
export default function Navigation() {
  // State for controlling mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed header navigation with glassmorphism effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex justify-between items-center">
            {/* Logo section with profile picture and brand name */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/profile.jpg"
                alt="Idris Salhi Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-teal-400 hover:border-teal-300 transition-colors cursor-pointer"
                priority
              />
              <span className="text-teal-400 font-mono text-lg font-semibold">
                Idris
              </span>
            </Link>
            
            {/* Desktop navigation menu - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/about" className="nav-link group">
                <span className="nav-number">01.</span> About me
              </Link>
              <Link href="/projects" className="nav-link group">
                <span className="nav-number">02.</span> Work
              </Link>
              <Link href="/contact" className="nav-link group">
                Contact Me
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline ml-4">
                Resume
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-teal-400 hover:text-teal-300 transition-colors z-60"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-64 bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/about" 
              className="nav-link text-center"
              onClick={closeMenu}
            >
              <span className="nav-number">01.</span> About me
            </Link>
            <Link 
              href="/projects" 
              className="nav-link text-center"
              onClick={closeMenu}
            >
              <span className="nav-number">02.</span> Work
            </Link>
            <Link 
              href="/contact" 
              className="nav-link text-center"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
