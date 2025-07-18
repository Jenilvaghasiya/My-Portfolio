import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import profileImage from "@/assets/jenil-profile.jpg";


const HeroSection = () => {
  const downloadResume = () => {
    // Download the actual PDF from the public folder
    const link = document.createElement('a');
    link.href = '/Jenil_Vaghasiya (1).pdf';
    link.download = 'Jenil_Vaghasiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center justify-between max-w-7xl relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-white animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            Jenil
            <br />
            <span className="text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">
              Vaghasiya
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-6 font-light">
            <span className="block">Aspiring Full Stack Developer</span>
            <span className="text-white/80">MERN | C# | ASP.NET</span>
          </div>

          <p className="text-lg mb-8 text-white/90 max-w-lg leading-relaxed">
            To obtain a position that will allow me to utilize my technical skills, 
            knowledge, and willingness to learn in making an organization successful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={downloadResume}
              size="lg"
              className="glass hover-glow bg-white/20 border-white/30 text-white hover:bg-white/30 transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="glass hover-glow bg-white/20 border-white/30 text-white hover:bg-white/30 transition-smooth"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center items-center animate-slide-in-right">
          <div className="relative group">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-blue-500 shadow-glow transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_10px_#6366f1,0_0_80px_20px_#a21caf] bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
              <img 
                src={profileImage} 
                alt="Jenil Vaghasiya"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            {/* Decorative neon ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-blue-500 pointer-events-none animate-pulse" style={{ opacity: 0.7 }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;