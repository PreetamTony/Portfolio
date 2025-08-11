import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Gamepad2, 
  MapPin, 
  Mic,
  Heart,
  MessageCircle 
} from "lucide-react";

const InterestsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      title: "Reading Sales and Business Strategy Books",
      description: "Constantly learning from business leaders and strategic thinkers",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      emoji: "📚"
    },
    {
      title: "Networking and Building Professional Relationships",
      description: "Creating meaningful connections in the business and legal community",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      emoji: "🤝"
    },
    {
      title: "Exploring New Market Trends and Business Innovations",
      description: "Staying ahead of market dynamics and emerging business models",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-600",
      emoji: "📈"
    },
    {
      title: "Playing Cricket and Strategic Games",
      description: "Enjoying team sports and strategy games that sharpen tactical thinking",
      icon: Gamepad2,
      color: "from-orange-500 to-red-600",
      emoji: "🏏"
    },
    {
      title: "Travelling and Expanding Market Knowledge",
      description: "Exploring different regions to understand diverse market landscapes",
      icon: MapPin,
      color: "from-teal-500 to-cyan-600",
      emoji: "🌍"
    },
    {
      title: "Volunteering, Debate Clubs, Public Speaking",
      description: "Contributing to community causes and enhancing communication skills",
      icon: Mic,
      color: "from-pink-500 to-rose-600",
      emoji: "🎤"
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 relative">
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
          Interests & Passions
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 h-full hover-glow transition-all duration-300 group-hover:scale-105">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${interest.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl group-hover:animate-bounce">
                      {interest.emoji}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-display font-semibold text-gradient-primary line-clamp-2">
                      {interest.title}
                    </h3>
                    
                    <div className="glass-panel rounded-lg p-3">
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${interest.color} pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-panel rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-display font-semibold text-gradient-primary">
                Personal Philosophy
              </h3>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed">
              "I believe in continuous learning, meaningful connections, and making a positive impact. 
              Whether it's through legal advocacy, business strategy, or community service, 
              I strive to bridge theory with practice and create value for organizations and society."
            </p>
            <div className="mt-6 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-text-muted mr-2" />
              <span className="text-text-muted text-sm">
                Ready to connect and collaborate on meaningful projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;