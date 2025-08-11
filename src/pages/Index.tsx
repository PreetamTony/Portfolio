import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <AchievementsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
