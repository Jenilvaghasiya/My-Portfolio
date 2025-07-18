import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { saveAs } from "file-saver";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "internship" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const downloadResume = () => {
  //   const blob = new Blob(['Jenil Vaghasiya Resume'], { type: 'application/pdf' });
  //   saveAs(blob, 'Jenil_Vaghasiya_Resume.pdf');
  // };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? "glass shadow-elegant backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-primary cursor-pointer hover:scale-105 transition-smooth"
          >
            JV
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-foreground hover:text-primary cursor-pointer animated-underline transition-smooth"
                activeClass="text-primary"
                spy={true}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Desktop CTA */}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/10 animate-fade-in">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg cursor-pointer transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
              <div className="px-4 pt-4 border-t border-border/10">
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;