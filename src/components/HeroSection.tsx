import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";
import dhanushProfile from "@/assets/dhanush-profile.jpg";

const HeroSection = () => {
  const skills = [
    "Legal Expert",
    "HR Specialist", 
    "Digital Marketer",
    "Strategic Leader"
  ];

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
        }}
      >
        {/* Dark overlay for better text contrast */}
        
      </div>
      
      <ParticleBackground />
      
      <div className="relative z-30 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 md:p-12 max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="relative z-10 overflow-hidden rounded-full border-4 border-primary p-1 bg-white shadow-lg">
                <img
                  src="https://i.ibb.co/chfqpKsW/dhanush-profile.jpg"
                  alt="Dhanush R"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 animate-glow-pulse" />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-display font-bold text-gradient-primary mb-4"
          >
            Dhanush R
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-text-secondary mb-8"
          >
            MBA Candidate | Advocate
          </motion.h2>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-text-primary mb-12 h-8"
          >
            <TypewriterText 
              texts={skills}
              className="font-medium"
            />
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-glass-border bg-transparent hover:bg-glass-primary/20 hover:shadow-glow transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-medium"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-secondary hover:text-primary transition-colors duration-300 animate-float"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;