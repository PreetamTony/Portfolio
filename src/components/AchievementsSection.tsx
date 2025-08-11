import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Star, Medal, Users, Target, Globe } from "lucide-react";

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "ELATION 2025",
      role: "EVENT MAIN COORDINATOR",
      organization: "AMITY CHENNAI",
      description: "Brought in Title sponsor and lead the hospitality team",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      badge: "🏆",
      type: "Leadership"
    },
    {
      title: "AMITY PREMIER LEAGUE 2024",
      role: "EVENT COORDINATOR",
      organization: "AMITY CHENNAI",
      description: "Marketing and other promotional activities",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      badge: "👥",
      type: "Management"
    },
    {
      title: "VITNESS 2019",
      role: "MARKETING COORDINATOR",
      organization: "VIT CHENNAI",
      description: "Successfully coordinated marketing campaigns for the annual fest",
      icon: Target,
      color: "from-green-500 to-blue-600",
      badge: "🎯",
      type: "Marketing"
    },
    {
      title: "WEB DESIGNING COMPETITION",
      role: "STATE FIRST POSITION",
      organization: "INSTITUTE FOR ENTREPRENEURSHIP & CAREER DEVELOPMENT, BHARATHIDASAN UNIVERSITY",
      year: "2016",
      description: "Achieved first place in state-level web designing competition",
      icon: Star,
      color: "from-purple-500 to-pink-600",
      badge: "🥇",
      type: "Technical"
    },
    {
      title: "SOF INTERNATIONAL SPORTS KNOWLEDGE OLYMPIAD",
      role: "INTERNATIONAL RECOGNITION",
      organization: "SCIENCE OLYMPIAD FOUNDATION",
      year: "2016",
      description: "43rd International rank and 4th State rank",
      icon: Globe,
      color: "from-indigo-500 to-purple-600",
      badge: "🌍",
      type: "Academic"
    },
    {
      title: "24TH WUSHU & KUNG-FU CHAMPIONSHIP",
      role: "STATE LEVEL BRONZE MEDAL",
      organization: "STATE CHAMPIONSHIP",
      year: "2013",
      description: "Achieved bronze medal in state level martial arts championship",
      icon: Medal,
      color: "from-orange-500 to-red-600",
      badge: "🥉",
      type: "Sports"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
          }}
        />
        
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-primary"
        >
          Achievements
        </motion.h2>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="break-inside-avoid mb-8"
              >
                <div className="glass-card rounded-2xl p-6 hover-glow group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{achievement.badge}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-display font-bold text-gradient-primary">
                      {achievement.title}
                    </h3>
                    
                    <div className="space-y-1">
                      <p className="text-primary font-semibold">
                        {achievement.role}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {achievement.organization}
                      </p>
                      {achievement.year && (
                        <p className="text-text-muted text-xs">
                          {achievement.year}
                        </p>
                      )}
                    </div>

                    <div className="glass-panel rounded-lg p-3">
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${achievement.color} pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center glass-panel rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-gradient-primary mb-2">6</div>
            <div className="text-text-secondary text-sm">Major Achievements</div>
          </div>
          <div className="text-center glass-panel rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-gradient-primary mb-2">3</div>
            <div className="text-text-secondary text-sm">Leadership Roles</div>
          </div>
          <div className="text-center glass-panel rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-gradient-primary mb-2">2</div>
            <div className="text-text-secondary text-sm">State Level Awards</div>
          </div>
          <div className="text-center glass-panel rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-gradient-primary mb-2">1</div>
            <div className="text-text-secondary text-sm">International Recognition</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;