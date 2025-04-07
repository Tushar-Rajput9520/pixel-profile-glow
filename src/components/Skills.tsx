
import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML', level: 95, category: 'Frontend' },
    { name: 'CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'Express.js', level: 82, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'GitHub', level: 88, category: 'Tools' },
    { name: 'Bootstrap', level: 90, category: 'Frontend' },
    { name: 'Tailwind', level: 92, category: 'Frontend' },
    { name: 'Problem Solving / DSA', level: 78, category: 'Skills' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools', 'Skills'];

  return (
    <section id="skills" className="py-20 bg-midnight/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neonGreen">&lt;</span> Skills <span className="text-neonGreen">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen/30 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category} className="backdrop-blur-sm bg-card/30 p-6 rounded-xl shadow-lg border border-neonGreen/10">
                <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-200">{skill.name}</span>
                          <span className="text-neonGreen">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-value" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-midnight px-4 py-2 rounded-full border border-neonGreen/30 text-white hover:bg-neonGreen/20 transition-colors"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
