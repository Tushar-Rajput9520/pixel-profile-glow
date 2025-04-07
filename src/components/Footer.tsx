
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-midnight border-t border-neonGreen/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-neonGreen">&lt;</span>
            Tushar
            <span className="text-neonGreen">/&gt;</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Web Developer | Problem Solver | Creative Thinker
          </p>
          
          <div className="w-24 h-0.5 bg-neonGreen/30 mx-auto mb-4"></div>
          
          <p className="text-gray-400 flex items-center justify-center">
            &copy; {currentYear} - Designed & Built with 
            <Heart className="h-4 w-4 text-neonGreen mx-1 animate-pulse" /> 
            by Tushar Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
