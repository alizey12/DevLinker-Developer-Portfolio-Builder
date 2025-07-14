import React, { useState, useEffect } from 'react';
import { FiUser, FiSun, FiMoon, FiMail, FiLock, FiGlobe, FiBell, FiCreditCard } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

const Settings = () => {
  // State for theme preferences
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme, default to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('accentColor') || 'emerald';
  });

  const [uiDensity, setUiDensity] = useState(() => {
    return localStorage.getItem('uiDensity') || 'comfortable';
  });

  // Apply theme changes to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply accent color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', `var(--color-${accentColor}-500)`);
    document.documentElement.style.setProperty('--color-primary-light', `var(--color-${accentColor}-400)`);
    document.documentElement.style.setProperty('--color-primary-dark', `var(--color-${accentColor}-600)`);
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  // Apply UI density changes
  useEffect(() => {
    document.documentElement.setAttribute('data-density', uiDensity);
    localStorage.setItem('uiDensity', uiDensity);
  }, [uiDensity]);

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    } else {
      setTheme(selectedTheme);
    }
    // Store the user's preference (even if it's 'system')
    localStorage.setItem('themePreference', selectedTheme);
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <IoSettingsOutline className="text-primary text-2xl mr-3" />
          <h1 className="text-2xl font-bold text-emerald-100">Settings</h1>
        </div>

        {/* Settings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Appearance Card */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiSun className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              {/* Theme Selection */}
              <div>
                <label className="block text-sm text-emerald-300 mb-2">Theme</label>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleThemeChange('light')}
                    className={`flex-1 py-2 px-3 ${theme === 'light' ? 'bg-primary/20 border border-primary/50' : 'bg-emerald-800/50 hover:bg-emerald-700/50'} text-emerald-100 rounded-lg flex items-center justify-center`}
                  >
                    <FiSun className="mr-2" />
                    Light
                  </button>
                  <button 
                    onClick={() => handleThemeChange('dark')}
                    className={`flex-1 py-2 px-3 ${theme === 'dark' ? 'bg-primary/20 border border-primary/50' : 'bg-emerald-800/50 hover:bg-emerald-700/50'} text-emerald-100 rounded-lg flex items-center justify-center`}
                  >
                    <FiMoon className="mr-2" />
                    Dark
                  </button>
                  <button 
                    onClick={() => handleThemeChange('system')}
                    className={`flex-1 py-2 px-3 ${localStorage.getItem('themePreference') === 'system' ? 'bg-primary/20 border border-primary/50' : 'bg-emerald-800/50 hover:bg-emerald-700/50'} text-emerald-100 rounded-lg flex items-center justify-center`}
                  >
                    <FiSun className="mr-2" />
                    <FiMoon className="mr-2" />
                    System
                  </button>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <label className="block text-sm text-emerald-300 mb-2">Accent Color</label>
                <div className="flex space-x-2">
                  {['emerald', 'blue', 'purple', 'rose'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setAccentColor(color)}
                      className={`w-8 h-8 rounded-full bg-${color}-500 border-2 ${accentColor === color ? 'border-white' : 'border-transparent'}`}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>

              {/* UI Density */}
              <div>
                <label className="block text-sm text-emerald-300 mb-2">UI Density</label>
                <select 
                  value={uiDensity}
                  onChange={(e) => setUiDensity(e.target.value)}
                  className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="comfortable">Comfortable</option>
                  <option value="compact">Compact</option>
                  <option value="spacious">Spacious</option>
                </select>
              </div>
            </div>
          </div>

          {/* Other cards remain the same */}
          {/* Account Settings */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiUser className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Account Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Username</span>
                <span className="text-emerald-100">kinzafatima</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Email</span>
                <span className="text-emerald-100">kinza@example.com</span>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-emerald-100 rounded-lg transition-all border border-primary/20">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiLock className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Security</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Password</span>
                <span className="text-emerald-400">••••••••</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">2FA</span>
                <span className="text-emerald-400">Disabled</span>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-emerald-100 rounded-lg transition-all border border-primary/20">
                Change Password
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiBell className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-emerald-950/70 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/30"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-300">Push Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-emerald-950/70 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/30"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiGlobe className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-emerald-300 mb-2">Language</label>
                <select className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-emerald-300 mb-2">Timezone</label>
                <select className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>(UTC) London</option>
                  <option>(UTC+05:00) Pakistan</option>
                  <option>(UTC-05:00) New York</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-rose-900/20 backdrop-blur-sm rounded-xl p-6 border border-rose-800/50">
          <h2 className="text-lg font-semibold text-rose-100 mb-4">Danger Zone</h2>
          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-rose-800/50 hover:bg-rose-700/50 text-rose-100 rounded-lg transition-all">
              Deactivate Account
            </button>
            <button className="w-full py-2 px-4 bg-rose-900/70 hover:bg-rose-800/50 text-rose-100 rounded-lg transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;