import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FiCode, FiLayout, FiSmartphone, FiZap } from 'react-icons/fi';
import { ThemeContext } from '../../src/Context/ThemeContext';

const Home = () => {
  const { theme, accentColor } = useContext(ThemeContext);

  // Updated Theme classes with emerald scheme (no gray)
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-emerald-950' : 'bg-emerald-50',
    text: {
      primary: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-900',
      secondary: theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-emerald-900/60 border-emerald-800 hover:border-emerald-600' 
      : 'bg-white border-emerald-200 hover:border-emerald-300 shadow-sm',
    border: theme === 'dark' ? 'border-emerald-800' : 'border-emerald-200',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white`,
      secondary: theme === 'dark' 
        ? 'border border-emerald-700 hover:bg-emerald-800 text-emerald-200' 
        : 'border border-emerald-300 hover:bg-emerald-100 text-emerald-700'
    }
  };

  return (
    <div className={`w-full min-h-screen ${themeClasses.bg}`}>
      {/* Navigation Bar */}
      <nav className={`flex items-center justify-between p-6 border-b ${themeClasses.border}`}>
        <div className='text-2xl font-bold'>
          <span className={themeClasses.text.accent}>Dev</span>Portfolio
        </div>
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
      <div className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between'>
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
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative'>
            <div className={`absolute inset-0 rounded-full blur-lg -z-10 ${theme === 'dark' ? 'bg-emerald-900/40' : 'bg-emerald-100/50'}`}></div>
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
          {[ /* skills omitted for brevity */ ]}
        </div>

        {/* Technologies Section */}
        <div className={`py-12 border-t ${themeClasses.border}`}>
          <h3 className={`text-center mb-8 ${themeClasses.text.secondary}`}>TECHNOLOGIES I WORK WITH</h3>
          <div className='flex flex-wrap justify-center gap-8 items-center'>
            {[ 'React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'GraphQL', 'Framer Motion' ].map((tech) => (
              <div key={tech} className={`text-xl font-medium px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-emerald-900/50 text-emerald-100' : 'bg-emerald-100 text-emerald-800'}`}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Preview */}
      <div className={`py-16 ${theme === 'dark' ? 'bg-emerald-900/30' : 'bg-emerald-100'}`}>
        <div className='container mx-auto px-6'>
          <h2 className={`text-3xl font-bold text-center mb-12 ${themeClasses.text.primary}`}>Featured Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[ /* projects omitted for brevity */ ]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
