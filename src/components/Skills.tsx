import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, 
  Server, 
  TestTube, 
  Globe,
  Code,
  Database,
  Wrench,
  Cloud
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'React.js', level: 88 },
        { name: 'Redux', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 80 },
        { name: 'React Router', level: 85 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'Mongoose', level: 78 },
        { name: 'REST APIs', level: 88 },
        { name: 'JWT Auth', level: 75 },
        { name: 'Passport.js', level: 70 },
      ]
    },
    {
      title: 'Testing & Tools',
      icon: TestTube,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Postman', level: 85 },
        { name: 'Jest', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'NPM/Yarn', level: 85 },
        { name: 'Webpack', level: 70 },
        { name: 'Vite', level: 80 },
      ]
    },
    {
      title: 'Other',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'OAuth2.0', level: 75 },
        { name: 'Google Sign-In', level: 80 },
        { name: 'Responsive Design', level: 92 },
        { name: 'PWA Basics', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 80 },
        { name: 'GitHub Pages', level: 85 },
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-20">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card p-6 rounded-2xl shadow-soft hover-lift"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              I'm constantly learning and exploring new technologies to stay current with industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Learning', 'CI/CD', 'GraphQL', 'Docker', 'AWS' , "Web3"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    item === 'Learning' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}