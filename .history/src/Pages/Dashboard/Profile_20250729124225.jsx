import React, { useState, useEffect, useContext } from 'react';
import { FaUserTag, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../Context/ThemeContext';
import img1 from "../../assets/Leonardo.png";
import { motion } from 'framer-motion';

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

  const themeClasses = {
    bg: theme === 'dark' 
      ? 'bg-gradient-to-br from-emerald-950 to-emerald-900' 
      : 'bg-gradient-to-br from-emerald-50 to-white',
    text: {
      primary: theme === 'dark' ? 'text-emerald-50' : 'text-emerald-800',
      secondary: theme === 'dark' ? 'text-emerald-200' : 'text-emerald-600',
      accent: `text-${accentColor}-400`
    },
    card: theme === 'dark' 
      ? 'bg-emerald-900/80 border-emerald-800 hover:bg-emerald-800/70 hover:border-emerald-700' 
      : 'bg-white border-emerald-200 hover:border-emerald-300 shadow-sm',
    border: theme === 'dark' ? 'border-emerald-800' : 'border-emerald-200',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-emerald-700`,
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${themeClasses.bg} transition-colors duration-300`}
    >
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-2 ${themeClasses.text.primary}`}>Developer Profile</h1>
        <p className={`max-w-2xl mx-auto ${themeClasses.text.secondary}`}>
          Showcase your skills, experience, and personality to the world
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl p-6 border transition-all duration-500 shadow-lg hover:shadow-xl ${themeClasses.card}`}
          >
            <div className="flex flex-col items-center">
              <div className="relative group">
                <motion.img
                  src={img1}
                  whileHover={{ scale: 1.05 }}
                  className={`w-40 h-40 rounded-full object-cover border-4 ${theme === 'dark' ? 'border-gray-700/80' : `border-${accentColor}-200`} shadow-lg transition-transform duration-500`}
                  alt="Profile"
                />
                <div className={`absolute inset-0 rounded-full border-4 border-transparent group-hover:border-${accentColor}-400/50 transition-all duration-500`}></div>
              </div>
              <h2 className={`mt-6 text-2xl font-bold ${themeClasses.text.primary}`}>{savedProfile.name}</h2>
              <p className={`${themeClasses.text.accent} font-medium`}>{savedProfile.title}</p>
              <p className={`text-center mt-3 ${themeClasses.text.secondary}`}>{savedProfile.bio}</p>
              <a 
                href={savedProfile.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`mt-4 underline hover:opacity-80 transition-all duration-300 ${themeClasses.text.accent}`}
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
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl text-center transition-all duration-300 shadow hover:shadow-lg ${theme === 'dark' ? 'bg-emerald-800/40 hover:bg-emerald-700/50' : 'bg-emerald-100 hover:bg-emerald-200'}`}
                  >
                    <p className={`text-sm ${themeClasses.text.secondary}`}>{item.label}</p>
                    <p className={`text-2xl font-bold ${themeClasses.text.primary}`}>{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`mt-8 pt-6 border-t ${themeClasses.border}`}>
              <h3 className={`text-lg font-semibold mb-4 ${themeClasses.text.primary}`}>Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <motion.a 
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/kinza-jamshaid-70212a215" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition duration-300 ${themeClasses.text.secondary} hover:${themeClasses.text.accent}`}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2 }}
                  href="mailto:alizey121@gmail.com" 
                  className={`transition duration-300 ${themeClasses.text.secondary} hover:${themeClasses.text.accent}`}
                >
                  <SiGmail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Professional Details */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className={`rounded-2xl p-6 border transition-all duration-500 shadow-lg hover:shadow-xl ${themeClasses.card}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>Professional Details</h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${themeClasses.button.primary}`}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </motion.button>
            </div>

            {!isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    whileHover={{ scale: 1.03 }}
                    className={`p-4 rounded-xl transition-all duration-300 shadow hover:shadow-lg ${theme === 'dark' ? 'bg-emerald-800/40 hover:bg-emerald-700/50' : 'bg-emerald-100 hover:bg-emerald-200'} ${item.span === 2 ? 'md:col-span-2' : ''}`}
                  >
                    <p className={`text-sm mb-1 ${themeClasses.text.accent}`}>{item.label}</p>
                    <p className={`font-medium ${themeClasses.text.primary}`}>{item.value}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Full Name</label>
                    <input
                      value={formData.name}
                      onChange={(e) => setformData({ ...formData, name: e.target.value })}
                      type="text"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-800/30 border-emerald-700 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Title</label>
                    <input
                      value={formData.title}
                      onChange={(e) => setformData({ ...formData, title: e.target.value })}
                      type="text"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-800/30 border-emerald-700 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setformData({ ...formData, bio: e.target.value })}
                      rows="3"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-800/30 border-emerald-700 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Website</label>
                    <input
                      value={formData.website}
                      onChange={(e) => setformData({ ...formData, website: e.target.value })}
                      type="url"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-emerald-800/30 border-emerald-700 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(false)}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${themeClasses.button.secondary}`}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-lg ${themeClasses.button.primary}`}
                  >
                    Save Changes
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Achievements & Skills */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className={`rounded-2xl p-6 border transition-all duration-500 shadow-lg hover:shadow-xl ${themeClasses.card}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text.primary}`}>Achievements & Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text.primary}`}>Badges</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript Enthusiast', 'React Specialist'].map((badge, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-${accentColor}-600 to-${accentColor}-500 text-white shadow-lg`}
                    >
                      <FaUserTag size={14} /> {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text.primary}`}>Skill Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs'].map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-md ${theme === 'dark' ? 'bg-emerald-800/40 hover:bg-emerald-700/50' : 'bg-emerald-100 hover:bg-emerald-200'} ${themeClasses.text.secondary}`}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} theme={theme} />
    </motion.div>
  );
};

export default Profile;