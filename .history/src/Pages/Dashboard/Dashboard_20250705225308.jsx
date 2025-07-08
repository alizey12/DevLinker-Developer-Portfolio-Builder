import React from 'react';
import { FiHome, FiPieChart, FiBriefcase, FiUser, FiSettings, FiBell, FiSearch } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FaRegFileCode } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';

const Dashboard = () => {
  // Sample data - replace with your actual data
  const stats = [
    { title: "Total Projects", value: "12", icon: <GoProjectSymlink className="text-emerald-400" />, change: "+2 this month" },
    { title: "Skills Mastered", value: "8", icon: <FaRegFileCode className="text-emerald-400" />, change: "+1 this month" },
    { title: "Profile Views", value: "245", icon: <CgProfile className="text-emerald-400" />, change: "+32 this week" },
    { title: "Code Commits", value: "87", icon: <FiPieChart className="text-emerald-400" />, change: "+15 this week" }
  ];

  const recentProjects = [
    { name: "E-Commerce Platform", progress: 85, lastUpdated: "2 days ago" },
    { name: "Portfolio Builder", progress: 100, lastUpdated: "1 week ago" },
    { name: "Task Management App", progress: 45, lastUpdated: "3 days ago" }
  ];

  return (
    <div className="flex h-screen bg-emerald-950 text-emerald-100">
     

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-emerald-900/30 border-b border-emerald-800/50 p-4 flex items-center justify-between">
          <div className="relative w-60">
           
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-emerald-800/30 relative">
              <FiBell className="text-emerald-200" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-emerald-400"></span>
            </button>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border-2 border-emerald-500"
              />
              <span className="ml-2 hidden md:block">Kinza Fatima</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-emerald-800/50 to-emerald-900/70 rounded-xl p-6 mb-8 border border-emerald-700/50">
            <h2 className="text-2xl font-bold mb-2">Welcome back, Kinza!</h2>
            <p className="text-emerald-300 max-w-2xl">Here's what's happening with your developer profile today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-emerald-400">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-emerald-500 mt-1">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-emerald-800/30 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Projects */}
            <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <GoProjectSymlink className="mr-2 text-emerald-400" />
                Recent Projects
              </h3>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-emerald-200 group-hover:text-emerald-100">{project.name}</span>
                      <span className="text-sm text-emerald-500">{project.lastUpdated}</span>
                    </div>
                    <div className="w-full bg-emerald-950/30 h-2 rounded-full">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300 text-sm">
                View all projects
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>

            {/* Skills Progress */}
            <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <FaRegFileCode className="mr-2 text-emerald-400" />
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
                      <span className="text-sm text-emerald-300">{skill.name}</span>
                      <span className="text-sm text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-emerald-950/30 h-2 rounded-full">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300 text-sm">
                View all skills
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;