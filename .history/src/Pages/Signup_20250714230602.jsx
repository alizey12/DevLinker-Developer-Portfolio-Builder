import React, { useState, useContext } from 'react';
import { FiUser, FiMail, FiMapPin, FiLock, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeContext } from '../Context/ThemeContext';

const Signup = () => {
  const { theme, accentColor } = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    location: '',
  });
  const navigate = useNavigate();

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-emerald-950' : 'bg-emerald-50',
    text: {
      primary: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-800',
      secondary: theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600',
      accent: `text-${accentColor}-500`
    },
    card: theme === 'dark' 
      ? 'bg-emerald-900/50 border-emerald-800/50' 
      : 'bg-white border-emerald-200 shadow-sm',
    input: theme === 'dark' 
      ? 'bg-emerald-900/40 border-emerald-800/50 text-emerald-100 placeholder-emerald-300' 
      : 'bg-white border-emerald-200 text-emerald-800 placeholder-emerald-500',
    button: {
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white`,
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, gender, location } = form;
    if (!name || !email || !password || !gender || !location) {
      toast.error('Fill all the fields');
      return;
    } 
    toast.success("Your account is created");
    setTimeout(() => navigate('/login'), 2000);
    localStorage.setItem('profileData', JSON.stringify(form));
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex items-center justify-center p-4`}>
      <ToastContainer />
      <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-lg border ${themeClasses.card}`}>
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${themeClasses.text.primary}`}>Create Account</h1>
            <p className={themeClasses.text.secondary}>Get started with your free account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className={themeClasses.text.secondary} />
              </div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                placeholder="Full name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-all ${themeClasses.input}`}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className={themeClasses.text.secondary} />
              </div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="Email address"
                className={`w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-all ${themeClasses.input}`}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className={themeClasses.text.secondary} />
              </div>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                placeholder="Create password"
                className={`w-full pl-10 pr-12 py-3 rounded-lg focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-all ${themeClasses.input}`}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FiEyeOff className={themeClasses.text.secondary} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === 'male'}
                    onChange={(e) => setForm({...form, gender: e.target.value})}
                    className={`h-4 w-4 text-${accentColor}-600 focus:ring-${accentColor}-500 ${theme === 'dark' ? 'border-emerald-700 bg-emerald-800/40' : 'border-emerald-300 bg-emerald-50'}`}
                  />
                  <span className={`ml-2 text-sm ${themeClasses.text.secondary}`}>Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === 'female'}
                    onChange={(e) => setForm({...form, gender: e.target.value})}
                    className={`h-4 w-4 text-${accentColor}-600 focus:ring-${accentColor}-500 ${theme === 'dark' ? 'border-emerald-700 bg-emerald-800/40' : 'border-emerald-300 bg-emerald-50'}`}
                  />
                  <span className={`ml-2 text-sm ${themeClasses.text.secondary}`}>Female</span>
                </label>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className={themeClasses.text.secondary} />
                </div>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({...form, location: e.target.value})}
                  placeholder="Location"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-all ${themeClasses.input}`}
                />
              </div>
            </div>

            <label className="flex items-start">
              <input
                type="checkbox"
                className={`mt-1 rounded-sm ${theme === 'dark' ? 'bg-emerald-800/40 border-emerald-700' : 'bg-emerald-50 border-emerald-300'} text-${accentColor}-600 focus:ring-${accentColor}-500`}
              />
              <span className={`ml-2 text-sm ${themeClasses.text.secondary}`}>
                I agree to the <a href="#" className={`text-${accentColor}-500 hover:underline`}>Terms</a> and <a href="#" className={`text-${accentColor}-500 hover:underline`}>Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all shadow-lg ${themeClasses.button.primary}`}
            >
              Create Account
            </button>

            <div className={`text-center text-sm ${themeClasses.text.secondary}`}>
              Already have an account?{' '}
              <a href="/login" className={`font-medium text-${accentColor}-500 hover:text-${accentColor}-400`}>
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
