import React, { useState } from 'react'
import { FiUser, FiMail,FiMapPin, FiLock, FiEyeOff } from 'react-icons/fi';
import { SlUserFemale } from "react-icons/sl";

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    location: '',
  });

function handleSubmit(e) {
  e.preventDefault();
  localStorage.setItem('profileData', JSON.stringify(form));
if (form === ) {
  <
}
  console.log(form)
}

  return (
    <div>


    <div className="min-h-screen bg-emerald-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-emerald-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-800/50">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-100 mb-2">Create Account</h1>
            <p className="text-emerald-400">Get started with your free account</p>
          </div>

          <form className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-emerald-400" />
              </div>
              <input
                type="text"
                value={form.name}
                onChange={(e)=>setForm({...form,name: e.target.value})}
     
                placeholder="Full name"
                className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-emerald-400" />
              </div>
              <input
                type="email"
                value={form.email}
                onChange={(e)=>setForm({...form,email: e.target.value})}
     
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
                value={form.password}
                onChange={(e)=>setForm({...form, password: e.target.value})}
     
                placeholder="Create password"
                className="w-full pl-10 pr-12 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FiEyeOff className="text-emerald-400" />
              </div>
            </div>
             {/* Gender Input */}
             <div className="space-y-4">
  {/* Gender Radio Input */}
  <div className="flex items-center space-x-4">
    <div className="flex items-center">
      <input
        id="male"
        name="gender"
        type="radio"
        value={form.gender}
        onChange={(e)=>setForm({...form, gender: e.target.value})}
     
        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 bg-emerald-950/50"
      />
      <label htmlFor="male" className="ml-2 block text-sm text-emerald-300">
        Male
      </label>
    </div>
    <div className="flex items-center">
      <input
        id="female"
        name="gender"
        type="radio"
        value={form.gender}
        onChange={(e)=>setForm({...form,gender: e.target.value})}
     
        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 bg-emerald-950/50"
      />
      <label htmlFor="female" className="ml-2 block text-sm text-emerald-300">
        Female
      </label>
    </div>
  </div>

  

  {/* Location Input */}
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FiMapPin className="text-emerald-400" />
    </div>
    <input
      type="text"
      value={form.location}
      onChange={(e)=>setForm({...form,location: e.target.value})}
      placeholder="Location"
      className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
    />
  </div>
</div>

            {/* Terms Checkbox */}
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 rounded-sm bg-emerald-950/50 border-emerald-700 text-emerald-500 focus:ring-emerald-600"
              />
              <span className="ml-2 text-sm text-emerald-300">
                I agree to the <a href="#" className="text-emerald-400 hover:underline">Terms</a> and <a href="#" className="text-emerald-400 hover:underline">Privacy Policy</a>
              </span>
            </label>

            {/* Sign Up Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-emerald-900/30"
            >
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-emerald-400">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-emerald-300 hover:text-emerald-200">
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
