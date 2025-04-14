
import React from 'react';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
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
                <h4 className="text-lg font-semibold">Project-Based Learning</h4>
                <p className="text-gray-400">Personal Portfolio • 2022 - Present</p>
                <p className="mt-2 text-gray-300">Developing multiple web applications to build a diverse portfolio. Projects include a digital lock system, movie suggestion app, image changer, and other interactive web applications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="backdrop-blur-sm bg-card/20 rounded-xl p-6 border border-neonGreen/10 mb-12">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-neonGreen/10 mr-4">
              <Award className="h-6 w-6 text-neonGreen" />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">Web Development Fundamentals</h4>
              <p className="text-sm text-gray-400">Udemy • 2023</p>
            </div>
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">JavaScript Mastery</h4>
              <p className="text-sm text-gray-400">Coursera • 2023</p>
            </div>
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">React Frontend Development</h4>
              <p className="text-sm text-gray-400">FreeCodeCamp • 2022</p>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <Button 
            className="bg-neonGreen text-midnight hover:bg-neonGreen/80 font-medium py-6 px-8 rounded-full"
            asChild
          >
            <a href="/resume.pdf" download="Tushar_Singh_Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
