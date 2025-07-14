import React, { useState, useEffect, useContext } from 'react';
import { FaUserTag, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../Context/ThemeContext';
import img1 from "../../assets/Leonardo.png";
import { motion, useAnimation } from 'framer-motion'; // ✅ CORRECT

import { useInView } from 'react-intersection-observer';

const Profile = () => {
  const { theme, accentColor } = useContext(ThemeContext);
  const [savedProfile, setSavedProfile] = useState({
    name: 'Kinza Fatima',
    title: 'MERN Stack Developer',
    bio: 'Passionate MERN Stack developer crafting clean and user-focused web apps.',
    website: 'https://kinzadevportfolio.web.app',
  });
  const [formData, setformData] = useState(savedProfile);
  const [isEditing, setIsEditing] = useState(false);
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

  // Theme classes
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-gradient-to-br from-emerald-900 to-emerald-800' : 'bg-emerald-50',
    text: {
      primary: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-800',
      secondary: theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-emerald-800/50 border-emerald-700/50 hover:border-emerald-600/50' 
      : 'bg-white border-emerald-200 hover:border-emerald-300 shadow-lg',
    border: theme === 'dark' ? 'border-emerald-700/50' : 'border-emerald-200',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white`,
      secondary: theme === 'dark' 
        ? 'border border-emerald-600 hover:bg-emerald-700/50 text-emerald-300' 
        : 'border border-emerald-300 hover:bg-emerald-100 text-emerald-700'
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSavedProfile(formData);
    toast.success("Profile updated successfully!");
    localStorage.setItem('profileData', JSON.stringify(formData));
    setIsEditing(false);
  }

  useEffect(() => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setSavedProfile(data);
      setformData(data);
    }
  }, []);

  return (
    <motion.div 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${themeClasses.bg}`}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`text-4xl font-bold mb-2 ${themeClasses.text.primary}`}>Developer Profile</h1>
        <p className={`max-w-2xl mx-auto ${themeClasses.text.secondary}`}>
          Showcase your skills, experience, and personality to the world
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Profile Card */}
        <motion.div 
          className="lg:col-span-1 space-y-6"
          variants={cardVariants}
        >
          <motion.div 
            className={`rounded-2xl p-6 border shadow-lg transition-all duration-500 ${themeClasses.card}`}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={img1}
                  className={`w-40 h-40 rounded-full object-cover border-4 ${theme === 'dark' ? 'border-emerald-700/80' : `border-${accentColor}-200`} shadow-lg transition-transform duration-500 group-hover:scale-105`}
                  alt="Profile"
                />
                <div className={`absolute inset-0 rounded-full border-4 border-transparent group-hover:border-${accentColor}-400/50 transition-all duration-500`}></div>
              </motion.div>
              <h2 className={`mt-6 text-2xl font-bold ${themeClasses.text.primary}`}>{savedProfile.name}</h2>
              <p className={`${themeClasses.text.accent} font-medium`}>{savedProfile.title}</p>
              <p className={`text-center mt-3 ${themeClasses.text.secondary}`}>{savedProfile.bio}</p>
              <a 
                href={savedProfile.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`mt-4 ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')} transition-colors duration-300`}
              >
                {savedProfile.website}
              </a>
            </div>

            {/* Stats */}
            <div className={`mt-8 pt-6 border-t ${themeClasses.border}`}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Skills", value: "12+" },
                  { label: "Projects", value: "5+" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className={`p-4 rounded-xl text-center transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-700/20 hover:bg-emerald-600/30' : 'bg-emerald-100 hover:bg-emerald-200'}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className={`text-sm ${themeClasses.text.secondary}`}>{stat.label}</p>
                    <p className={`text-2xl font-bold ${themeClasses.text.primary}`}>{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`mt-8 pt-6 border-t ${themeClasses.border}`}>
              <h3 className={`text-lg font-semibold mb-4 ${themeClasses.text.primary}`}>Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/kinza-jamshaid-70212a215" },
                  { icon: <SiGmail size={24} />, url: "mailto:alizey121@gmail.com" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors duration-300`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="lg:col-span-2 space-y-6"
          variants={containerVariants}
        >
          {/* About Card */}
          <motion.div 
            className={`rounded-2xl p-6 border shadow-lg transition-all duration-500 ${themeClasses.card}`}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>Professional Details</h2>
              <motion.button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${themeClasses.button.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </motion.button>
            </div>

            {!isEditing ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {[
                  { label: "Role", value: "Front-end Developer" },
                  { label: "Experience", value: "Intermediate" },
                  { label: "Core Skills", value: "React, Tailwind, JavaScript" },
                  { label: "Favorite Framework", value: "React.js" },
                  { label: "Tooling", value: "Vite, Webpack, Git" },
                  { label: "Location", value: "Rawalpindi, Pakistan" },
                  { label: "Availability", value: "Open to Freelance & Collaboration", span: 2 }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={`p-4 rounded-xl transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-700/20 hover:bg-emerald-600/30' : 'bg-emerald-100 hover:bg-emerald-200'} ${item.span === 2 ? 'md:col-span-2' : ''}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <p className={`text-sm mb-1 ${themeClasses.text.accent}`}>{item.label}</p>
                    <p className={`font-medium ${themeClasses.text.primary}`}>{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Full Name", value: formData.name, onChange: (e) => setformData({ ...formData, name: e.target.value }) },
                    { label: "Title", value: formData.title, onChange: (e) => setformData({ ...formData, title: e.target.value }) }
                  ].map((field, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>{field.label}</label>
                      <input
                        value={field.value}
                        onChange={field.onChange}
                        type="text"
                        className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-700/50 border-emerald-600/50 text-emerald-100' : 'bg-white border-emerald-300 text-emerald-800'}`}
                      />
                    </motion.div>
                  ))}
                  <motion.div className="md:col-span-2" variants={itemVariants}>
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setformData({ ...formData, bio: e.target.value })}
                      rows="3"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-700/50 border-emerald-600/50 text-emerald-100' : 'bg-white border-emerald-300 text-emerald-800'}`}
                    ></textarea>
                  </motion.div>
                  <motion.div className="md:col-span-2" variants={itemVariants}>
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Website</label>
                    <input
                      value={formData.website}
                      onChange={(e) => setformData({ ...formData, website: e.target.value })}
                      type="url"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-700/50 border-emerald-600/50 text-emerald-100' : 'bg-white border-emerald-300 text-emerald-800'}`}
                    />
                  </motion.div>
                </div>
                <motion.div 
                  className="flex justify-end space-x-3"
                  variants={itemVariants}
                >
                  <motion.button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${themeClasses.button.secondary}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-lg ${themeClasses.button.primary}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Save Changes
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>

          {/* Badges & Tags */}
          <motion.div 
            className={`rounded-2xl p-6 border shadow-lg transition-all duration-500 ${themeClasses.card}`}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text.primary}`}>Achievements & Skills</h2>
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text.primary}`}>Badges</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript Enthusiast', 'React Specialist'].map((badge, i) => (
                    <motion.span 
                      key={i}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-${accentColor}-600 to-${accentColor}-500 text-white`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaUserTag size={14} /> {badge}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text.primary}`}>Skill Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs'].map((tag, i) => (
                    <motion.span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-700/50 hover:bg-emerald-600/50' : 'bg-emerald-200 hover:bg-emerald-300'} ${themeClasses.text.secondary}`}
                      variants={itemVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} theme={theme} />
    </motion.div>
  );
};

export default Profile;