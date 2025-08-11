import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Master Of Business Administration",
      institution: "AMITY GLOBAL BUSINESS SCHOOL",
      location: "CHENNAI",
      period: "2024 - 2026",
      status: "In Progress",
      icon: "🎯",
    },
    {
      degree: "Bachelor Of Business Administration And Bachelor Of Laws (Honours)",
      institution: "VIT UNIVERSITY",
      location: "CHENNAI",
      period: "JULY 2019 - MAY 2024",
      grade: "7 CGPA",
      icon: "⚖️",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "SRM PUBLIC SCHOOL",
      location: "THURAIYUR, TRICHY",
      period: "2018 - 2019",
      grade: "64%",
      board: "CBSE",
      icon: "📚",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 relative min-h-screen">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
          }}
        />
        
      </div>
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/79/65/08/796508c90f41cdc0d13e8c9d609b8f93.jpg)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-primary"
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-50" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center text-sm">
                  {edu.icon}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <div className="glass-card rounded-2xl p-6 hover-glow group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-gradient-primary mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-text-secondary mb-1">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="text-text-muted text-sm mb-2">
                          {edu.location}
                        </div>
                        <div className="flex items-center text-text-muted text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.grade && (
                        <span className="px-3 py-1 bg-gradient-primary rounded-full text-xs font-medium text-primary-foreground">
                          {edu.grade}
                        </span>
                      )}
                      {edu.status && (
                        <span className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-secondary-foreground">
                          {edu.status}
                        </span>
                      )}
                      {edu.board && (
                        <span className="px-3 py-1 glass-card rounded-full text-xs font-medium text-text-secondary">
                          {edu.board}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;