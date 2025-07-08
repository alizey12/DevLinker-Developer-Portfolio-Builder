import React from 'react';
import { NavLink } from 'react-router';
import { FiCode, FiLayout, FiSmartphone, FiZap } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-emerald-950 text-white'>
      {/* Navigation Bar */}
      <nav className='flex items-center justify-between p-6 border-b border-emerald-900'>
  {/* Logo */}
  <div className='text-2xl font-bold'>
    <span className='text-emerald-400'>Dev</span>Portfolio
  </div>

  {/* Buttons */}
  <div className="flex gap-4">
    <NavLink 
      to="/signup" 
      className='px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'
    >
      Get Started
    </NavLink>

    <NavLink 
      to="/login" 
      className='px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'
    >
      Login
    </NavLink>
  </div>
</nav>


      {/* Hero Section */}
      <div className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between'>
        {/* Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
            Hi, I'm <span className='text-emerald-400'>Kinza Fatima</span>
          </h1>
          <p className='text-lg text-emerald-200 mb-8'>
            Front-End Developer specializing in React.js and modern JavaScript. I create beautiful, responsive, and accessible web applications with exceptional user experiences.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <NavLink 
              to="/projects" 
              className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300 text-center'
            >
              View my work
            </NavLink>
            <a href='https://drive.google.com/file/d/1grc_6AjqgpVXwyG1QztYtHoUtznxpdHr/view'
              className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300 text-center'
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Developer Illustration */}
        <div className='md:w-1/2 flex justify-center'>
        <div className='relative'>
            <div className='absolute inset-0 bg-emerald-900/20 rounded-full blur-lg -z-10'></div>
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
        <h2 className='text-3xl font-bold text-center mb-12'>My Technical Expertise</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {[
            {
              title: "React Development",
              icon: <FiCode className="text-emerald-400 text-3xl" />,
              description: "Building dynamic SPAs with React hooks, context API, and modern best practices"
            },
            {
              title: "Responsive UI",
              icon: <FiSmartphone className="text-emerald-400 text-3xl" />,
              description: "Creating mobile-first designs that work flawlessly across all devices"
            },
            {
              title: "Performance Optimization",
              icon: <FiZap className="text-emerald-400 text-3xl" />,
              description: "Fast, efficient code with lazy loading, memoization, and optimized assets"
            },
            {
              title: "UI/UX Principles",
              icon: <FiLayout className="text-emerald-400 text-3xl" />,
              description: "Focus on accessibility, intuitive navigation, and delightful interactions"
            },
            {
              title: "State Management",
              icon: <FiCode className="text-emerald-400 text-3xl" />,
              description: "Redux, Context API, and modern state management solutions"
            },
            {
              title: "API Integration",
              icon: <FiCode className="text-emerald-400 text-3xl" />,
              description: "Connecting frontends to RESTful APIs and GraphQL endpoints"
            }
          ].map((feature, index) => (
            <div key={index} className='bg-emerald-900/50 p-6 rounded-xl hover:bg-emerald-800/50 transition-colors duration-300 border border-emerald-800'>
              <div className='mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-3 text-emerald-400'>{feature.title}</h3>
              <p className='text-emerald-200'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className='py-12 border-t border-emerald-800'>
          <h3 className='text-center text-emerald-300 mb-8'>TECHNOLOGIES I WORK WITH</h3>
          <div className='flex flex-wrap justify-center gap-8 items-center'>
            {['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'GraphQL', 'Framer Motion'].map((tech) => (
              <div key={tech} className='text-xl font-medium text-emerald-200 bg-emerald-900/50 px-4 py-2 rounded-lg'>{tech}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Preview */}
      <div className='bg-emerald-900/30 py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>Featured Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-emerald-950/50 p-8 rounded-xl border border-emerald-800 hover:border-emerald-600 transition-colors'>
              <h3 className='text-xl font-bold text-emerald-100 mb-4'>E-Commerce Platform</h3>
              <p className='text-emerald-300 mb-4'>Full-featured online store with cart functionality and payment integration</p>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Redux', 'Tailwind CSS', 'Stripe API'].map(tag => (
                  <span key={tag} className='text-xs bg-emerald-800/50 text-emerald-300 px-2 py-1 rounded'>
                    #{tag}
                  </span>
                ))}
              </div>
              <NavLink 
                to="/projects" 
                className='inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300 text-sm'
              >
                View Project Details
                <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                </svg>
              </NavLink>
            </div>
            <div className='bg-emerald-950/50 p-8 rounded-xl border border-emerald-800 hover:border-emerald-600 transition-colors'>
              <h3 className='text-xl font-bold text-emerald-100 mb-4'>Task Management App</h3>
              <p className='text-emerald-300 mb-4'>Collaborative project management tool with real-time updates</p>
              <div className='flex flex-wrap gap-2'>
                {['React', 'Firebase', 'Material UI', 'React DnD'].map(tag => (
                  <span key={tag} className='text-xs bg-emerald-800/50 text-emerald-300 px-2 py-1 rounded'>
                    #{tag}
                  </span>
                ))}
              </div>
              <NavLink 
                to="/projects" 
                className='inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300 text-sm'
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

      {/* CTA Section */}
      <div className='container mx-auto px-6 py-20 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Build Something Amazing?</h2>
        <p className='text-xl text-emerald-300 mb-8 max-w-3xl mx-auto'>I'm currently available for freelance work and full-time opportunities.</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <NavLink 
            to="/contact" 
            className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'
          >
            Get In Touch
          </NavLink>
          
           <NavLink 
            className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300'
          >
            View Live Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;