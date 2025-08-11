import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dhanushProfile from "@/assets/dhanush-profile.jpg";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/4b/ae/46/4bae467fa7c329237327e9aad93c22d9.jpg)'
          }}
        />
        
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-gradient-primary"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="relative inline-block">
              <div className="glass-card rounded-3xl p-6 hover-glow bg-white/80">
                <img
                  src="https://i.ibb.co/chfqpKsW/dhanush-profile.jpg"
                  alt="Dhanush R Professional"
                  className="w-80 h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-primary">
                Professional Summary
              </h3>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I'm a versatile professional with a unique blend of legal expertise, human resource management skills, and digital marketing proficiency. Currently pursuing an MBA to enhance my strategic, analytical, and leadership capabilities.
                </p>
                
                <p>
                  My journey spans across multiple domains - from navigating complex legal frameworks in the courts of Chennai to developing innovative HR strategies and creating impactful marketing campaigns that drive brand growth and organizational success.
                </p>
                
                <p>
                  I'm passionate about innovation, talent development, and data-driven decision-making. My holistic perspective bridges compliance, people management, and brand strategy, making me ready to contribute effectively in dynamic business environments.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass-card rounded-xl hover-glow">
                  <div className="text-2xl font-bold text-gradient-primary">7+</div>
                  <div className="text-sm text-text-muted">Internships</div>
                </div>
                <div className="text-center p-4 glass-card rounded-xl hover-glow">
                  <div className="text-2xl font-bold text-gradient-primary">5+</div>
                  <div className="text-sm text-text-muted">Years Experience</div>
                </div>
                <div className="text-center p-4 glass-card rounded-xl hover-glow">
                  <div className="text-2xl font-bold text-gradient-primary">3</div>
                  <div className="text-sm text-text-muted">Core Domains</div>
                </div>
                <div className="text-center p-4 glass-card rounded-xl hover-glow">
                  <div className="text-2xl font-bold text-gradient-primary">2</div>
                  <div className="text-sm text-text-muted">Languages</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;