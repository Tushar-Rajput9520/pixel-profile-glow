
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ['about', 'skills', 'projects', 'resume', 'contact'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/90 shadow-lg backdrop-blur-sm border-b border-neonGreen/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-white group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-neonGreen group-hover:animate-pulse">&lt;</span>
          <span className="group-hover:text-neonGreen transition-colors">Tushar</span>
          <span className="text-neonGreen group-hover:animate-pulse">/&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`relative font-medium transition-colors capitalize px-2 py-1 ${
                    activeSection === item ? 'text-neonGreen' : 'text-white hover:text-neonGreen'
                  }`}
                >
                  {activeSection === item && (
                    <span className="absolute inset-0 bg-neonGreen/10 rounded-md -z-10"></span>
                  )}
                  {item}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neonGreen"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:text-neonGreen transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-midnight/95 backdrop-blur-sm border-b border-neonGreen/10">
          <ul className="py-4 px-4 space-y-4">
            {['about', 'skills', 'projects', 'resume', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`text-white hover:text-neonGreen font-medium transition-colors capitalize w-full text-left py-2 px-3 rounded-md ${
                    activeSection === item ? 'bg-neonGreen/10 text-neonGreen' : ''
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
