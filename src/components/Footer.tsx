import { motion } from "framer-motion";
import { Heart, Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:dhanushrajasekaran2324@gmail.com",
      icon: Mail,
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dhanush-r-7b07b831a/",
      icon: Linkedin,
      color: "hover:text-cyan-400"
    },
    {
      name: "Phone",
      href: "tel:+919600248678",
      icon: Phone,
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="relative py-12 px-6 mt-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
          }}
        />
        
      </div>
      {/* Glass Background */}
      <div className="absolute inset-0 glass-panel opacity-80" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-display font-bold text-gradient-primary mb-4">
              Dhanush R
            </h3>
            <p className="text-text-secondary mb-4">
              MBA Candidate | Advocate
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Bridging legal expertise with business strategy to create innovative solutions 
              for tomorrow's challenges.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-2 glass-card rounded-lg transition-all duration-300 hover:scale-110 hover-glow ${social.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-text-muted text-sm">
              <p>Chennai, Tamil Nadu</p>
              <p>+91 9600248678</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-text-muted text-sm"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <span>© {currentYear} Dhanush R. Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />
            <span>and passion for excellence.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-xs">Designed with modern web technologies</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;