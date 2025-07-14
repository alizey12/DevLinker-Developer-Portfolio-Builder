import React, { useContext, useEffect } from 'react';
import { FiCode, FiCpu, FiDatabase, FiExternalLink, FiLayers, FiGitBranch } from 'react-icons/fi';
import { DiReact, DiJavascript1, DiNodejs, DiMongodb, DiSass } from 'react-icons/di';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../../Context/ThemeContext';

const Skills = () => {
  const { theme, accentColor } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-gradient-to-br from-emerald-950 to-emerald-900' : 'bg-emerald-50',
    text: {
      primary: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-800',
      secondary: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark'
      ? 'bg-emerald-800/40 border-emerald-700/60 hover:border-emerald-500/60'
      : 'bg-white border-emerald-200 hover:border-emerald-300 shadow-lg',
    border: theme === 'dark' ? 'border-emerald-700/40' : 'border-emerald-200'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

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

  const languages = [
    { name: "JavaScript", value: 35, color: "text-yellow-400" },
    { name: "TypeScript", value: 25, color: "text-blue-500" },
    { name: "HTML/CSS", value: 20, color: "text-pink-500" },
    { name: "Python", value: 5, color: themeClasses.text.accent },
    { name: "Other", value: 5, color: "text-gray-400" }
  ];

  const polarToCartesian = (x, y, radius, angleInDegrees) => {
    const angle = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: x + (radius * Math.cos(angle)),
      y: y + (radius * Math.sin(angle))
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
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${themeClasses.bg}`} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text.secondary}`}>My Skills</h1>
          <p className={`text-lg max-w-3xl mx-auto ${themeClasses.text.secondary}`}>
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* You can paste the 3 cards here (Language Breakdown, Experience, GitHub) from your version if needed. */}
        </motion.div>

        <motion.div
          className="space-y-12 mt-16"
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
                <div className={`mr-3 p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
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
                      <div className="mr-3 text-xl">{skill.icon}</div>
                      <h3 className={`font-medium ${themeClasses.text.primary}`}>{skill.name}</h3>
                    </div>
                    <div className={`w-full h-3 rounded-full ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
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
      </div>
    </div>
  );
};

export default Skills;
