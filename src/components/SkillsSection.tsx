import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Users, 
  Brain, 
  PuzzleIcon, 
  MessageCircle, 
  Calendar,
  Search,
  PenTool,
  Crown,
  GraduationCap,
  UserPlus,
  Heart,
  TrendingUp,
  Target
} from "lucide-react";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Team Management", icon: Users },
    { name: "Analytical Thinking", icon: Brain },
    { name: "Problem-Solving", icon: PuzzleIcon },
    { name: "Communication", icon: MessageCircle },
    { name: "Event Management", icon: Calendar },
    { name: "Legal Research", icon: Search },
    { name: "Content Creation", icon: PenTool },
    { name: "Leadership", icon: Crown },
    { name: "Training & Development", icon: GraduationCap },
    { name: "On-boarding Activities", icon: UserPlus },
    { name: "Employee Engagement", icon: Heart },
    { name: "Digital Marketing", icon: TrendingUp },
    { name: "Go-to-market Strategy", icon: Target },
  ];

  const languages = [
    { 
      name: "English", 
      
    },
    { 
      name: "Tamil", 
    }

  ];

  return (
    <section id="skills" className="relative py-20 px-6 min-h-screen w-full">
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
            backgroundImage: 'url(https://i.pinimg.com/736x/e2/e2/29/e2e22955c11cfb6b9fa9a00bee6cb993.jpg)',
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
          Skills & Languages
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-display font-semibold mb-8 text-gradient-primary"
            >
              Professional Skills
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="glass-card rounded-xl p-5 hover-glow group hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-primary rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-lg text-text-primary">{skill.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-display font-semibold mb-8 text-gradient-primary"
            >
              Languages
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-white/10 hover:border-white/20"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      {language.name}
                    </h4>
                    
                    
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;