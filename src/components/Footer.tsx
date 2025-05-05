
import React from 'react';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" }
  ];
  
  return (
    <footer className="py-8 bg-midnight border-t border-neonGreen/10 relative">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neonGreen/20 to-transparent"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4 inline-block group">
            <span className="text-neonGreen group-hover:animate-pulse">&lt;</span>
            <span className="group-hover:text-neonGreen transition-colors">Tushar</span>
            <span className="text-neonGreen group-hover:animate-pulse">/&gt;</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Web Developer | Problem Solver | Creative Thinker
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-400 hover:text-neonGreen transition-colors p-2 hover:bg-neonGreen/5 rounded-full"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="w-24 h-0.5 bg-neonGreen/30 mx-auto mb-6"></div>
          
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
