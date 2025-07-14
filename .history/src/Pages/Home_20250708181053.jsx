import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FiCode, FiLayout, FiSmartphone, FiZap } from 'react-icons/fi';
import { ThemeContext } from '../../src/Context/ThemeContext';

const Home = () => {
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
    border: theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white`,
      secondary: theme === 'dark' 
        ? 'border border-gray-600 hover:bg-gray-700/50 text-gray-300' 
        : 'border border-gray-300 hover:bg-gray-100 text-gray-700'
    }
  };

  return (
    <div className={`w-full min-h-screen ${themeClasses.bg} text-${theme === 'dark' ? 'white' : 'gray-800'}`}>
      {/* Navigation Bar */}
      <nav className={`flex items-center justify-between p-6 border-b ${themeClasses.border}`}>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <span className={themeClasses.text.accent}>Dev</span>Portfolio
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <NavLink 
            to="/contact" 
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${themeClasses.button.primary}`}
          >
            Hire me
          </NavLink>

          <NavLink 
            to="/login" 
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${themeClasses.button.primary}`}
          >
            Login
          </NavLink>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between`}>
        {/* Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${themeClasses.text.primary}`}>
            Hi, I'm <span className={themeClasses.text.accent}>Kinza Fatima</span>
          </h1>
          <p className={`text-lg mb-8 ${themeClasses.text.secondary}`}>
            Front-End Developer specializing in React.js and modern JavaScript. I create beautiful, responsive, and accessible web applications with exceptional user experiences.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <NavLink 
              to="/projects" 
              className={`px-8 py-3 rounded-full font-medium transition-colors duration-300 text-center ${themeClasses.button.primary}`}
            >
              View my work
            </NavLink>
            <a href='https://drive.google.com/file/d/1grc_6AjqgpVXwyG1QztYtHoUtznxpdHr/view'
              className={`px-8 py-3 rounded-full font-medium transition-colors duration-300 text-center ${themeClasses.button.secondary}`}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Developer Illustration */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative'>
            <div className={`absolute inset-0 rounded-full blur-lg -z-10 ${theme === 'dark' ? 'bg-gray-800/20' : 'bg-gray-200/50'}`}></div>
            <img 
              src="https://tse4.mm.bing.net/th/id/OIP.D8eifioEnwIoj9tE-cb-uAAAAA?w=474&h=474&rs=1&pid=ImgDetMain" 
              alt="Business integration illustration"
              className='w-full max-w-xs md:max-w-sm mix-blend-lighten opacity-90'
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='container mx-auto px-6 py-16'>
        <h2 className={`text-3xl font-bold text-center mb-12 ${themeClasses.text.primary}`}>My Technical Expertise</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {[
            {
              title: "React Development",
              icon: <FiCode className={`text-3xl ${themeClasses.text.accent}`} />,
              description: "Building dynamic SPAs with React hooks, context API, and modern best practices"
            },
            {
              title: "Responsive UI",
              icon: <FiSmartphone className={`text-3xl ${themeClasses.text.accent}`} />,
              description: "Creating mobile-first designs that work flawlessly across all devices"
            },
            {
              title: "Performance Optimization",
              icon: <FiZap className={`text-3xl ${themeClasses.text.accent}`} />,
              description: "Fast, efficient code with lazy loading, memoization, and optimized assets"
            },
            {
              title: "UI/UX Principles",
              icon: <FiLayout className={`text-3xl ${themeClasses.text.accent}`} />,
              description: "Focus on accessibility, intuitive navigation, and delightful interactions"
            },
            {
              title: "State Management",
              icon: <FiCode className={`text-3xl ${themeClasses.text.accent}`} />,
              description: "Redux, Context API, and modern state management solutions"
            },
            {
              title: "API Integration",
              icon: <FiCode className={`text-3xl ${themeClasses.text.accent}`} />,
              description: "Connecting frontends to RESTful APIs and GraphQL endpoints"
            }
          ].map((feature, index) => (
            <div key={index} className={`p-6 rounded-xl transition-colors duration-300 border ${themeClasses.card}`}>
              <div className='mb-4'>{feature.icon}</div>
              <h3 className={`text-xl font-semibold mb-3 ${themeClasses.text.accent}`}>{feature.title}</h3>
              <p className={themeClasses.text.secondary}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className={`py-12 border-t ${themeClasses.border}`}>
          <h3 className={`text-center mb-8 ${themeClasses.text.secondary}`}>TECHNOLOGIES I WORK WITH</h3>
          <div className='flex flex-wrap justify-center gap-8 items-center'>
            {['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'GraphQL', 'Framer Motion'].map((tech) => (
              <div key={tech} className={`text-xl font-medium px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Preview */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
        <div className='container mx-auto px-6'>
          <h2 className={`text-3xl font-bold text-center mb-12 ${themeClasses.text.primary}`}>Featured Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className={`p-8 rounded-xl border transition-colors ${themeClasses.card}`}>
              <h3 className={`text-xl font-bold mb-4 ${themeClasses.text.primary}`}>E-Commerce Platform</h3>
              <p className={`mb-4 ${themeClasses.text.secondary}`}>Full-featured online store with cart functionality and payment integration</p>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Redux', 'Tailwind CSS', 'Stripe API'].map(tag => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                    #{tag}
                  </span>
                ))}
              </div>
              <NavLink 
                to="/projects" 
                className={`inline-flex items-center mt-4 text-sm ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')}`}
              >
                View Project Details
                <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                </svg>
              </NavLink>
            </div>
            <div className={`p-8 rounded-xl border transition-colors ${themeClasses.card}`}>
              <h3 className={`text-xl font-bold mb-4 ${themeClasses.text.primary}`}>Task Management App</h3>
              <p className={`mb-4 ${themeClasses.text.secondary}`}>Collaborative project management tool with real-time updates</p>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Firebase', 'Material UI', 'React DnD'].map(tag => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                    #{tag}
                  </span>
                ))}
              </div>
              <NavLink 
                to="/projects" 
                className={`inline-flex items-center mt-4 text-sm ${themeClasses.text.accent} hover:${themeClasses.text.accent.replace('text', 'text-opacity-80')}`}
              >
                View Project Details
                <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;