import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, Download, ArrowUp } from "lucide-react";
import { saveAs } from "file-saver";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // const downloadResume = () => {
  //   const blob = new Blob(['Jenil Vaghasiya Resume'], { type: 'application/pdf' });
  //   saveAs(blob, 'Jenil_Vaghasiya_Resume.pdf');
  // };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jenilvaghasiya",
      color: "hover:text-gray-700"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/JENILVAGHASIYA",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:vaghasiyajenil29@gmail.com",
      color: "hover:text-red-600"
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Jenil Vaghasiya
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Aspiring Full Stack Developer passionate about creating innovative solutions 
              with modern web technologies. Always eager to learn and take on new challenges.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth animated-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Rajkot, Gujarat</p>
              <p>+91 8155984643</p>
              <p>vaghasiyajenil29@gmail.com</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${link.color} transition-smooth hover:scale-110`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="mt-4 md:mt-0 hover:bg-primary/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;