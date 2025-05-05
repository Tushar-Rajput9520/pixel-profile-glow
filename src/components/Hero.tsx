
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
          heroSection.appendChild(particle);
        }
      }
    };

    createParticles();
    
    return () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
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
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden code-backdrop animated-gradient">
      {/* Matrix-like Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-neonGreen/10 text-3xl font-mono animate-code-flow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-50px`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {'{'}
          </div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 15}
            className={`absolute text-neonGreen/10 text-3xl font-mono animate-code-flow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-50px`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {'}'}
          </div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={i + 30}
            className={`absolute text-neonGreen/10 text-3xl font-mono animate-code-flow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-50px`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {'</>'}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-neonGreen/10 border border-neonGreen/30">
              <Terminal className="h-4 w-4 mr-2 text-neonGreen" />
              <span className="text-xs font-semibold text-neonGreen">Ready for new challenges</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2">Hi, I'm <span className="text-neonGreen glow-text">Tushar Singh</span>,</span>
              <span className="block">a <span className="relative px-2">
                  <span className="relative z-10">Passionate</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-neonGreen/20 -skew-x-12"></span>
                </span> Web Developer
              </span>
              <span className="block mt-2">& <span className="typing-effect text-neonGreen">{text}</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 my-6">
              As an aspiring software developer with a strong foundation in Data Structures and Algorithms, 
              I'm passionate about creating efficient web solutions. My journey in programming is guided by 
              a dedication to clean code principles and a curiosity to explore cutting-edge technologies in 
              AI and Machine Learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Button 
                className="bg-neonGreen text-midnight hover:bg-neonGreen/80 font-medium py-6 px-6 rounded-full shadow-lg shadow-neonGreen/20 hover:shadow-neonGreen/30 transition-all"
                asChild
              >
                <a href="/Tushar_Singh_Resume.pdf" download="Tushar_Singh_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-neonGreen text-neonGreen hover:bg-neonGreen/10 font-medium py-6 px-6 rounded-full shadow-lg shadow-neonGreen/10 hover:shadow-neonGreen/20 transition-all"
                onClick={scrollToContact}
              >
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-neonGreen/20 blur-xl animate-pulse-green"></div>
              <div className="absolute inset-0 rounded-full cyber-grid opacity-20"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-neonGreen/50 bg-gradient-to-br from-midnight to-secondary glow-border">
                <img
                  src="/lovable-uploads/7af74b4c-26f2-4a94-9ab6-4d4ab6687dfb.png"
                  alt="Tushar Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-neonGreen/30 opacity-50 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-neonGreen/20 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-neonGreen/10 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
