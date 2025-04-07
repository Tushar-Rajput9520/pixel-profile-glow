
import React from 'react';
import { Code, BookOpen, Coffee, LightbulbIcon } from 'lucide-react';

const About = () => {
  const hobbies = [
    { 
      name: 'Coding', 
      icon: <Code className="h-6 w-6 text-neonGreen" />,
      description: 'Always exploring new technologies' 
    },
    { 
      name: 'Learning', 
      icon: <BookOpen className="h-6 w-6 text-neonGreen" />,
      description: 'Continuous growth mindset' 
    },
    { 
      name: 'Coffee', 
      icon: <Coffee className="h-6 w-6 text-neonGreen" />,
      description: 'Fuels my programming sessions' 
    },
    { 
      name: 'Problem Solving', 
      icon: <LightbulbIcon className="h-6 w-6 text-neonGreen" />,
      description: 'Finding elegant solutions' 
    }
  ];

  return (
    <section id="about" className="py-20 bg-midnight relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonGreen/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neonGreen">&lt;</span> About Me <span className="text-neonGreen">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen/30 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-card/30 p-8 rounded-xl shadow-lg border border-neonGreen/10 gradient-border">
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              I'm a passionate web developer with a strong foundation in both front-end and back-end technologies. 
              My journey began 5 years ago when I built my first website, and I've been hooked ever since. I'm constantly 
              learning and exploring new technologies to stay at the cutting edge of web development.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              With a background in computer science and a keen eye for design, I bring a unique perspective to every project. 
              I'm driven by the challenge of solving complex problems with clean, efficient code and creating intuitive 
              user experiences that make technology more accessible.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Currently, I'm focused on mastering advanced React patterns, diving deeper into TypeScript, and exploring 
              the capabilities of Next.js for building high-performance web applications.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-midnight/80 border border-neonGreen/30 flex items-center justify-center mb-3">
                    {hobby.icon}
                  </div>
                  <h3 className="font-medium text-white mb-1">{hobby.name}</h3>
                  <p className="text-sm text-gray-400">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
