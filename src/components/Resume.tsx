
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
                <p className="text-gray-400">Indian Institute of Technology (IIT) • 2018 - 2022</p>
                <p className="mt-2 text-gray-300">Graduated with honors. Specialized in full-stack development and machine learning.</p>
              </div>

              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">High School Diploma</h4>
                <p className="text-gray-400">Delhi Public School • 2016 - 2018</p>
                <p className="mt-2 text-gray-300">Top 5% of graduating class with focus on Mathematics and Computer Science.</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
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
                <h4 className="text-lg font-semibold">Senior Front-end Developer</h4>
                <p className="text-gray-400">TechCorp Solutions • 2022 - Present</p>
                <p className="mt-2 text-gray-300">Led front-end development for multiple client projects. Implemented responsive UI/UX designs and optimized web performance.</p>
              </div>

              <div className="relative pl-8 border-l border-neonGreen/30">
                <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neonGreen"></div>
                <h4 className="text-lg font-semibold">Web Development Intern</h4>
                <p className="text-gray-400">InnovateTech • 2021 - 2022</p>
                <p className="mt-2 text-gray-300">Collaborated on e-commerce platform development. Implemented responsive UI components and integrated payment gateways.</p>
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
              <h4 className="font-semibold mb-1">AWS Certified Developer</h4>
              <p className="text-sm text-gray-400">Amazon Web Services • 2023</p>
            </div>
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">React Advanced Concepts</h4>
              <p className="text-sm text-gray-400">Frontend Masters • 2022</p>
            </div>
            <div className="p-4 rounded-lg bg-neonGreen/5 border border-neonGreen/20">
              <h4 className="font-semibold mb-1">Full-Stack Web Development</h4>
              <p className="text-sm text-gray-400">Udemy • 2021</p>
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
