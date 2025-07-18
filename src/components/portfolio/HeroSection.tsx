import { Button } from "@/components/ui/button";
import { Download, ArrowDown, ChevronsDown } from "lucide-react";
import profileImage from "@/assets/jenil-profile.jpg";

const HeroSection = () => {
  const downloadResume = () => {
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
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[size:50px_50px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl relative z-10 gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="mb-6">
            <span className="text-purple-400 font-mono text-sm md:text-base">
              Hello, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
              Jenil Vaghasiya
            </h1>
            
            <div className="text-xl md:text-2xl mb-6 font-light">
              <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </div>

            <p className="text-lg mb-8 text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences with expertise in MERN stack, C#, and ASP.NET.
              Passionate about building solutions that make an impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={downloadResume}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm hover:shadow-purple-500/20 hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Tech stack badges */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-3">
            {['MERN', 'C#', 'ASP.NET', 'JavaScript', 'TypeScript', 'React', 'Node.js'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative group animate-slide-in-right">
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 p-0.5 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={profileImage} 
                alt="Jenil Vaghasiya"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-500/10 blur-xl animate-pulse delay-1000" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl scale-110 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group"
      >
        <div className="text-white/60 group-hover:text-white/90 text-sm mb-2 transition-colors">
          Explore more
        </div>
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start p-1 group-hover:border-white/60 transition-colors">
          <ChevronsDown className="h-5 w-5 text-white/70 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;