import React, { useState, useContext } from 'react';
import { FiMail, FiLock, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeContext } from '../Context/ThemeContext';

const Login = () => {
  const { theme, accentColor } = useContext(ThemeContext);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
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
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-500 ${theme === 'dark' ? 'text-white hover:bg-emerald-00' : 'text-emerald-300 hover:text-emerald-800'} transition-all duration-300 transform hover:scale-105`,
    }
  };

  function handleLoginSubmit(e) {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('profileData'));
  
    if (!savedUser) {
      toast.error('No user found. Please sign up.');
      return;
    }
  
    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      toast.success('Login successful!');
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      toast.warning('Invalid email or password.');
    }
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex items-center justify-center p-4`}>
      <ToastContainer />
      <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-lg border ${themeClasses.card}`}>
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${themeClasses.text.primary}`}>Welcome Back</h1>
            <p className={themeClasses.text.secondary}>Sign in to access your account</p>
          </div>

          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className={themeClasses.text.secondary} />
              </div>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                placeholder="Email address"
                className={`w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-all ${themeClasses.input}`}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className={themeClasses.text.secondary} />
              </div>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="Password"
                className={`w-full pl-10 pr-12 py-3 rounded-lg focus:ring-2 focus:ring-${accentColor}-500 focus:border-transparent transition-all ${themeClasses.input}`}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiEyeOff className={`${themeClasses.text.secondary} hover:text-opacity-80`} />
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className={`rounded-sm ${theme === 'dark' ? 'bg-emerald-800/40 border-emerald-700' : 'bg-emerald-50 border-emerald-300'} text-${accentColor}-600 focus:ring-${accentColor}-500`}
                />
                <span className={`ml-2 text-sm ${themeClasses.text.secondary}`}>Remember me</span>
              </label>
              <a href="#" className={`text-sm ${themeClasses.text.accent} hover:text-opacity-80`}>Forgot password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all shadow-lg ${themeClasses.button.primary}`}
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <div className={`text-center text-sm ${themeClasses.text.secondary}`}>
              Don't have an account?{' '}
              <a href="/signup" className={`font-medium ${themeClasses.text.accent} hover:text-opacity-80`}>
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
