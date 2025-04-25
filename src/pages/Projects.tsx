
import { Github, Globe, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark mode toggle, responsive design, and smooth animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates, user authentication, and collaborative features.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/username/tasks",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with cart functionality, payment integration, and order management system.",
    technologies: ["React", "Stripe", "Firebase"],
    demoUrl: "https://shop.example.com",
    githubUrl: "https://github.com/username/ecommerce",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    technologies: ["React", "Weather API", "Charts"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather",
    imageUrl: "/placeholder.svg"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-navy dark:via-navy-800 dark:to-navy-900 pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h1>
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Each project represents a unique challenge 
          and an opportunity to learn and grow as a developer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border-2">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4 group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
