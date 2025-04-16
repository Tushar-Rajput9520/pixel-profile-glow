
import React from 'react';
import { Code, BookOpen, Coffee, LightbulbIcon, Brain, CodeIcon } from 'lucide-react';

const About = () => {
  const hobbies = [
    { 
      name: 'Coding', 
      icon: <Code className="h-6 w-6 text-neonGreen" />,
      description: 'Passionate about solving complex problems' 
    },
    { 
      name: 'Machine Learning', 
      icon: <Brain className="h-6 w-6 text-neonGreen" />,
      description: 'Exploring AI and ML technologies' 
    },
    { 
      name: 'Learning', 
      icon: <BookOpen className="h-6 w-6 text-neonGreen" />,
      description: 'Continuous growth and skill development' 
    },
    { 
      name: 'Problem Solving', 
      icon: <LightbulbIcon className="h-6 w-6 text-neonGreen" />,
      description: 'Analytical thinking and algorithmic approach' 
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
              As a recent Computer Science graduate, I'm an enthusiastic software developer with a strong foundation 
              in programming and a burning passion for technology. My academic journey has equipped me with robust 
              skills in Data Structures and Algorithms, and I'm currently diving deep into the exciting world of 
              Machine Learning and Artificial Intelligence.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              I'm particularly fascinated by the transformative potential of AI and ML technologies. My current 
              focus is on expanding my knowledge in machine learning frameworks, neural networks, and data science 
              techniques. I'm committed to bridging the gap between theoretical knowledge and practical application, 
              constantly seeking opportunities to apply cutting-edge technologies to real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Beyond technical skills, I bring a growth mindset, analytical thinking, and a collaborative spirit 
              to every project. I'm excited to contribute my skills, learn from experienced professionals, and 
              make meaningful contributions to innovative technological solutions.
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
