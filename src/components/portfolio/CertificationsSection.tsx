import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to Networking",
      provider: "Cisco",
      type: "Networking",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Portfolio Website with HTML and CSS",
      provider: "Coursera",
      type: "Web Development",
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "HTML Fundamentals",
      provider: "Sololearn",
      type: "Web Development",
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "CSS Fundamentals",
      provider: "Sololearn",
      type: "Web Development",
      color: "bg-pink-500/10 text-pink-600 border-pink-200"
    },
    {
      title: "JavaScript Fundamentals",
      provider: "Sololearn",
      type: "Programming",
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-200"
    },
    {
      title: "PHP Fundamentals",
      provider: "Sololearn",
      type: "Programming",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "C Programming",
      provider: "Sololearn",
      type: "Programming",
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    },
    {
      title: "R Programming",
      provider: "Sololearn",
      type: "Data Science",
      color: "bg-teal-500/10 text-teal-600 border-teal-200"
    },
    {
      title: "React + Node Full Stack",
      provider: "Udemy",
      type: "Web Development",
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-200"
    },
    {
      title: "Java Programming",
      provider: "Udemy",
      type: "Programming",
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      title: "Excel Pivot Tables",
      provider: "Various",
      type: "Data Analysis",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
    },
    {
      title: "Tableau Fundamentals",
      provider: "Various",
      type: "Data Visualization",
      color: "bg-violet-500/10 text-violet-600 border-violet-200"
    },
    {
      title: "JDBC Programming",
      provider: "Various",
      type: "Database",
      color: "bg-slate-500/10 text-slate-600 border-slate-200"
    },
    {
      title: "Plotly for Python",
      provider: "Various",
      type: "Data Visualization",
      color: "bg-rose-500/10 text-rose-600 border-rose-200"
    },
    {
      title: "Python Basics",
      provider: "Various",
      type: "Programming",
      color: "bg-lime-500/10 text-lime-600 border-lime-200"
    }
  ];

  const categories = [
    "All",
    "Web Development",
    "Programming", 
    "Data Science",
    "Networking",
    "Database"
  ];

  return (
    <section className="py-20 bg-background" id="certifications">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Certifications & Learning
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="hover-lift shadow-card transition-smooth animate-bounce-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                <h3 className="font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-smooth">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {cert.provider}
                </p>

                <Badge 
                  variant="secondary"
                  className={`${cert.color} text-xs`}
                >
                  {cert.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">Technology Areas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Hours of Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;