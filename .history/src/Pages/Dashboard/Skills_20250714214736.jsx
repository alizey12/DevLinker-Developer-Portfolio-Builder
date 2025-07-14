import React, { useContext, useEffect } from 'react';
import { FiCode, FiCpu, FiDatabase, FiExternalLink, FiLayers, FiGitBranch } from 'react-icons/fi';
import { DiReact, DiJavascript1, DiNodejs, DiMongodb, DiSass } from 'react-icons/di';
import { motion , useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../../Context/ThemeContext';

const Skills = () => {
  const { theme, accentColor } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Helper function for theme classes
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-emerald-400/70' : 'bg-emerald-50',
    text: {
      primary: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-800',
      secondary: theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-emerald-800/50 border-emerald-700/50 hover:border-emerald-600/50' 
      : 'bg-white border-emerald-200 hover:border-emerald-300 shadow-lg',
    border: theme === 'dark' ? 'border-emerald-700/50' : 'border-emerald-200'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode className={themeClasses.text.accent} size={24} />,
      skills: [
        { name: "React", level: 90, icon: <DiReact className="text-blue-400" /> },
        { name: "JavaScript", level: 85, icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: "HTML5/CSS3", level: 95, icon: <DiSass className="text-pink-500" /> },
        { name: "Tailwind CSS", level: 80, icon: <FiLayers className="text-cyan-400" /> },
        { name: "Next.js", level: 75, icon: <DiReact className={theme === 'dark' ? "text-gray-100" : "text-gray-800"} /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FiCpu className={themeClasses.text.accent} size={24} />,
      skills: [
        { name: "Node.js", level: 30, icon: <DiNodejs className="text-green-500" /> },
        { name: "Express", level: 30, icon: <FiCode className="text-gray-300" /> },
        { name: "REST APIs", level: 60, icon: <FiGitBranch className="text-red-400" /> }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase className={themeClasses.text.accent} size={24} />,
      skills: [
        { name: "MongoDB", level: 30, icon: <DiMongodb className="text-green-400" /> },
        { name: "Git/GitHub", level: 85, icon: <FiGitBranch className="text-orange-400" /> },
        { name: "VS Code", level: 90, icon: <FiCode className="text-blue-400" /> },
        { name: "Postman", level: 70, icon: <FiCode className="text-amber-500" /> }
      ]
    }
  ];

  // Languages/frameworks for radial chart
  const languages = [
    { name: "JavaScript", value: 35, color: "text-yellow-400" },
    { name: "TypeScript", value: 25, color: "text-blue-500" },
    { name: "HTML/CSS", value: 20, color: "text-pink-500" },
    { name: "Python", value: 5, color: themeClasses.text.accent },
    { name: "Other", value: 5, color: "text-gray-400" }
  ];

  // Radial chart helper functions
  const polarToCartesian = (x, y, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: x + (radius * Math.cos(angleInRadians)),
      y: y + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} py-12 px-4 sm:px-6 lg:px-8`} ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text.secon}`}>My Skills</h1>
          <p className={`text-lg max-w-3xl mx-auto ${themeClasses.text.secondary}`}>
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Radial Chart */}
          <motion.div 
            className={`rounded-2xl p-6 border ${themeClasses.card} hover:shadow-xl transition-shadow duration-300`}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className={`text-xl font-bold mb-6 ${themeClasses.text.primary}`}>Language Breakdown</h2>
            <div className="relative w-64 h-64 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {languages.map((lang, i) => {
                  const angle = (lang.value / 100) * 360;
                  const startAngle = languages.slice(0, i).reduce((acc, l) => acc + (l.value / 100) * 360, 0);
                  return (
                    <motion.path
                      key={lang.name}
                      d={describeArc(50, 50, 40, startAngle, startAngle + angle)}
                      fill="currentColor"
                      className={`${lang.color} opacity-80 hover:opacity-100 transition-opacity`}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className={`text-2xl font-bold ${themeClasses.text.primary}`}>5+</span>
                  <p className={themeClasses.text.accent}>Languages</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {languages.map((lang) => (
                <motion.div 
                  key={lang.name} 
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <div className={`w-3 h-3 rounded-full ${lang.color} mr-2`}></div>
                  <span className={`text-sm ${themeClasses.text.secondary}`}>{lang.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Stats */}
          <motion.div 
            className={`rounded-2xl p-6 border ${themeClasses.card} hover:shadow-xl transition-shadow duration-300`}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className={`text-xl font-bold mb-6 ${themeClasses.text.primary}`}>Experience</h2>
            <div className="space-y-6">
              <motion.div 
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-emerald-700/20' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className={`mb-2 ${themeClasses.text.accent}`}>Years Coding</h3>
                <div className={`text-5xl font-bold ${themeClasses.text.primary}`}>1+</div>
              </motion.div>
              <motion.div 
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-emerald-700/20' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className={`mb-2 ${themeClasses.text.accent}`}>Projects Completed</h3>
                <div className={`text-5xl font-bold ${themeClasses.text.primary}`}>6+</div>
              </motion.div>
              <motion.div 
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-emerald-700/20' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className={`mb-2 ${themeClasses.text.accent}`}>Technologies Used</h3>
                <div className={`text-5xl font-bold ${themeClasses.text.primary}`}>15+</div>
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div 
            className={`rounded-2xl p-6 border ${themeClasses.card} hover:shadow-xl transition-shadow duration-300`}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className={`text-xl font-bold mb-6 ${themeClasses.text.primary}`}>GitHub Activity</h2>
            <div className="flex items-center justify-between mb-4">
              <motion.div 
                className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-emerald-700/20' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className={themeClasses.text.accent}>Repositories</h3>
                <div className={`text-2xl font-bold ${themeClasses.text.primary}`}>24</div>
              </motion.div>
              <motion.div 
                className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-emerald-700/20' : 'bg-gray-100'} hover:bg-opacity-80 transition-colors`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className={themeClasses.text.accent}>Commits (2023)</h3>
                <div className={`text-2xl font-bold ${themeClasses.text.primary}`}>387</div>
              </motion.div>
            </div>
            <motion.div 
              className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-emerald-900/30' : 'bg-gray-200'}`}
              variants={itemVariants}
            >
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className={`h-3 rounded-sm ${i % 5 === 0 ? `bg-${accentColor}-500` : theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-400/50'}`}
                    style={{ opacity: 0.3 + (Math.random() * 0.7) }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 + (Math.random() * 0.7) }}
                    transition={{ delay: i * 0.02, duration: 0.5 }}
                  />
                ))}
              </div>
              <p className={`text-center text-sm mt-2 ${themeClasses.text.secondary}`}>Recent activity</p>
            </motion.div>
            <motion.a 
              href='https://github.com/alizey12' 
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center mt-4 ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')} transition-colors`}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              View GitHub Profile <FiExternalLink className="ml-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Skills by Category */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className={`rounded-2xl overflow-hidden shadow-lg border transition-all hover:shadow-xl ${themeClasses.card}`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`p-6 border-b flex items-center ${themeClasses.border}`}>
                <div className={`mr-3 p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                  {category.icon}
                </div>
                <h2 className={`text-xl font-bold ${themeClasses.text.primary}`}>{category.title}</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className="group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-xl">
                        {skill.icon}
                      </div>
                      <h3 className={`font-medium ${themeClasses.text.primary}`}>{skill.name}</h3>
                    </div>
                    <div className={`w-full h-3 rounded-full ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-200'}`}>
                      <motion.div 
                        className={`h-3 rounded-full bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className={`text-xs ${themeClasses.text.secondary}`}>Proficiency</span>
                      <span className={`text-xs font-medium ${themeClasses.text.accent}`}>{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          className={`mt-12 rounded-2xl p-6 border ${themeClasses.card} hover:shadow-xl transition-shadow duration-300`}
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          <h2 className={`text-xl font-bold mb-6 ${themeClasses.text.primary}`}>Additional Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['Redux', 'Context API', 'Jest', 'React Testing Library', 'Webpack', 'Vite', 'Figma', 'Agile Methodologies', 'JIRA', 'Postman', 'ES6+', 'Responsive Design', 'CSS Grid', 'Flexbox', 'RESTful APIs'].map((skill, i) => (
              <motion.span 
                key={skill}
                className={`px-4 py-2 rounded-full border transition-colors ${theme === 'dark' ? 'bg-gray-700/30 border-gray-600/50 hover:bg-gray-600/50' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.03 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;