import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import InternshipSection from "@/components/portfolio/InternshipSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import LanguagesAndHobbies from "@/components/portfolio/LanguagesAndHobbies";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <InternshipSection />
        <ProjectsSection />
        <CertificationsSection />
        <LanguagesAndHobbies />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;