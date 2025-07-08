import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { NavLink } from 'react-router';

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-emerald-950 text-white">
      {/* Navigation Bar - Consistent with Home page */}
      <nav className='flex items-center justify-between p-6 border-b border-emerald-900'>
        <div className='text-2xl font-bold'>
          <span className='text-emerald-400'>Kinza</span>Dev
        </div>
        <button className='px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-colors duration-300'>
          <NavLink to='/'>Back to Home</NavLink>
        </button>
      </nav>

      {/* Main Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-emerald-400">Get In Touch</h2>
          <p className="text-xl text-emerald-200 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-emerald-900/50 p-8 rounded-xl border border-emerald-800">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-300">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-emerald-200">kinzajmashaid23@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-emerald-200">+92 300 1234567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-emerald-200">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-3 text-emerald-300">Connect with me</h4>
                <div className="flex gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 rounded-full text-sm transition-colors duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-emerald-900/50 p-8 rounded-xl border border-emerald-800">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-300">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-emerald-200 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-emerald-800 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-emerald-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-emerald-800 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-emerald-200 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-emerald-800 border border-emerald-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-colors duration-300"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;