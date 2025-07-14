import React, { useState, useEffect, useContext } from 'react';
import { FaUserTag, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../Context/ThemeContext';
import img1 from "../../assets/Leonardo.png";

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
      : 'bg-white border-emerald-200 hover:border-emerald-300 shadow-sm',
    border: theme === 'dark' ? 'border-emerald-700/50' : 'border-emerald-200',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white`,
      secondary: theme === 'dark' 
        ? 'border border-emerald-600 hover:bg-gray-700/50 text-gray-300' 
        : 'border border-emerald-300 hover:bg-gray-100 text-gray-700'
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
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${themeClasses.bg}`}>
      {/* Profile Header */}
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-2 ${themeClasses.text.primary}`}>Developer Profile</h1>
        <p className={`max-w-2xl mx-auto ${themeClasses.text.secondary}`}>
          Showcase your skills, experience, and personality to the world
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className={`rounded-2xl p-6 border shadow-lg transition-all duration-500 ${themeClasses.card}`}>
            <div className="flex flex-col items-center">
              <div className="relative group">
                <img
                  src={img1}
                  className={`w-40 h-40 rounded-full object-cover border-4 ${theme === 'dark' ? 'border-gray-700/80' : `border-${accentColor}-200`} shadow-lg transition-transform duration-500 group-hover:scale-105`}
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
                className={`mt-4 ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')} transition-colors duration-300`}
              >
                {savedProfile.website}
              </a>
            </div>

            {/* Stats */}
            <div className={`mt-8 pt-6 border-t ${themeClasses.border}`}>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl text-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/20 hover:bg-gray-600/30' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <p className={`text-sm ${themeClasses.text.secondary}`}>Skills</p>
                  <p className={`text-2xl font-bold ${themeClasses.text.primary}`}>12+</p>
                </div>
                <div className={`p-4 rounded-xl text-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/20 hover:bg-gray-600/30' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <p className={`text-sm ${themeClasses.text.secondary}`}>Projects</p>
                  <p className={`text-2xl font-bold ${themeClasses.text.primary}`}>5+</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`mt-8 pt-6 border-t ${themeClasses.border}`}>
              <h3 className={`text-lg font-semibold mb-4 ${themeClasses.text.primary}`}>Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/kinza-jamshaid-70212a215" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors duration-300 transform hover:scale-110`}
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:alizey121@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors duration-300 transform hover:scale-110`}
                >
                  <SiGmail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Card */}
          <div className={`rounded-2xl p-6 border shadow-lg transition-all duration-500 ${themeClasses.card}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${themeClasses.text.primary}`}>Professional Details</h2>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${themeClasses.button.primary}`}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
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
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/20 hover:bg-gray-600/30' : 'bg-gray-100 hover:bg-gray-200'} ${item.span === 2 ? 'md:col-span-2' : ''}`}
                  >
                    <p className={`text-sm mb-1 ${themeClasses.text.accent}`}>{item.label}</p>
                    <p className={`font-medium ${themeClasses.text.primary}`}>{item.value}</p>
                  </div>
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
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600/50 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Title</label>
                    <input
                      value={formData.title}
                      onChange={(e) => setformData({ ...formData, title: e.target.value })}
                      type="text"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600/50 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setformData({ ...formData, bio: e.target.value })}
                      rows="3"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600/50 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-1 ${themeClasses.text.secondary}`}>Website</label>
                    <input
                      value={formData.website}
                      onChange={(e) => setformData({ ...formData, website: e.target.value })}
                      type="url"
                      className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:${accentColor}-500 focus:border-transparent transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/50 border-gray-600/50 text-gray-100' : 'bg-white border-gray-300 text-gray-800'}`}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${themeClasses.button.secondary}`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-lg ${themeClasses.button.primary}`}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Badges & Tags */}
          <div className={`rounded-2xl p-6 border shadow-lg transition-all duration-500 ${themeClasses.card}`}>
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.text.primary}`}>Achievements & Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text.primary}`}>Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-${accentColor-600} to-${accentColor}-500 text-white`}>
                    <FaUserTag size={14} /> JavaScript Enthusiast
                  </span>
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-${accentColor-600} to-${accentColor}-500 text-white`}>
                    <FaUserTag size={14} /> React Specialist
                  </span>
                </div>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text.primary}`}>Skill Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs'].map((tag) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-200 hover:bg-gray-300'} ${themeClasses.text.secondary}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} theme={theme} />
    </div>
  );
};

export default Profile;