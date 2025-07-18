import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, FileCode } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "ASP.Net", "PHP", "React.js", "Node.js"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      title: "Scripting",
      icon: FileCode,
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL Server", "MySQL", "MongoDB"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["VS Code", "Adobe Illustrator", "Canva"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
  ];

  return (
    <section className="py-20 gradient-section" id="skills">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-lift shadow-card transition-smooth animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-smooth cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React.js", "Node.js", "Express.js", "MongoDB", "C#", "ASP.NET",
              "SQL Server", "JavaScript", "HTML5", "CSS3", "Python", "PHP",
              "Git", "VS Code", "Adobe Illustrator", "Canva"
            ].map((skill, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-card hover:bg-primary/5 transition-smooth hover-lift"
              >
                <div className="text-sm font-medium text-foreground">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;