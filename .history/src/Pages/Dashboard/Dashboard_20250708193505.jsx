import React, { useContext } from 'react';
import { FiPieChart, FiBell, FiSearch } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FaRegFileCode } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import { ThemeContext } from '../../Context/ThemeContext';

const Dashboard = () => {
  const { theme, accentColor } = useContext(ThemeContext);

  // Theme classes
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
    text: {
      primary: theme === 'dark' ? 'text-gray-100' : 'text-gray-800',
      secondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50' 
      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm',
    border: theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'
  };

  // Sample data
  const stats = [
    { 
      title: "Total Projects", 
      value: "12", 
      icon: <GoProjectSymlink className={themeClasses.text.accent} />, 
      change: "+2 this month" 
    },
    { 
      title: "Skills Mastered", 
      value: "8", 
      icon: <FaRegFileCode className={themeClasses.text.accent} />, 
      change: "+1 this month" 
    },
    { 
      title: "Profile Views", 
      value: "245", 
      icon: <CgProfile className={themeClasses.text.accent} />, 
      change: "+32 this week" 
    },
    { 
      title: "Code Commits", 
      value: "87", 
      icon: <FiPieChart className={themeClasses.text.accent} />, 
      change: "+15 this week" 
    }
  ];

  const recentProjects = [
    { name: "E-Commerce Platform", progress: 85, lastUpdated: "2 days ago" },
    { name: "Portfolio Builder", progress: 100, lastUpdated: "1 week ago" },
    { name: "Task Management App", progress: 45, lastUpdated: "3 days ago" }
  ];

  return (
    <div className="p-6">
      {/* Welcome Banner */}
      <div className={`rounded-xl p-6 mb-8 border ${
        theme === 'dark' 
          ? `bg-gradient-to-r from-gray-800/50 to-gray-900/70 border-gray-700/50`
          : `bg-gradient-to-r from-${accentColor}-100 to-${accentColor}-50 border-${accentColor}-200`
      }`}>
        <h2 className={`text-2xl font-bold mb-2 ${themeClasses.text.primary}`}>
          Welcome back, Kinza!
        </h2>
        <p className={themeClasses.text.secondary}>
          Here's what's happening with your developer profile today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`rounded-xl p-6 border transition-all ${themeClasses.card}`}>
            <div className="flex justify-between">
              <div>
                <p className={`text-sm ${themeClasses.text.accent}`}>{stat.title}</p>
                <p className={`text-2xl font-bold mt-1 ${themeClasses.text.primary}`}>{stat.value}</p>
                <p className={`text-xs mt-1 ${themeClasses.text.secondary}`}>{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className={`rounded-xl p-6 border ${themeClasses.card}`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center ${themeClasses.text.primary}`}>
            <GoProjectSymlink className={`mr-2 ${themeClasses.text.accent}`} />
            Recent Projects
          </h3>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-1">
                  <span className={`font-medium group-hover:${themeClasses.text.accent} ${themeClasses.text.primary}`}>
                    {project.name}
                  </span>
                  <span className={`text-sm ${themeClasses.text.secondary}`}>{project.lastUpdated}</span>
                </div>
                <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600`} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className={`inline-flex items-center mt-4 text-sm ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')}`}>
            View all projects
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>

        {/* Skills Progress */}
        <div className={`rounded-xl p-6 border ${themeClasses.card}`}>
          <h3 className={`text-lg font-bold mb-4 flex items-center ${themeClasses.text.primary}`}>
            <FaRegFileCode className={`mr-2 ${themeClasses.text.accent}`} />
            Skills Progress
          </h3>
          <div className="space-y-4">
            {[
              { name: "React", level: 85 },
              { name: "JavaScript", level: 90 },
              { name: "Node.js", level: 75 },
              { name: "Tailwind CSS", level: 80 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${themeClasses.text.primary}`}>{skill.name}</span>
                  <span className={`text-sm ${themeClasses.text.accent}`}>{skill.level}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className={`inline-flex items-center mt-4 text-sm ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')}`}>
            View all skills
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;