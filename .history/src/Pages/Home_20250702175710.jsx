import React from 'react';

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-emerald-950 text-white'>
      {/* Navigation Bar */}
      <nav className='flex items-center justify-between p-6 border-b border-emerald-900'>
        <div className='text-2xl font-bold'>
          <span className='text-emerald-400'>Div</span>Linker
        </div>
        <button className='px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between'>
        {/* Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
            Connect Your <span className='text-emerald-400'>Divisions</span> with Ease
          </h1>
          <p className='text-lg text-emerald-200 mb-8'>
            DivLinker helps you bridge the gap between different departments, teams, and systems with our powerful integration platform.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
              Start Free Trial
            </button>
            <button className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300'>
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='md:w-1/2 flex justify-center'>
          <img 
            src="https://tse4.mm.bing.net/th/id/OIP.D8eifioEnwIoj9tE-cb-uAAAAA?w=474&h=474&rs=1&pid=ImgDetMain" 
            alt="Team collaboration illustration" 
            className='w-full max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300'
          />
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why Choose DivLinker?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            {
              title: "Seamless Integration",
              description: "Connect all your tools and systems without writing a single line of code."
            },
            {
              title: "Real-time Analytics",
              description: "Get actionable insights from across all your connected platforms."
            },
            {
              title: "Enterprise Security",
              description: "Bank-grade security to keep your data safe and compliant."
            }
          ].map((feature, index) => (
            <div key={index} className='bg-emerald-900 p-6 rounded-xl hover:bg-emerald-800 transition-colors duration-300'>
              <h3 className='text-xl font-semibold mb-3 text-emerald-400'>{feature.title}</h3>
              <p className='text-emerald-200'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;