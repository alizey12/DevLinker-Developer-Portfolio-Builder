import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Project = () => {
  // Sample project data
  const reactProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      title: "Portfolio Builder",
      description: "Interactive portfolio generator with customizable templates",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
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
        live: "#",
        code: "#"
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
    <div className="min-h-screen bg-emerald-900/70 backdrop-blur py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-100 mb-4">My Projects</h1>
          <p className="text-lg text-emerald-300 max-w-3xl mx-auto">
            Showcasing my work across different technologies and frameworks
          </p>
        </div>

        {/* React Projects Section */}
        <section className="mb-20 ">
          <h2 className="text-2xl font-bold text-emerald-200 hover:bg mb-8 pb-2  border-b border-emerald-800/50 flex items-center">
            <span className="bg-emerald-600/20 px-3 py-1 rounded-lg mr-3">React</span>
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-emerald-900/50 hover:bg-emerald-900 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-emerald-800/50 transition-all duration-300 hover:shadow-emerald-900/30 hover:border-emerald-600/50 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-100 mb-2">{project.title}</h3>
                  <p className="text-emerald-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-emerald-800/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50"
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
                      className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-emerald-600 text-emerald-300 hover:bg-emerald-900/30 rounded-lg transition-colors"
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
          <h2 className="text-2xl font-bold text-emerald-200 mb-8 pb-2 border-b border-emerald-800/50 flex items-center">
            <span className="bg-amber-600/20 px-3 py-1 rounded-lg mr-3">JavaScript</span>
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jsProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-emerald-900/50 hover:bg-emerald-900 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-emerald-800/50 transition-all duration-300 hover:shadow-emerald-900/30 hover:border-emerald-600/50 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-100 mb-2">{project.title}</h3>
                  <p className="text-emerald-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-amber-800/20 text-amber-300 text-sm rounded-full border border-amber-700/50"
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
                      className="flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-amber-600 text-amber-300 hover:bg-amber-900/20 rounded-lg transition-colors"
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