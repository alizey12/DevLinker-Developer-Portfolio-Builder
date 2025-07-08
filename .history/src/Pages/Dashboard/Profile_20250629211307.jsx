import React, { useState, useEffect } from 'react';
import { FaUserTag, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from "../../assets/Leonardo.png";

const Profile = () => {
  const [savedProfile, setSavedProfile] = useState({
    name: 'Kinza Fatima',
    title: 'MERN Stack Developer',
    bio: 'Passionate MERN Stack developer crafting clean and user-focused web apps.',
    website: 'https://kinzadevportfolio.web.app',
  });

  const [formData, setformData] = useState(savedProfile);
  const [isEditing, setIsEditing] = useState(false);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">Developer Profile</h1>
        <p className="text-emerald-700 max-w-2xl mx-auto">Showcase your skills, experience, and personality to the world</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-emerald-900/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg transition-all duration-500 hover:shadow-emerald-950 hover:bg-emerald-700 hover:border-emerald-600/50">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <img
                  src={img1}
                  className="w-40 h-40 rounded-full object-cover border-4 border-emerald-700/80 shadow-lg transition-transform duration-500 group-hover:scale-105"
                  alt="Profile"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-emerald-400/50 transition-all duration-500"></div>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-emerald-100">{savedProfile.name}</h2>
              <p className="text-emerald-200 font-medium">{savedProfile.title}</p>
              <p className="text-gray-300 text-center mt-3">{savedProfile.bio}</p>
              <a 
                href={savedProfile.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                {savedProfile.website}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 pt-6 border-t  border-emerald-800/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-950/50 p-4 rounded-xl text-center transition-all duration-300 hover:bg-emerald-900/70">
                  <p className="text-emerald-100 text-sm">Skills</p>
                  <p className="text-2xl font-bold text-white">12+</p>
                </div>
                <div className="bg-emerald-950/50 p-4 rounded-xl text-center transition-all duration-300 hover:bg-emerald-900/70">
                  <p className="text-emerald-100 text-sm">Projects</p>
                  <p className="text-2xl font-bold text-white">5+</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-emerald-800/50">
              <h3 className="text-lg font-semibold text-emerald-100 mb-4">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/kinza-jamshaid-70212a215" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:alizey121@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110"
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
          <div className="bg-emerald-900/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg transition-all duration-500 hover:shadow-emerald-900/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-emerald-100">Professional Details</h2>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-emerald-100 rounded-lg transition-all duration-300"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {!isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Role</p>
                  <p className="text-lg font-medium text-emerald-200">Front-end Developer</p>
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Experience</p>
                  <p className="text-lg font-medium text-emerald-200">Intermediate</p>
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Core Skills</p>
                  <p className="text-lg font-medium text-emerald-200">React, Tailwind, JavaScript</p>
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Favorite Framework</p>
                  <p className="text-lg font-medium text-emerald-200">React.js</p>
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Tooling</p>
                  <p className="text-lg font-medium text-emerald-200">Vite, Webpack, Git</p>
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Location</p>
                  <p className="text-lg font-medium text-emerald-200">Rawalpindi, Pakistan</p>
                </div>
                <div className="md:col-span-2 bg-emerald-950/30 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/50">
                  <p className="text-emerald-400 text-sm mb-1">Availability</p>
                  <p className="text-lg font-medium text-emerald-200">Open to Freelance & Collaboration</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-emerald-300 text-sm font-medium mb-1">Full Name</label>
                    <input
                      value={formData.name}
                      onChange={(e) => setformData({ ...formData, name: e.target.value })}
                      type="text"
                      className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-300 text-sm font-medium mb-1">Title</label>
                    <input
                      value={formData.title}
                      onChange={(e) => setformData({ ...formData, title: e.target.value })}
                      type="text"
                      className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-emerald-300 text-sm font-medium mb-1">Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setformData({ ...formData, bio: e.target.value })}
                      rows="3"
                      className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-emerald-300 text-sm font-medium mb-1">Website</label>
                    <input
                      value={formData.website}
                      onChange={(e) => setformData({ ...formData, website: e.target.value })}
                      type="url"
                      className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 border border-emerald-700 text-emerald-300 hover:bg-emerald-900/50 rounded-lg transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/30"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Badges & Tags */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg transition-all duration-500 hover:shadow-emerald-900/30">
            <h2 className="text-2xl font-bold text-emerald-100 mb-6">Achievements & Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-emerald-200 mb-3">Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-700 to-emerald-600 text-emerald-100 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                    <FaUserTag size={14} /> JavaScript Enthusiast
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-700 to-emerald-600 text-emerald-100 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                    <FaUserTag size={14} /> React Specialist
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-200 mb-3">Skill Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm transition-all duration-300 hover:bg-emerald-700 hover:text-emerald-100"
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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Profile;