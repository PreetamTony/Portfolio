import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const certifications = [
    {
      title: "INTERMEDIATE LEVEL ENGLISH COURSE",
      institution: "BRITISH COUNCIL, INDIA",
      period: "NOV 2024 - MARCH 2025",
      icon: "🇬🇧",
      color: "from-blue-500 to-indigo-600",
      description: "Advanced English language proficiency course focusing on business communication and professional writing skills."
    },
    {
      title: "LEGAL AID AND ALLIED LAWS COURSE",
      institution: "NATIONAL UNIVERSITY OF STUDY AND RESEARCH IN LAW, RANCHI",
      period: "NOV 2023 - DEC 2023",
      icon: "⚖️",
      color: "from-green-500 to-emerald-600",
      description: "Comprehensive course covering legal aid systems, allied laws, and public interest litigation."
    },
    {
      title: "UPPER SECONDARY MODULE COURSE",
      institution: "BRITISH COUNCIL, INDIA",
      period: "SEP 2019 - NOV 2019",
      icon: "📚",
      color: "from-purple-500 to-violet-600",
      description: "Foundation course in English language skills with focus on academic and professional communication."
    },
    {
      title: "NLP PRACTITIONER WORKSHOP PROGRAM",
      institution: "MASTER YOURSELF WITH NLP, INDIA",
      period: "MAY 2019",
      icon: "🧠",
      color: "from-orange-500 to-red-600",
      description: "Neuro-Linguistic Programming certification focusing on communication, leadership, and personal development."
    },
    {
      title: "NLP FOUNDATION WORKSHOP PROGRAM",
      institution: "MASTER YOURSELF WITH NLP, INDIA",
      period: "APRIL 2017",
      icon: "💭",
      color: "from-teal-500 to-cyan-600",
      description: "Foundation level NLP training covering basic principles and techniques for personal and professional growth."
    },
    {
      title: "MS-OFFICE CERTIFICATION",
      institution: "WINSOFTS, CHIDAMBARAM",
      period: "2018",
      icon: "💻",
      color: "from-yellow-500 to-orange-600",
      description: "Complete Microsoft Office suite certification including Word, Excel, PowerPoint, and Outlook."
    },
    {
      title: "PHOTOSHOP JUNIOR CERTIFICATION",
      institution: "INSYS COMPUTER EDUCATION, CHIDAMBARAM",
      period: "2017",
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      description: "Adobe Photoshop certification covering image editing, graphic design, and digital art creation."
    }
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
          }}
        />
        
      </div>
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-primary"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -15 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-80 perspective-1000"
              onClick={() => toggleFlip(index)}
            >
              <div 
                className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCards.includes(index) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden glass-card rounded-2xl p-6 hover-glow">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl mb-4 glow-effect`}>
                      {cert.icon}
                    </div>
                    
                    <h3 className="text-lg font-display font-semibold text-gradient-primary mb-3 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center text-text-secondary mb-2">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{cert.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-text-muted">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{cert.period}</span>
                    </div>

                    <div className="mt-auto pt-4">
                      <span className="text-xs text-text-muted">Click to view details</span>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass-panel rounded-2xl p-6">
                  <div className="flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-xl mb-4 mx-auto`}>
                      {cert.icon}
                    </div>
                    
                    <h3 className="text-base font-display font-semibold text-text-primary mb-4 text-center">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {cert.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-glass-border">
                      <div className="flex items-center justify-center text-text-muted text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{cert.institution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;