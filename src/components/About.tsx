import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Lightbulb, label: 'Solutions Created', value: '100+' },
    // { icon: Users, label: 'Happy Clients', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover my journey, passion, and the story behind the code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer ,creating 
                  digital solutions that make a difference. My journey began with a curiosity about 
                  how websites work, which quickly evolved into a deep love for programming and 
                  problem-solving.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in modern web technologies including React, Node.js, and cloud 
                  platforms. I believe in writing clean, maintainable code and creating user 
                  experiences that are both beautiful and functional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while reading about the 
                  latest industry trends.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">What Drives Me</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Creating intuitive user experiences that solve real problems
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Continuous learning and staying updated with emerging technologies
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborating with teams to build scalable and maintainable solutions
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Contributing to the developer community through open source
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right side - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card p-6 rounded-2xl shadow-soft hover-lift text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <stat.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Preview */}
              <motion.div
                variants={itemVariants}
                className="bg-card p-6 rounded-2xl shadow-soft"
              >
                <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Next.js'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}