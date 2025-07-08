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
          Contact Sales
        </button>
      </nav>

      {/* Hero Section */}
      <div className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between'>
        {/* Content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
            Unify Your <span className='text-emerald-400'>Business Ecosystem</span>
          </h1>
          <p className='text-lg text-emerald-200 mb-8'>
            DivLinker's integration platform connects your ERP, CRM, and legacy systems into one cohesive workflow, eliminating data silos and boosting productivity.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
              Request Demo
            </button>
            <button className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300'>
              View Case Studies
            </button>
          </div>
        </div>

        {/* Your original image with transparent effect */}
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

      {/* Features Section */}
      <div className='container mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-center mb-12'>Enterprise-Grade Integration Solutions</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {[
            {
              title: "API Management",
              icon: "🔌",
              description: "Centralized API gateway with monitoring, security, and version control"
            },
            {
              title: "Data Mapping",
              icon: "🗺️",
              description: "Visual interface for complex data transformations between systems"
            },
            {
              title: "Workflow Automation",
              icon: "⚡",
              description: "Orchestrate business processes across multiple applications"
            }
          ].map((feature, index) => (
            <div key={index} className='bg-emerald-900/50 p-6 rounded-xl hover:bg-emerald-800/50 transition-colors duration-300 border border-emerald-800'>
              <div className='text-3xl mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-3 text-emerald-400'>{feature.title}</h3>
              <p className='text-emerald-200'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Integration Partners Section */}
        <div className='py-12 border-t border-emerald-800'>
          <h3 className='text-center text-emerald-300 mb-8'>TRUSTED BY INDUSTRY LEADERS</h3>
          <div className='flex flex-wrap justify-center gap-8 items-center opacity-80'>
            {['Salesforce', 'SAP', 'Microsoft', 'Oracle', 'Workday'].map((partner) => (
              <div key={partner} className='text-2xl font-light text-emerald-200'>{partner}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='bg-emerald-900/30 py-16'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-12'>What Our Customers Say</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-emerald-950/50 p-8 rounded-xl border border-emerald-800'>
              <p className='italic text-emerald-100 mb-4'>"DivLinker reduced our integration development time by 70%, allowing us to focus on core business objectives."</p>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-emerald-700 mr-4'></div>
                <div>
                  <p className='font-medium'>Sarah Chen</p>
                  <p className='text-sm text-emerald-300'>CTO, FinTech Corp</p>
                </div>
              </div>
            </div>
            <div className='bg-emerald-950/50 p-8 rounded-xl border border-emerald-800'>
              <p className='italic text-emerald-100 mb-4'>"The real-time data synchronization eliminated our inventory discrepancies and saved us $250k in the first quarter."</p>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-emerald-700 mr-4'></div>
                <div>
                  <p className='font-medium'>Michael Rodriguez</p>
                  <p className='text-sm text-emerald-300'>Operations Director, RetailCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto px-6 py-20 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Transform Your Integration Strategy?</h2>
        <p className='text-xl text-emerald-300 mb-8 max-w-3xl mx-auto'>Schedule a consultation with our integration specialists to assess your current ecosystem.</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
           nav
          </button>
          <button className='px-8 py-3 border border-emerald-400 hover:bg-emerald-900 rounded-full font-medium transition-colors duration-300'>
            Download Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;