import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    {
      title: "HUMAN RESOURCES INTERN",
      company: "TI CLEAN MOBILITY PVT. LTD.",
      group: "MURUGAPPA GROUP OF COMPANIES",
      period: "02/06/2025 - 28/07/2025",
      location: "Chennai",
      description: "Assisted in various campus recruitment, training and development programmes, on-boarding processes, employee engagement programmes and payroll activities.",
      type: "HR",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "BUSINESS DEVELOPMENT INTERN",
      company: "BRAINOBRAIN",
      period: "01/06/2024 - 31/07/2024",
      location: "Karaikal",
      description: "Assisted in expanding customer base, hiring faculties, marketing and other promotional activities.",
      type: "Business",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "LAW INTERN",
      company: "SENIOR ADVOCATE R.VIJAYARAGHAVEN",
      court: "MADRAS HIGH COURT",
      period: "14/06/2023 - 26/09/2023",
      location: "Chennai",
      description: "Court Appearance (Civil, Criminal and Labour courts)",
      type: "Legal",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "LAW INTERN",
      company: "ADVOCATE GUNASEKARAN",
      court: "MADRAS HIGH COURT",
      period: "03/05/2023 - 01/06/2023",
      location: "Chennai",
      description: "Analysis and Registration of Properties",
      type: "Legal",
      color: "from-yellow-500 to-red-600"
    },
    {
      title: "LAW INTERN",
      company: "ADVOCATE S.KAMARASU",
      court: "MADRAS HIGH COURT",
      period: "01/09/2022 - 30/09/2022",
      location: "Chennai",
      description: "Acquainted with various laws and legal procedures, different practical legal processes, besides theoretical knowledge on various bare acts",
      type: "Legal",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "LAW INTERN",
      company: "SG & ASSOCIATES",
      period: "13/05/2022 - 13/06/2022",
      location: "Chennai",
      description: "Appearance in GST & Income Tax Tribunals.",
      type: "Legal",
      color: "from-teal-500 to-blue-600"
    },
    {
      title: "LAW INTERN",
      company: "INDUS FINANCE LTD",
      period: "26/06/2021 - 25/07/2021",
      location: "Chennai",
      description: "Appearance in GST & Income Tax Tribunals.",
      type: "Legal",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "LAW INTERN",
      company: "ADVOCATE K.SABAPATHY",
      court: "MADRAS HIGH COURT",
      period: "16/11/2020 - 05/12/2020",
      location: "Chennai",
      description: "Appearance before the Mediation and Conciliation Centre. Appearance in GST & Income Tax Tribunals. Drafting, Legal Research, Interaction with Clients",
      type: "Legal",
      color: "from-orange-500 to-red-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Legal": return "⚖️";
      case "HR": return "🤵";
      case "Business": return "💼";
      default: return "🏢";
    }
  };

  return (
    <section id="experience" className="relative py-20 px-6 min-h-screen w-full">
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
      
      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-primary"
        >
          Professional Experience
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {experiences.map((exp, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-panel rounded-3xl p-8 mx-auto max-w-4xl hover-glow"
                  >
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Experience Type Icon */}
                      <div className="text-center">
                        <div className="text-6xl mb-4">{getTypeIcon(exp.type)}</div>
                        <div className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white inline-block`}>
                          {exp.type}
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="md:col-span-2 space-y-4">
                        <div>
                          <h3 className="text-2xl font-display font-bold text-gradient-primary mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-lg text-text-primary mb-1">
                            <Briefcase className="h-5 w-5 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          {exp.group && (
                            <div className="text-text-secondary text-sm mb-2">
                              {exp.group}
                            </div>
                          )}
                          {exp.court && (
                            <div className="text-text-secondary text-sm mb-2">
                              {exp.court}
                            </div>
                          )}
                          <div className="flex items-center text-text-muted mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center text-text-muted mb-4">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="glass-card rounded-xl p-4">
                          <p className="text-text-secondary leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card rounded-full p-3 hover-glow transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card rounded-full p-3 hover-glow transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-gradient-primary scale-125' : 'bg-glass-secondary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;