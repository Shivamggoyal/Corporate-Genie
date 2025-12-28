import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NavigationProps {
  onLogoClick?: () => void;
}

export function Navigation({ onLogoClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-200/60 ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center gap-3">
            <div className="h-12 w-12 md:h-14 md:w-14 flex items-center justify-center">
              <img 
                src="/assets/logo.jpeg" 
                alt="Corporate Genie Logo" 
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Corporate Genie
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-cyan-700 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-cyan-700 transition-colors"
            >
              Contact
            </button>
          </div>

          <a
            href="https://wa.me/9205356196"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
