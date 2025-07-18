import { Card, CardContent } from "@/components/ui/card";
import { Globe, Camera, Gamepad2, Palette, Film } from "lucide-react";

const LanguagesAndHobbies = () => {
  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Hindi", level: "Native", flag: "🇮🇳" },
    { name: "Gujarati", level: "Native", flag: "🇮🇳" },
  ];

  const hobbies = [
    {
      name: "Graphic Design",
      description: "Creating visual content and digital artwork",
      icon: Palette,
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Video Editing",
      description: "Editing and producing engaging video content",
      icon: Film,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Nature Photography",
      description: "Capturing the beauty of natural landscapes",
      icon: Camera,
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Gaming",
      description: "Exploring virtual worlds and strategic gameplay",
      icon: Gamepad2,
      color: "from-orange-500 to-red-600"
    },
  ];

  return (
    <section className="py-20 gradient-section" id="languages-hobbies">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Languages & Interests
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Communication skills and creative pursuits that shape my perspective
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages Section */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Languages Known</h3>
            </div>

            <div className="space-y-4">
              {languages.map((language, index) => (
                <Card 
                  key={index}
                  className="hover-lift shadow-card transition-smooth"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{language.flag}</span>
                        <div>
                          <h4 className="font-semibold text-foreground">{language.name}</h4>
                          <p className="text-sm text-muted-foreground">{language.level}</p>
                        </div>
                      </div>
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-primary transition-smooth ${
                            language.level === 'Native' ? 'w-full' : 'w-5/6'
                          }`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="animate-slide-in-right">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Hobbies & Interests</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <Card 
                  key={index}
                  className="hover-lift shadow-card transition-smooth group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`h-24 bg-gradient-to-br ${hobby.color} flex items-center justify-center relative`}>
                      <hobby.icon className="h-8 w-8 text-white animate-float" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                        {hobby.name}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Creative Skills Showcase */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Creative & Technical Balance
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My diverse interests in both technical and creative fields allow me to approach 
              problems from unique perspectives. Whether it's designing user interfaces, 
              capturing compelling visuals, or developing innovative solutions, I bring 
              creativity and technical expertise together to create meaningful experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesAndHobbies;