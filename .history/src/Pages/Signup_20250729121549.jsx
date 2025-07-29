import React, { useState, useContext } from 'react';
import { FiUser, FiMail, FiMapPin, FiLock, FiEyeOff } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Define theme classes with fallbacks for dynamic accent colors
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
      ? 'bg-emerald-900/40 border-emerald-800/50 text-emerald-100 placeholder-emerald-300 focus:ring-emerald-500' 
      : 'bg-white border-emerald-200 text-emerald-800 placeholder-emerald-500 focus:ring-emerald-500',
    button: {
      primary: theme === 'dark' 
        ? `bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white` 
        : `bg-${accentColor}-500 hover:bg-${accentColor}-600 text-white`,
    },
    radio: theme === 'dark' 
      ? 'border-emerald-700 bg-emerald-800/40' 
      : 'border-emerald-300 bg-emerald-50',
    checkbox: theme === 'dark' 
      ? 'bg-emerald-800/40 border-emerald-700' 
      : 'bg-emerald-50 border-emerald-300'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, gender, location } = form;
    
    if (!name || !email || !password || !gender || !location) {
      toast.error('Please fill all the fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    toast.success("Account created successfully!");
    localStorage.setItem('profileData', JSON.stringify(form));
    
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex items-center justify-center p-4 transition-colors duration-300`}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      
      <div className={`w-full max-w-md rounded-2xl overflow-hidden border ${themeClasses.card} transition-all duration-300`}>
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${themeClasses.text.primary}`}>Create Account</h1>
            <p className={themeClasses.text.secondary}>Get started with your free account</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className={themeClasses.text.secondary} />
              </div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                placeholder="Full name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent transition-all ${themeClasses.input}`}
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className={themeClasses.text.secondary} />
              </div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="Email address"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent transition-all ${themeClasses.input}`}
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className={themeClasses.text.secondary} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                placeholder="Create password"
                className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:border-transparent transition-all ${themeClasses.input}`}
                required
                minLength="6"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                <FiEyeOff className={themeClasses.text.secondary} />
              </button>
            </div>

            {/* Gender Selection */}
            <div className="space-y-3">
              <p className={`text-sm font-medium ${themeClasses.text.secondary}`}>Gender</p>
              <div className="flex items-center space-x-4">
                {['male', 'female', 'other'].map((gender) => (
                  <label key={gender} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={form.gender === gender}
                      onChange={(e) => setForm({...form, gender: e.target.value})}
                      className={`h-4 w-4 text-${accentColor}-600 focus:ring-${accentColor}-500 ${themeClasses.radio}`}
                      required
                    />
                    <span className={`capitalize ${themeClasses.text.secondary}`}>
                      {gender}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className={themeClasses.text.secondary} />
              </div>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({...form, location: e.target.value})}
                placeholder="Location"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent transition-all ${themeClasses.input}`}
                required
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className={`mt-1 rounded ${themeClasses.checkbox} text-${accentColor}-600 focus:ring-${accentColor}-500`}
                required
              />
              <span className={`ml-2 text-sm ${themeClasses.text.secondary}`}>
                I agree to the <Link to="/terms" className={`text-${accentColor}-500 hover:underline`}>Terms</Link> and <Link to="/privacy" className={`text-${accentColor}-500 hover:underline`}>Privacy Policy</Link>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg ${themeClasses.button.primary}`}
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className={`text-center text-sm ${themeClasses.text.secondary}`}>
              Already have an account?{' '}
              <Link 
                to="/login" 
                className={`font-medium text-${accentColor}-500 hover:text-${accentColor}-400 hover:underline`}
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