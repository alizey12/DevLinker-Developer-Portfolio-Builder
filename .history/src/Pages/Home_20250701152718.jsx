import React from 'react';
import { NavLink, Link } from 'react-router'; // updated import

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-emerald-950 text-white'>
      {/* Navigation Bar */}
      <nav className='flex items-center justify-between p-6 border-b border-emerald-900'>
        <div className='text-2xl font-bold'>
          <span className='text-emerald-400'>Kinza</span>Dev
        </div>
        <button className='px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
          <NavLink to='login'>Get Started</NavLink>
        </button>
      </nav>

      {/* Hero Section */}
      <div className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between'>
        {/* Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
            Crafting <span className='text-emerald-400'>User-Centric</span> Web Experiences
          </h1>
          <p className='text-lg text-emerald-200 mb-8'>
            I'm Kinza Jamshaid, a Front-end Developer passionate about translating ideas into responsive and interactive web interfaces. I build with modern tools like React.js, Tailwind CSS, and JavaScript to deliver fast, elegant, and accessible websites.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
            <a 
              href='https://github.com/alizey12' >view my work</a>
            </button>
            <button className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300'>
              <a href="https://drive.google.com/file/d/1grc_6AjqgpVXwyG1QztYtHoUtznxpdHr/view?usp=drive_open">View my Resume</a>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative'>
            <div className='absolute inset-0 bg-emerald-900/20 rounded-full blur-lg -z-10'></div>
            <img 
              src="https://tse4.mm.bing.net/th/id/OIP.D8eifioEnwIoj9tE-cb-uAAAAA?w=474&h=474&rs=1&pid=ImgDetMain" 
              alt="Front-end coding illustration"
              className='w-full hover:animate-pulse max-w-xs transition-colors hover:duration-300 md:max-w-sm mix-blend-lighten opacity-90'
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-center mb-12'>What I Offer</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {[
            {
              title: "Responsive Design",
              icon: "📱",
              description: "Ensuring seamless user experience across all devices with mobile-first design."
            },
            {
              title: "Component-Based Architecture",
              icon: "🧩",
              description: "Reusable and modular components built using React and Tailwind CSS."
            },
            {
              title: "Performance Optimization",
              icon: "🚀",
              description: "Fast load times and smooth interactions with optimized front-end code."
            }
          ].map((feature, index) => (
            <div key={index} className='bg-emerald-900/50 p-6 rounded-xl hover:bg-emerald-800/50 transition-colors duration-300 border border-emerald-800'>
              <div className='text-3xl mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-3 text-emerald-400'>{feature.title}</h3>
              <p className='text-emerald-200'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className='py-12 border-t border-emerald-800'>
          <h3 className='text-center text-emerald-300 mb-8'>TOOLS & FRAMEWORKS I WORK WITH</h3>
          <div className='flex flex-wrap justify-center gap-8 items-center opacity-80'>
            {['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'GitHub'].map((tech) => (
              <div key={tech} className='text-2xl font-light text-emerald-200'>{tech}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='bg-emerald-900/30 py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>What Clients Say</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-emerald-950/50 p-8 rounded-xl border border-emerald-800'>
              <p className='italic text-emerald-100 mb-4'>"Kinza’s attention to detail and UI polish took our product to the next level. Highly recommended!"</p>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-emerald-700 mr-4'></div>
                <div>
                  <p className='font-medium'>Zara Ali</p>
                  <p className='text-sm text-emerald-300'>Product Manager, TechSpark</p>
                </div>
              </div>
            </div>
            <div className='bg-emerald-950/50 p-8 rounded-xl border border-emerald-800'>
              <p className='italic text-emerald-100 mb-4'>"Delivered a modern, responsive dashboard with great performance. The animations were a big plus!"</p>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-emerald-700 mr-4'></div>
                <div>
                  <p className='font-medium'>Ahmed Khan</p>
                  <p className='text-sm text-emerald-300'>Founder, DevSync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto px-6 py-20 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Let’s Build Something Beautiful</h2>
        <p className='text-xl text-emerald-300 mb-8 max-w-3xl mx-auto'>Get in touch to start your next project, collaborate, or simply say hello!</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
           <NavLink to='/contact'>Contact Me</NavLink> 
          </button>
          <button className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300'>
            View Portfolio
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
