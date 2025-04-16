
import React, { useState } from 'react';
import { Send, Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-midnight/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(57,255,20,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neonGreen">&lt;</span> Contact Me <span className="text-neonGreen">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-neonGreen/30 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? 
            Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="backdrop-blur-sm bg-card/30 p-8 rounded-xl shadow-lg border border-neonGreen/10">
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-midnight border-neonGreen/30 focus-visible:ring-neonGreen text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-midnight border-neonGreen/30 focus-visible:ring-neonGreen text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-midnight border-neonGreen/30 focus-visible:ring-neonGreen text-white min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neonGreen text-midnight hover:bg-neonGreen/80 font-medium"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="backdrop-blur-sm bg-card/30 p-8 rounded-xl shadow-lg border border-neonGreen/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 bg-neonGreen/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-neonGreen" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:tusharsinghkrj@gmail.com" className="text-gray-300 hover:text-neonGreen transition-colors">
                      tusharsinghkrj@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 bg-neonGreen/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-neonGreen" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a href="tel:+919520554564" className="text-gray-300 hover:text-neonGreen transition-colors">
                      +91 9520554564
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/tushar-singh-068426257/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neonGreen/10 hover:bg-neonGreen/20 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-neonGreen" />
                </a>
                <a 
                  href="https://github.com/Tushar-Rajput9520" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neonGreen/10 hover:bg-neonGreen/20 p-3 rounded-full transition-colors"
                >
                  <Github className="h-6 w-6 text-neonGreen" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neonGreen/10 hover:bg-neonGreen/20 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-6 w-6 text-neonGreen" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
