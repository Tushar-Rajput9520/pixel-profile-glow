
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
    // Create particles with white theme
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
          // White particles
          particle.style.background = `rgba(${255}, ${255}, ${255}, ${0.3 + Math.random() * 0.3})`;
          heroSection.appendChild(particle);
        }
      }
    };

    createParticles();

    // Add digital rain effect with white theme
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
          // White digital rain
          character.style.color = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.3})`;
          digitalRain.appendChild(character);
        }
      }
    };
    
    createDigitalRain();

    // Create electric sparks
    const createSparks = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const sparkContainer = document.createElement('div');
        sparkContainer.className = 'electric-spark';
        heroSection.appendChild(sparkContainer);
        
        for (let i = 0; i < 15; i++) {
          const spark = document.createElement('div');
          spark.className = 'spark';
          spark.style.left = `${Math.random() * 100}%`;
          spark.style.top = `${Math.random() * 100}%`;
          spark.style.animationDelay = `${Math.random() * 10}s`;
          sparkContainer.appendChild(spark);
        }
      }
    };
    
    createSparks();
    
    // Create 3D data grid
    const createDataGrid3D = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const dataGrid = document.createElement('div');
        dataGrid.className = 'data-grid-3d';
        dataGrid.style.position = 'absolute';
        dataGrid.style.top = '0';
        dataGrid.style.left = '0';
        dataGrid.style.width = '100%';
        dataGrid.style.height = '100%';
        dataGrid.style.zIndex = '1';
        dataGrid.style.opacity = '0.3';
        heroSection.appendChild(dataGrid);
      }
    };
    
    createDataGrid3D();
    
    return () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
      
      const digitalRain = document.querySelector('.digital-rain');
      if (digitalRain) digitalRain.remove();
      
      const sparkContainer = document.querySelector('.electric-spark');
      if (sparkContainer) sparkContainer.remove();
      
      const dataGrid = document.querySelector('.data-grid-3d');
      if (dataGrid) dataGrid.remove();
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
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden code-backdrop animated-black-gradient">
      {/* Black hole effect */}
      <div className="black-hole"></div>
      
      {/* Circuit pattern background with white theme */}
      <div className="circuit-pattern-black"></div>
      
      {/* Scan lines effect */}
      <div className="scan-lines"></div>
      
      {/* Updated Matrix-like Code Elements with white theme */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-3xl font-mono animate-code-flow-white"
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
      
      {/* Animated hexagon grid with white theme */}
      <div className="absolute inset-0 z-0">
        <div className="hex-grid opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/30">
              <Terminal className="h-4 w-4 mr-2 text-white" />
              <span className="text-xs font-semibold text-white">Ready for new challenges</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2">Hi, I'm <span className="text-white glow-text-black">Tushar Singh</span>,</span>
              <span className="block">a <span className="relative px-2">
                  <span className="relative z-10">Passionate</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-white/20 -skew-x-12"></span>
                </span> Web Developer
              </span>
              <span className="block mt-2">& <span className="typing-effect text-white">{text}</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 my-6 backdrop-blur-sm bg-black/30 p-4 rounded-lg shadow-lg shadow-white/10">
              As an aspiring software developer with a strong foundation in Data Structures and Algorithms, 
              I'm passionate about creating efficient web solutions. My journey in programming is guided by 
              a dedication to clean code principles and a curiosity to explore cutting-edge technologies in 
              AI and Machine Learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Button 
                className="bg-white text-black hover:bg-white/90 font-medium py-6 px-6 rounded-full shadow-lg shadow-white/20 hover:shadow-white/30 transition-all"
                asChild
              >
                <a href="/Tushar_Singh_Resume.pdf" download="Tushar_Singh_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-medium py-6 px-6 rounded-full shadow-lg shadow-white/10 hover:shadow-white/20 transition-all"
                onClick={scrollToContact}
              >
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse-white"></div>
              <div className="absolute inset-0 rounded-full cyber-grid-black opacity-20"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-white/50 bg-gradient-to-br from-midnight to-secondary glow-border-black holographic-black">
                <img
                  src="/lovable-uploads/7af74b4c-26f2-4a94-9ab6-4d4ab6687dfb.png"
                  alt="Tushar Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-white/30 opacity-50 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-white/20 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-white/10 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
