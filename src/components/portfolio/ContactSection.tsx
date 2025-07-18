import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Send
} from "lucide-react";
import { saveAs } from "file-saver";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaghasiyajenil29@gmail.com",
      link: "mailto:vaghasiyajenil29@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8155984643",
      link: "tel:+918155984643",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajkot, Gujarat",
      link: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jenilvaghasiya",
      link: "https://github.com/jenilvaghasiya",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/JENILVAGHASIYA",
      link: "https://linkedin.com/in/JENILVAGHASIYA",
      color: "from-blue-600 to-blue-800"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const downloadResume = () => {
    // Create a dummy PDF for now - in production this would be the actual resume
    const blob = new Blob(['Jenil Vaghasiya Resume'], { type: 'application/pdf' });
    saveAs(blob, 'Jenil_Vaghasiya_Resume.pdf');
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="hover-lift shadow-card transition-smooth group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className={`w-16 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="p-4 flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                        {item.link !== "#" ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-smooth animated-underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <div className="mt-8">
              <Card className="shadow-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-4">
                    Download My Resume
                  </h4>
                  <Button 
                    onClick={downloadResume}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Send Me a Message
            </h3>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Whether you're looking for a dedicated developer for your team, need help with a 
              specific project, or want to discuss potential collaborations, I'm always excited 
              to connect with fellow professionals and explore new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('mailto:vaghasiyajenil29@gmail.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/JENILVAGHASIYA', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;