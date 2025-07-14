import React, { useContext } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ThemeContext } from '../../Context/ThemeContext';

const Project = () => {
  const { theme, accentColor } = useContext(ThemeContext);

  // Theme classes
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-emerald-400/70' : 'bg-gray-50',
    text: {
      primary: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-800',
      secondary: theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-emerald-800/50 border-emerald-700/50 hover:border-emerald-600/50' 
      : 'bg-white border-gray-200 hover:border-emerald-300 shadow-sm',
    sectionBorder: theme === 'dark' ? 'border-emerald-700/50' : 'border-emerald-200',
    tag: {
      react: theme === 'dark' 
        ? 'bg-emerald-800/30 text-emerald-300 border-emerald-700/50' 
        : 'bg-emerald-100 text-emerald-800 border-emerald-200',
      js: theme === 'dark' 
        ? 'bg-amber-800/20 text-amber-300 border-amber-700/50' 
        : 'bg-amber-100 text-amber-800 border-amber-200'
    },
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white`,
      secondary: theme === 'dark' 
        ? 'border border-gray-600 hover:bg-gray-700/50 text-gray-300' 
        : 'border border-gray-300 hover:bg-gray-100 text-gray-700'
    }
  };

  // Sample project data
  const reactProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "https://ecommerce-website-virid-eta.vercel.app/",
        code: "https://github.com/alizey12/ecommerce-website.git"
      }
    },
    {
      title: "Task Notes App",
      description: "Collaborative project management tool with real-time updates",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "https://task-tracker-app-five-red.vercel.app/",
        code: "https://github.com/alizey12/Task-Tracker-app.git"
      }
    },
    {
      title: "Portfolio Builder",
      description: "Interactive portfolio generator with customizable templates",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "https://dev-linker-developer-portfolio-buil.vercel.app/",
        code: "https://github.com/alizey12/DevLinker-Developer-Portfolio-Builder.git"
      }
    }
  ];

  const jsProjects = [
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with geolocation",
      tags: ["JavaScript", "API Integration", "Local Storage"],
      image: "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "https://weather-app-using-js-eight.vercel.app/",
        code: "https://github.com/alizey12/weather-app.git"
      }
    },
    {
      title: "Recipe Finder",
      description: "Search and save your favorite recipes with nutritional info",
      tags: ["JavaScript", "Edamam API", "CSS3"],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      title: "Budget Tracker",
      description: "Offline-capable expense tracker with visual analytics",
      tags: ["JavaScript", "IndexedDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
      }
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${themeClasses.bg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${themeClasses.text.primary}`}>My Projects</h1>
          <p className={`text-lg max-w-3xl mx-auto ${themeClasses.text.secondary}`}>
            Showcasing my work across different technologies and frameworks
          </p>
        </div>

        {/* React Projects Section */}
        <section className="mb-20">
          <h2 className={`text-2xl font-bold mb-8 pb-2 border-b ${themeClasses.sectionBorder} flex items-center`}>
            <span className={`px-3 py-1 rounded-lg mr-3 ${theme === 'dark' ? 'bg-emerald-600/20' : 'bg-emerald-100'}`}>
              React
            </span>
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactProjects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${themeClasses.card}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${themeClasses.text.primary}`}>{project.title}</h3>
                  <p className={`mb-4 ${themeClasses.text.secondary}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 text-sm rounded-full border ${themeClasses.tag.react}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${themeClasses.button.secondary}`}
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${themeClasses.button.secondary}`}
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JavaScript Projects Section */}
        <section>
          <h2 className={`text-2xl font-bold mb-8 pb-2 border-b ${themeClasses.sectionBorder} flex items-center`}>
            <span className={`px-3 py-1 rounded-lg mr-3 ${theme === 'dark' ? 'bg-amber-600/20' : 'bg-amber-100'}`}>
              JavaScript
            </span>
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jsProjects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${themeClasses.card}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${themeClasses.text.primary}`}>{project.title}</h3>
                  <p className={`mb-4 ${themeClasses.text.secondary}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 text-sm rounded-full border ${themeClasses.tag.js}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-amber-500 hover:bg-amber-400 text-white'}`}
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${theme === 'dark' ? 'border border-amber-600 text-amber-300 hover:bg-amber-900/20' : 'border border-amber-500 text-amber-600 hover:bg-amber-50'}`}
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;