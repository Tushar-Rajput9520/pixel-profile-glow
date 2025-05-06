
import React, { useEffect, useState } from 'react';
import { Download, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Problem Solver";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.width = `${Math.random() * 10 + 2}px`;
          particle.style.height = particle.style.width;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 5}s`;
          // Change color of particles to purple/blue
          particle.style.background = `rgba(${139 + Math.random() * 50}, ${87 + Math.random() * 50}, ${245 + Math.random() * 10}, 0.5)`;
          heroSection.appendChild(particle);
        }
      }
    };

    createParticles();

    // Add digital rain effect with new colors
    const createDigitalRain = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const digitalRain = document.createElement('div');
        digitalRain.className = 'digital-rain';
        heroSection.appendChild(digitalRain);
        
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        for (let i = 0; i < 50; i++) {
          const character = document.createElement('div');
          character.className = 'digital-rain-character';
          character.textContent = characters[Math.floor(Math.random() * characters.length)];
          character.style.left = `${Math.random() * 100}%`;
          character.style.animationDuration = `${Math.random() * 10 + 5}s`;
          character.style.animationDelay = `${Math.random() * 5}s`;
          // Change color to purple/blue
          character.style.color = `rgba(${139 + Math.random() * 50}, ${87 + Math.random() * 50}, ${245 + Math.random() * 10}, ${0.3 + Math.random() * 0.3})`;
          digitalRain.appendChild(character);
        }
      }
    };
    
    createDigitalRain();
    
    return () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
      
      const digitalRain = document.querySelector('.digital-rain');
      if (digitalRain) digitalRain.remove();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden code-backdrop animated-purple-gradient">
      {/* Circuit pattern background with new colors */}
      <div className="circuit-pattern-purple"></div>
      
      {/* Scan lines effect */}
      <div className="scan-lines"></div>
      
      {/* Updated Matrix-like Code Elements with purple/blue theme */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/10 text-3xl font-mono animate-code-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-50px`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? '{' : Math.random() > 0.5 ? '}' : '</>'}
          </div>
        ))}
      </div>
      
      {/* Animated hexagon grid with purple theme */}
      <div className="absolute inset-0 z-0">
        <div className="cyber-grid-purple opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
              <Terminal className="h-4 w-4 mr-2 text-purple-400" />
              <span className="text-xs font-semibold text-purple-400">Ready for new challenges</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2">Hi, I'm <span className="text-purple-400 glow-text-purple">Tushar Singh</span>,</span>
              <span className="block">a <span className="relative px-2">
                  <span className="relative z-10">Passionate</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-purple-500/20 -skew-x-12"></span>
                </span> Web Developer
              </span>
              <span className="block mt-2">& <span className="typing-effect text-purple-400">{text}</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 my-6 backdrop-blur-sm bg-black/30 p-4 rounded-lg shadow-lg shadow-purple-500/10">
              As an aspiring software developer with a strong foundation in Data Structures and Algorithms, 
              I'm passionate about creating efficient web solutions. My journey in programming is guided by 
              a dedication to clean code principles and a curiosity to explore cutting-edge technologies in 
              AI and Machine Learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Button 
                className="bg-purple-500 text-white hover:bg-purple-600 font-medium py-6 px-6 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all"
                asChild
              >
                <a href="/Tushar_Singh_Resume.pdf" download="Tushar_Singh_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-500/10 font-medium py-6 px-6 rounded-full shadow-lg shadow-purple-400/10 hover:shadow-purple-400/20 transition-all"
                onClick={scrollToContact}
              >
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse-purple"></div>
              <div className="absolute inset-0 rounded-full cyber-grid-purple opacity-20"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-purple-500/50 bg-gradient-to-br from-midnight to-secondary glow-border-purple holographic-purple">
                <img
                  src="/lovable-uploads/7af74b4c-26f2-4a94-9ab6-4d4ab6687dfb.png"
                  alt="Tushar Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-purple-400/30 opacity-50 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-purple-400/20 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-purple-400/10 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
