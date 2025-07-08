import { useState } from 'react';
import { FiMail, FiLock, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { ToastContainer,toast } from 'react-toastify';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  
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
      // Optionally redirect to dashboard or home
      
    } else {
      toast.warning('Invalid email or password.');
    }
  }
  
  return (
    <> 
    <ToastContainer />
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-emerald-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-800/50">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-100 mb-2">Welcome Back</h1>
            <p className="text-emerald-400">Sign in to access your account</p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-emerald-400" />
              </div>
              <input
                              value={loginData.email}
                              onChange={(e)=>setLoginData({...loginData , email: e.target.value})}

                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-emerald-400" />
              </div>
              <input
                type="password"
                value={loginData.password}
                onChange={(e)=>setLoginData({...loginData , password: e.target.value})}

                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiEyeOff className="text-emerald-400 hover:text-emerald-300" />
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded-sm bg-emerald-950/50 border-emerald-700 text-emerald-500 focus:ring-emerald-600"
                />
                <span className="ml-2 text-sm text-emerald-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              onClick={handleLoginSubmit}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-emerald-900/30"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-emerald-400">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-emerald-300 hover:text-emerald-200">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
export default Login;