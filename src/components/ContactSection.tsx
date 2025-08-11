import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9600248678",
      href: "tel:+919600248678",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "dhanushrajasekaran2324@gmail.com",
      href: "mailto:dhanushrajasekaran2324@gmail.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, 600088",
      href: "#",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/dhanush-r-7b07b831a/",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
          }}
        />
        
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-primary"
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-primary">
                Get in Touch
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or simply connect with fellow professionals. Whether you're looking for 
                legal expertise, business strategy, or digital marketing insights, 
                let's start a conversation.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="flex items-center p-4 glass-card rounded-xl hover-glow group transition-all duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-text-muted text-sm">{contact.label}</div>
                        <div className="text-text-primary font-medium">{contact.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel rounded-3xl p-8"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-primary">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="floating-label-group">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border bg-transparent text-text-primary placeholder-text-muted focus:border-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="floating-label-group">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border bg-transparent text-text-primary placeholder-text-muted focus:border-primary"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div className="floating-label-group">
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-card border-glass-border bg-transparent text-text-primary placeholder-text-muted focus:border-primary"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="floating-label-group">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="glass-card border-glass-border bg-transparent text-text-primary placeholder-text-muted focus:border-primary resize-none"
                  placeholder="Your Message"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg font-medium py-6"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-panel rounded-2xl p-8 max-w-3xl mx-auto">
            <blockquote className="text-xl font-display italic text-gradient-primary mb-4">
              "Success is not just about what you accomplish in your life, it's about what you inspire others to do."
            </blockquote>
            <cite className="text-text-muted">- Ready to inspire and be inspired</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;