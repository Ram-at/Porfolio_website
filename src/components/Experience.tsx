import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: ' Full Stack Developer',
      company: 'Student',
      location: 'Rewa , Madhya Pradesh',
      duration: '2022 - Present',
      type: 'Full-time',
      description: [
        'Led a team of 5 developers in building scalable web applications using React, Node.js, and MongoDB',
        'Implemented CI/CD pipelines that reduced deployment time by 60%',
        'Mentored junior developers and conducted code reviews to maintain high code quality',
        'Collaborated with UX/UI designers to create intuitive user interfaces'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'TypeScript'],
      achievements: [
        'Increased application performance by 40%',
        'Led successful migration to microservices architecture',
        'Implemented real-time features serving 10K+ concurrent users'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      duration: '2021 - 2022',
      type: 'Full-time',
      description: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Built responsive web applications with React and integrated with RESTful APIs',
        'Optimized database queries resulting in 50% faster load times',
        'Participated in agile development process and sprint planning'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Redux', 'Tailwind CSS'],
      achievements: [
        'Delivered 8 projects on time and within budget',
        'Reduced bug reports by 30% through comprehensive testing',
        'Improved user engagement by 25% with UX enhancements'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      location: 'New York, NY',
      duration: '2020 - 2021',
      type: 'Full-time',
      description: [
        'Created pixel-perfect, responsive websites from design mockups',
        'Implemented interactive features using vanilla JavaScript and jQuery',
        'Collaborated with backend developers to integrate frontend with APIs',
        'Ensured cross-browser compatibility and optimal performance'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'SASS'],
      achievements: [
        'Successfully delivered 20+ client websites',
        'Achieved 95+ PageSpeed scores on all projects',
        'Reduced development time by 20% with component library'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Marketing Co.',
      location: 'Boston, MA',
      duration: '2019 - 2020',
      type: 'Full-time',
      description: [
        'Assisted in developing and maintaining company websites and landing pages',
        'Learned modern web development practices and version control with Git',
        'Collaborated with marketing team to implement tracking and analytics',
        'Participated in code reviews and team knowledge sharing sessions'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Git'],
      achievements: [
        'Completed comprehensive web development training program',
        'Contributed to 15+ successful marketing campaigns',
        'Maintained 99.9% website uptime'
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.duration}`}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-medium z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-6 rounded-2xl shadow-soft hover-lift"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {exp.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-success">
                            <span className="inline-block w-1 h-1 bg-success rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero inline-block"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}