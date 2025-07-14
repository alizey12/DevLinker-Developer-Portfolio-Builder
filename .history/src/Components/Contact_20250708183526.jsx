import React, { useContext } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const Contact = () => {
  const { theme, accentColor } = useContext(ThemeContext);

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
    text: {
      primary: theme === 'dark' ? 'text-gray-100' : 'text-gray-800',
      secondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-gray-800/50 border-gray-700/50' 
      : 'bg-white border-gray-200 shadow-sm',
    input: theme === 'dark' 
      ? 'bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400' 
      : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white`,
      secondary: theme === 'dark' 
        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
    },
    border: theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
  };

  return (
    <div className={`w-full min-h-screen ${themeClasses.bg} ${themeClasses.text.primary}`}>
      {/* Navigation Bar */}
      <nav className={`flex items-center justify-between p-6 border-b ${themeClasses.border}`}>
        <div className='text-2xl font-bold'>
          <span className={themeClasses.text.accent}>Kinza</span>Dev
        </div>
        <button className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${themeClasses.button.primary}`}>
          <NavLink to='/'>Back to Home</NavLink>
        </button>
      </nav>

      {/* Main Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-4 ${themeClasses.text.accent}`}>Get In Touch</h2>
          <p className={`text-xl text-center mb-12 max-w-2xl mx-auto ${themeClasses.text.secondary}`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`p-8 rounded-xl border ${themeClasses.card}`}>
              <h3 className={`text-2xl font-semibold mb-6 ${themeClasses.text.accent}`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className={`${themeClasses.text.accent} mt-1 flex-shrink-0`} size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className={themeClasses.text.secondary}>kinzajmashaid23@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className={`${themeClasses.text.accent} mt-1 flex-shrink-0`} size={20} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className={themeClasses.text.secondary}>+92 345 9744642</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className={`${themeClasses.text.accent} mt-1 flex-shrink-0`} size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className={themeClasses.text.secondary}>Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className={`font-medium mb-3 ${themeClasses.text.accent}`}>Connect with me</h4>
                <div className="flex gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                    <a 
                      key={platform}
                      href="https://github.com/alizey12/" 
                      className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${themeClasses.button.secondary}`}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-xl border ${themeClasses.card}`}>
              <h3 className={`text-2xl font-semibold mb-6 ${themeClasses.text.accent}`}>Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 ${themeClasses.text.secondary}`}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${accentColor}-500 ${themeClasses.input}`}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block mb-2 ${themeClasses.text.secondary}`}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${accentColor}-500 ${themeClasses.input}`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block mb-2 ${themeClasses.text.secondary}`}>Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${accentColor}-500 ${themeClasses.input}`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${themeClasses.button.primary}`}
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