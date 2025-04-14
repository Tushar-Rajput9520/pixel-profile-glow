
import React from 'react';
import { Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden code-backdrop">
      {/* Animated Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
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
        {[...Array(10)].map((_, i) => (
          <div
            key={i + 10}
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
        {[...Array(10)].map((_, i) => (
          <div
            key={i + 20}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-2">Hi, I'm <span className="text-neonGreen glow-text">Tushar Singh</span>,</span>
              <span className="block">a <span className="relative px-2">
                  <span className="relative z-10">Passionate</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-neonGreen/20 -skew-x-12"></span>
                </span> Web Developer
              </span>
              <span className="block mt-2">& Problem Solver</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 my-6">
              I craft stunning websites and web applications that deliver exceptional user experiences.
              Transforming ideas into reality through clean code and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Button 
                className="bg-neonGreen text-midnight hover:bg-neonGreen/80 font-medium py-6 px-6 rounded-full"
                asChild
              >
                <a href="/Tushar_Singh_Resume.pdf" download="Tushar_Singh_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-neonGreen text-neonGreen hover:bg-neonGreen/10 font-medium py-6 px-6 rounded-full"
                onClick={scrollToContact}
              >
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-neonGreen/20 blur-xl animate-pulse-green"></div>
              <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-neonGreen/50 bg-gradient-to-br from-midnight to-secondary">
                <img
                  src="/lovable-uploads/7af74b4c-26f2-4a94-9ab6-4d4ab6687dfb.png"
                  alt="Tushar Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
