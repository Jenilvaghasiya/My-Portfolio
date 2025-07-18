import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Users, Cpu } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ignite Perfume – E-Commerce Website",
      description: "Comprehensive perfume-selling website with user authentication, shopping cart functionality, custom perfume creation module, admin panel, and order tracking system.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      icon: ShoppingCart,
      features: [
        "User login and authentication",
        "Shopping cart management",
        "Custom perfume creation module",
        "Admin panel for management",
        "Order tracking system",
        "Responsive design"
      ],
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Recruitment Management System",
      description: "Complete web application for managing recruitment processes with job posting, candidate profiles, assessment modules, and multi-language support.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework"],
      icon: Users,
      features: [
        "Job posting management",
        "Candidate profile system",
        "Assessment and quiz modules",
        "Multi-language support",
        "Dashboard analytics",
        "Role-based access control"
      ],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Gesture-Based Projector Control",
      description: "Innovative hardware project that enables projector control through hand gestures using Raspberry Pi, Python, and IR sensors for intuitive interaction.",
      technologies: ["Raspberry Pi", "Python", "OpenCV", "IR Sensors"],
      icon: Cpu,
      features: [
        "Hand gesture recognition",
        "IR sensor integration",
        "Real-time gesture processing",
        "Projector control interface",
        "Raspberry Pi hardware setup",
        "Computer vision algorithms"
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 gradient-section" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my technical skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover-lift shadow-card transition-smooth animate-bounce-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="h-16 w-16 text-white animate-float" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-sm text-muted-foreground">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;