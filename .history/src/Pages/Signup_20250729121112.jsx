import React, { useState, useContext } from 'react';
import { FiUser, FiMail, FiMapPin, FiLock, FiEyeOff } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import
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
      primary: `bg-${accentColor}-600 hover:bg-${accentColor}-800 ${theme === 'dark' ? 'text-white hover:bg-emerald-300' : 'text-emerald-700 hover:bg-emerald-600 hover:text-emerald-100'} transition-all duration-300 transform hover:scale-105`,
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
    setTimeout(() => {
      navigate('/login', { replace: true }); // Added replace option
    }, 2000);
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
            {/* ... (rest of your form inputs remain the same) ... */}

            <div className={`text-center text-sm ${themeClasses.text.secondary}`}>
              Already have an account?{' '}
              <Link 
                to="/login" 
                className={`font-medium text-${accentColor}-500 hover:text-${accentColor}-400`}
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;