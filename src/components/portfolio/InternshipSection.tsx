import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Award } from "lucide-react";

const InternshipSection = () => {
  const achievements = [
    "Built Recruitment Management System from scratch",
    "Worked with C#, ASP.NET MVC/Core, SQL Server",
    "Gained expertise in debugging and troubleshooting",
    "Developed frontend interfaces with HTML/CSS/JS",
    "Collaborated with senior developers on complex projects",
  ];

  const technologies = [
    "C#", "ASP.NET MVC", "ASP.NET Core", "SQL Server", 
    "HTML", "CSS", "JavaScript", "Entity Framework"
  ];

  return (
    <section className="py-20 bg-background" id="internship">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in real-world software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-lift shadow-elegant transition-smooth animate-fade-in">
            <CardContent className="p-8">
              {/* Company Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Software Development Intern
                    </h3>
                    <p className="text-xl text-primary font-semibold">
                      Websmith Solution
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    7 Months
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span>7 Months Duration</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Rajkot, Gujarat</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Award className="h-5 w-5" />
                    <span>C#, ASP.NET, MVC/Core Developer</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight Project */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Featured Project: Recruitment Management System
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a comprehensive web application for managing recruitment processes, 
                  including job postings, candidate profiles, and assessment modules. The system 
                  supports multiple languages and provides a complete end-to-end solution for 
                  recruitment agencies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;