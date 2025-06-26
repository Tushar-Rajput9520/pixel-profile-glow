
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
    // Ultra Enhanced particle system with more dynamic layers
    const createUltraEnhancedParticles = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        // Layer 1: Ultra large floating particles with complex movement
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.className = 'enhanced-particle-large';
          particle.style.width = `${Math.random() * 12 + 6}px`;
          particle.style.height = particle.style.width;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 15}s`;
          particle.style.animationDuration = `${15 + Math.random() * 10}s`;
          heroSection.appendChild(particle);
        }
        
        // Layer 2: Enhanced medium particles with rotation
        for (let i = 0; i < 35; i++) {
          const particle = document.createElement('div');
          particle.className = 'enhanced-particle-medium';
          particle.style.width = `${Math.random() * 6 + 3}px`;
          particle.style.height = particle.style.width;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 10}s`;
          particle.style.animationDuration = `${10 + Math.random() * 8}s`;
          heroSection.appendChild(particle);
        }
        
        // Layer 3: Ultra small fast particles with trails
        for (let i = 0; i < 60; i++) {
          const particle = document.createElement('div');
          particle.className = 'enhanced-particle-small';
          particle.style.width = `${Math.random() * 4 + 1}px`;
          particle.style.height = particle.style.width;
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 6}s`;
          particle.style.animationDuration = `${6 + Math.random() * 6}s`;
          heroSection.appendChild(particle);
        }
      }
    };

    // Ultra Enhanced digital matrix rain with improved characters
    const createUltraDigitalRain = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const digitalRain = document.createElement('div');
        digitalRain.className = 'enhanced-digital-rain';
        heroSection.appendChild(digitalRain);
        
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>+-*/=;:.,?!@#$%^&*ßÇ∑´®†¥¨ˆøπåß∂ƒ©˙∆';
        
        // Create more columns with varied spacing
        for (let i = 0; i < 80; i++) {
          const column = document.createElement('div');
          column.className = 'digital-rain-column';
          column.style.left = `${(i / 80) * 100}%`;
          column.style.animationDelay = `${Math.random() * 12}s`;
          column.style.animationDuration = `${12 + Math.random() * 15}s`;
          
          // Add more characters per column with varied timing
          for (let j = 0; j < 20; j++) {
            const character = document.createElement('div');
            character.className = 'enhanced-digital-character';
            character.textContent = characters[Math.floor(Math.random() * characters.length)];
            character.style.animationDelay = `${j * 0.15}s`;
            character.style.animationDuration = `${3 + Math.random() * 3}s`;
            column.appendChild(character);
          }
          
          digitalRain.appendChild(column);
        }
      }
    };

    // Ultra Enhanced circuit network with complex patterns
    const createUltraCircuitNetwork = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const circuitNetwork = document.createElement('div');
        circuitNetwork.className = 'circuit-network';
        heroSection.appendChild(circuitNetwork);
        
        // Create more interconnected circuit lines with varied patterns
        for (let i = 0; i < 30; i++) {
          const circuit = document.createElement('div');
          circuit.className = 'circuit-line';
          circuit.style.left = `${Math.random() * 100}%`;
          circuit.style.top = `${Math.random() * 100}%`;
          circuit.style.width = `${80 + Math.random() * 300}px`;
          circuit.style.transform = `rotate(${Math.random() * 360}deg)`;
          circuit.style.animationDelay = `${Math.random() * 8}s`;
          circuit.style.animationDuration = `${6 + Math.random() * 6}s`;
          circuitNetwork.appendChild(circuit);
        }
        
        // Add more circuit nodes with enhanced effects
        for (let i = 0; i < 25; i++) {
          const node = document.createElement('div');
          node.className = 'circuit-node';
          node.style.left = `${Math.random() * 100}%`;
          node.style.top = `${Math.random() * 100}%`;
          node.style.animationDelay = `${Math.random() * 6}s`;
          node.style.animationDuration = `${3 + Math.random() * 3}s`;
          circuitNetwork.appendChild(node);
        }
      }
    };

    // Ultra Enhanced energy waves with more complexity
    const createUltraEnergyWaves = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const waveContainer = document.createElement('div');
        waveContainer.className = 'energy-waves';
        heroSection.appendChild(waveContainer);
        
        for (let i = 0; i < 12; i++) {
          const wave = document.createElement('div');
          wave.className = 'energy-wave';
          wave.style.animationDelay = `${i * 0.5}s`;
          wave.style.animationDuration = `${6 + i * 0.5}s`;
          waveContainer.appendChild(wave);
        }
      }
    };

    // Ultra Enhanced data streams with improved flow
    const createUltraDataStreams = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const streamContainer = document.createElement('div');
        streamContainer.className = 'data-streams';
        heroSection.appendChild(streamContainer);
        
        for (let i = 0; i < 18; i++) {
          const stream = document.createElement('div');
          stream.className = 'data-stream';
          stream.style.left = `${Math.random() * 100}%`;
          stream.style.animationDelay = `${Math.random() * 8}s`;
          stream.style.animationDuration = `${8 + Math.random() * 6}s`;
          streamContainer.appendChild(stream);
        }
      }
    };

    createUltraEnhancedParticles();
    createUltraDigitalRain();
    createUltraCircuitNetwork();
    createUltraEnergyWaves();
    createUltraDataStreams();
    
    return () => {
      // Enhanced cleanup
      const elementsToRemove = [
        '.enhanced-particle-large', '.enhanced-particle-medium', '.enhanced-particle-small',
        '.enhanced-digital-rain', '.circuit-network', '.energy-waves', '.data-streams'
      ];
      
      elementsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
      });
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
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden enhanced-black-bg">
      {/* Ultra Enhanced background layers with more depth */}
      <div className="absolute inset-0 enhanced-gradient-bg"></div>
      <div className="absolute inset-0 enhanced-grid-pattern"></div>
      <div className="absolute inset-0 enhanced-noise-overlay"></div>
      
      {/* Ultra Enhanced scan lines with multiple directions */}
      <div className="enhanced-scan-lines"></div>
      
      {/* Enhanced ambient lighting effects with more variety */}
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-bottom"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
              <Terminal className="h-4 w-4 mr-2 text-white" />
              <span className="text-xs font-semibold text-white">Ready for new challenges</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2">Hi, I'm <span className="text-white glow-text-enhanced">Tushar Singh</span>,</span>
              <span className="block">a <span className="relative px-2">
                  <span className="relative z-10">Passionate</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-white/10 -skew-x-12"></span>
                </span> Web Developer
              </span>
              <span className="block mt-2">& <span className="typing-effect-enhanced text-white">{text}</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 my-6 backdrop-blur-md bg-black/20 p-6 rounded-xl border border-white/10 shadow-2xl">
              As an aspiring software developer with a strong foundation in Data Structures and Algorithms, 
              I'm passionate about creating efficient web solutions. My journey in programming is guided by 
              a dedication to clean code principles and a curiosity to explore cutting-edge technologies in 
              AI and Machine Learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Button 
                className="bg-white text-black hover:bg-white/90 font-medium py-6 px-8 rounded-full shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="/Tushar_Singh_Resume.pdf" download="Tushar_Singh_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-medium py-6 px-8 rounded-full shadow-2xl shadow-white/5 hover:shadow-white/15 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                onClick={scrollToContact}
              >
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl animate-pulse-enhanced"></div>
              <div className="absolute inset-0 rounded-full enhanced-cyber-grid opacity-20"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-white/30 bg-gradient-to-br from-black via-gray-900 to-black glow-border-enhanced holographic-enhanced">
                <img
                  src="/lovable-uploads/7af74b4c-26f2-4a94-9ab6-4d4ab6687dfb.png"
                  alt="Tushar Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-white/20 opacity-60 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-white/15 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-white/10 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
