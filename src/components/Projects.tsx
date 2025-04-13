
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Investax',
      description: 'A Zerodha-inspired trading platform with real-time market data and user-friendly dashboard for investment tracking and analysis.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Wanderlust',
      description: 'A travel planning application that helps users discover destinations, create itineraries, and share travel experiences with others.',
      techStack: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Myntra Clone',
      description: 'A full-featured e-commerce platform replicating Myntra\'s design and functionality with responsive UI and comprehensive product catalog.',
      techStack: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Zara AI Assistant',
      description: 'An intelligent conversational AI assistant with natural language processing, context awareness, and personalized interaction capabilities.',
      techStack: ['OpenAI', 'React', 'TypeScript', 'Node.js', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const [loadedImages, setLoadedImages] = React.useState<{[key: number]: boolean}>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({...prev, [id]: true}));
  };

  const handleImageError = (id: number) => {
    console.error(`Failed to load image for project ${id}`);
    // Keep the failed status as not loaded so the skeleton continues to show
  };

  return (
    <section id="projects" className="py-20 bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(57,255,20,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neonGreen">&lt;</span> Projects <span className="text-neonGreen">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-sm bg-card/30 rounded-xl overflow-hidden shadow-lg border border-neonGreen/10 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent z-10"></div>
                {!loadedImages[project.id] && (
                  <Skeleton className="w-full h-full absolute inset-0" />
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${loadedImages[project.id] ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageError(project.id)}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-neonGreen/10 text-neonGreen border border-neonGreen/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    className="bg-neonGreen text-midnight hover:bg-neonGreen/80 text-sm"
                    size="sm"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-neonGreen text-neonGreen hover:bg-neonGreen/10 text-sm"
                    size="sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
