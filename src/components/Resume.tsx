
import React from 'react';
import { Download, Award, Briefcase, GraduationCap, ExternalLink, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Resume = () => {
  const handleDownload = () => {
    toast.success("Resume downloaded successfully!");
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-midnight to-midnight/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(57,255,20,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neonGreen">&lt;</span> Resume <span className="text-neonGreen">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Education Section */}
          <div className="backdrop-blur-sm bg-card/20 rounded-xl p-6 border border-neonGreen/10">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-neonGreen/10 mr-4">
                <GraduationCap className="h-6 w-6 text-neonGreen" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science</h4>
                <p className="text-gray-400">Galgotias College of Engineering and Technology • 2022 - Present</p>
                <p className="mt-2 text-gray-300">CGPA: 8.0</p>
              </div>

              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">Higher Secondary (Class 12)</h4>
                <p className="text-gray-400">Saraswati Vidya Mandir, CBSE • 2020 - 2021</p>
                <p className="mt-2 text-gray-300">Percentage: 92.8%</p>
              </div>
              
              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">Secondary (Class 10)</h4>
                <p className="text-gray-400">Zenith Public School, CBSE • 2018 - 2019</p>
                <p className="mt-2 text-gray-300">Percentage: 90.4%</p>
              </div>
            </div>
          </div>

          {/* Experience Section - Updated to show current status */}
          <div className="backdrop-blur-sm bg-card/20 rounded-xl p-6 border border-neonGreen/10">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-neonGreen/10 mr-4">
                <Briefcase className="h-6 w-6 text-neonGreen" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">Aspiring Web Developer</h4>
                <p className="text-gray-400">Self-Learning • Present</p>
                <p className="mt-2 text-gray-300">Currently focused on building personal projects and enhancing my skills in web development. Working on various personal projects to gain practical experience while continuously learning new technologies.</p>
              </div>

              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">Data Structures and Algorithms</h4>
                <p className="text-gray-400">Competitive Programming • 2022 - Present</p>
                <p className="mt-2 text-gray-300">Solving complex algorithmic problems on platforms like LeetCode and GeeksforGeeks. Developed strong problem-solving skills through consistent practice with a focus on efficiency and optimization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section - New */}
        <div className="backdrop-blur-sm bg-card/20 rounded-xl p-6 border border-neonGreen/10 mb-12">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-neonGreen/10 mr-4">
              <Code className="h-6 w-6 text-neonGreen" />
            </div>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-neonGreen">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "JavaScript", "C", "SQL", "HTML", "CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-neonGreen/10 text-sm border border-neonGreen/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-neonGreen">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "MongoDB"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-neonGreen/10 text-sm border border-neonGreen/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-neonGreen">AI/ML Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "scikit-learn"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-neonGreen/10 text-sm border border-neonGreen/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-neonGreen">Version Control</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-neonGreen/10 text-sm border border-neonGreen/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coding Platforms Section - Updated with links */}
        <div className="backdrop-blur-sm bg-card/20 rounded-xl p-6 border border-neonGreen/10 mb-12">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-neonGreen/10 mr-4">
              <Database className="h-6 w-6 text-neonGreen" />
            </div>
            <h3 className="text-2xl font-bold">Coding Platforms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20 flex items-center">
              <div className="mr-3">
                <ExternalLink className="h-5 w-5 text-neonGreen" />
              </div>
              <div>
                <h4 className="font-semibold">LeetCode</h4>
                <p className="text-sm text-gray-400">
                  <a href="https://leetcode.com/u/tushar_rajput120/" target="_blank" rel="noopener noreferrer" className="hover:text-neonGreen">
                    Solved 200+ Problems
                  </a>
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20 flex items-center">
              <div className="mr-3">
                <ExternalLink className="h-5 w-5 text-neonGreen" />
              </div>
              <div>
                <h4 className="font-semibold">GeeksforGeeks</h4>
                <p className="text-sm text-gray-400">
                  <a href="https://www.geeksforgeeks.org/user/tusharsi48j2/" target="_blank" rel="noopener noreferrer" className="hover:text-neonGreen">
                    Solved 150+ Problems
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section - Updated */}
        <div className="backdrop-blur-sm bg-card/20 rounded-xl p-6 border border-neonGreen/10 mb-12">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-neonGreen/10 mr-4">
              <Award className="h-6 w-6 text-neonGreen" />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">Mastering Data Structure and Algorithms</h4>
              <p className="text-sm text-gray-400">Udemy</p>
            </div>
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">Java Programming</h4>
              <p className="text-sm text-gray-400">Udemy</p>
            </div>
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">Web Development Fundamentals</h4>
              <p className="text-sm text-gray-400">Udemy</p>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <Button 
            className="bg-neonGreen text-midnight hover:bg-neonGreen/80 font-medium py-6 px-8 rounded-full"
            asChild
            onClick={handleDownload}
          >
            <a href="/Tushar_Singh_Resume.pdf" download="Tushar_Singh_Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
