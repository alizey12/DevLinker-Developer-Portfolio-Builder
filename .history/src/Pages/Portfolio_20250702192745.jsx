// import React from 'react'
// import { useParams } from 'react-router'
// const Portfolio = () => {
//     const ParamsData = useParams();
//     console.log(ParamsData.username)

//   return (
//     <div>
//       <h1>portfolio :{useParams.id} </h1>
//     </div>
//   )
// }

// export default Portfolio
import React from 'react';
import { FiGithub, FiExternalLink, FiFigma } from 'react-icons/fi';
import { DiReact, DiNodejs, DiMongodb } from 'react-icons/di';

const Portfolio = () => {
  // Sample projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart functionality, product filtering, and secure checkout process.",
      tags: ["React", "Redux", "Node.js", "Stripe API"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#",
        design: "#"
      }
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and real-time updates.",
      tags: ["React", "Firebase", "Material UI", "React DnD"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
      }
    },
    {
      title: "Portfolio Builder",
      description: "Interactive portfolio generator with customizable templates and theme options.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      links: {
        live: "#",
        code: "#"
      }
    }
  ];

  const skills = [
    { name: "React", icon: <DiReact className="text-blue-400 text-3xl" />, level: 90 },
    { name: "JavaScript", icon: <DiNodejs className="text-yellow-400 text-3xl" />, level: 95 },
    { name: "Node.js", icon: <DiNodejs className="text-green-500 text-3xl" />, level: 80 },
    { name: "MongoDB", icon: <DiMongodb className="text-green-400 text-3xl" />, level: 75 },
    { name: "Tailwind CSS", icon: <FiFigma className="text-cyan-400 text-3xl" />, level: 85 },
    { name: "Figma", icon: <FiFigma className="text-purple-400 text-3xl" />, level: 70 }
  ];

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-emerald-400">Kinza Fatima</span>'s Portfolio
        </h1>
        <p className="text-xl text-emerald-300 max-w-2xl mx-auto mb-8">
          Front-End Developer specializing in React.js and modern web technologies
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300">
            Contact Me
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-emerald-900/50 rounded-xl overflow-hidden shadow-lg border border-emerald-800/50 hover:border-emerald-600/50 transition-all duration-300">
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
                      className="px-3 py-1 bg-emerald-800/30 text-emerald-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                  {project.links.code && (
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-emerald-600 text-emerald-300 hover:bg-emerald-900/30 rounded-lg transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.links.design && (
                    <a 
                      href={project.links.design} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-emerald-600 text-emerald-300 hover:bg-emerald-900/30 rounded-lg transition-colors"
                    >
                      <FiFigma className="mr-2" /> Design
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-emerald-900/30 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-emerald-900/50 rounded-xl border border-emerald-800/50 hover:border-emerald-600/50 transition-colors">
                <div className="mb-3">{skill.icon}</div>
                <h3 className="font-medium text-emerald-100 mb-2">{skill.name}</h3>
                <div className="w-full bg-emerald-950/30 h-2 rounded-full">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-emerald-900/50 rounded-xl p-8 border border-emerald-800/50">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-emerald-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-emerald-300 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;