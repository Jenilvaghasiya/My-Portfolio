import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Rajkot, Gujarat" },
    { icon: Mail, label: "Email", value: "vaghasiyajenil29@gmail.com", link: "mailto:vaghasiyajenil29@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8155984643", link: "tel:+918155984643" },
    { icon: Github, label: "GitHub", value: "github.com/jenilvaghasiya", link: "https://github.com/jenilvaghasiya" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/JENILVAGHASIYA", link: "https://linkedin.com/in/JENILVAGHASIYA" },
  ];

  return (
    <section className="py-20 gradient-section" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a passionate and dedicated software developer with expertise in modern web technologies. 
            My journey in technology began with a curiosity about how things work and has evolved into 
            a deep commitment to creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Professional Summary
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                As an aspiring Full Stack Developer, I bring a comprehensive understanding of both 
                front-end and back-end technologies. My experience spans across various programming 
                languages and frameworks, with a particular focus on the MERN stack and Microsoft technologies.
              </p>
              <p className="leading-relaxed">
                During my internship at Websmith Solution, I gained hands-on experience in building 
                robust web applications using C#, ASP.NET MVC/Core, and SQL Server. I have a proven 
                track record of developing complete solutions from conception to deployment.
              </p>
              <p className="leading-relaxed">
                I am passionate about staying updated with the latest technology trends and 
                continuously improving my skills to deliver high-quality, efficient, and scalable solutions.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover-lift shadow-card transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-smooth animated-underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;