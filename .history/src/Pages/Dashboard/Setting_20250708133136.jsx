import React, { useState, useEffect } from 'react';
import { FiUser, FiSun, FiMoon, FiMail, FiLock, FiGlobe, FiBell, FiCreditCard } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

const Settings = () => {
  // State for theme preferences
  const { theme, toggleTheme } = useContext();


  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('accentColor') || 'emerald';
  });

  const [uiDensity, setUiDensity] = useState(() => {
    return localStorage.getItem('uiDensity') || 'comfortable';
  });

  // Apply theme changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply accent color changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', `var(--color-${accentColor}-500)`);
    root.style.setProperty('--color-primary-light', `var(--color-${accentColor}-400)`);
    root.style.setProperty('--color-primary-dark', `var(--color-${accentColor}-600)`);
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
      if (localStorage.getItem('themePreference') === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    } else {
      setTheme(selectedTheme);
    }
    localStorage.setItem('themePreference', selectedTheme);
  };

  const accentColors = [
    { name: 'emerald', color: 'bg-emerald-500' },
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'rose', color: 'bg-rose-500' },
    { name: 'amber', color: 'bg-amber-500' },
    { name: 'indigo', color: 'bg-indigo-500' }
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-emerald-950/80 to-emerald-900/90">
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
            
            <div className="space-y-6">
              {/* Theme Selection */}
              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => handleThemeChange('light')}
                    className={`py-2 px-3 rounded-lg flex items-center justify-center transition-all
                      ${theme === 'light' ? 'bg-primary/20 border border-primary/50' : 'bg-emerald-800/50 hover:bg-emerald-700/50'}`}
                  >
                    <FiSun className="mr-2" />
                    Light
                  </button>
                  <button 
                    onClick={() => handleThemeChange('dark')}
                    className={`py-2 px-3 rounded-lg flex items-center justify-center transition-all
                      ${theme === 'dark' ? 'bg-primary/20 border border-primary/50' : 'bg-emerald-800/50 hover:bg-emerald-700/50'}`}
                  >
                    <FiMoon className="mr-2" />
                    Dark
                  </button>
                  <button 
                    onClick={() => handleThemeChange('system')}
                    className={`py-2 px-3 rounded-lg flex items-center justify-center transition-all
                      ${localStorage.getItem('themePreference') === 'system' ? 'bg-primary/20 border border-primary/50' : 'bg-emerald-800/50 hover:bg-emerald-700/50'}`}
                  >
                    <div className="flex items-center">
                      <FiSun className="mr-1" />
                      <FiMoon className="ml-1" />
                    </div>
                    <span className="ml-2">System</span>
                  </button>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Accent Color</label>
                <div className="flex flex-wrap gap-2">
                  {accentColors.map(({ name, color }) => (
                    <button
                      key={name}
                      onClick={() => setAccentColor(name)}
                      className={`w-8 h-8 rounded-full ${color} border-2 transition-all
                        ${accentColor === name ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}
                      aria-label={`${name} accent color`}
                    />
                  ))}
                </div>
              </div>

              {/* UI Density */}
              <div>
                <label htmlFor="uiDensity" className="block text-sm font-medium text-emerald-300 mb-2">
                  UI Density
                </label>
                <select 
                  id="uiDensity"
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

          {/* Account Settings */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiUser className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Account Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className="text-sm text-emerald-300">Username</span>
                <span className="text-emerald-100 font-medium">kinzafatima</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className="text-sm text-emerald-300">Email</span>
                <span className="text-emerald-100 font-medium">kinza@example.com</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-emerald-300">Member Since</span>
                <span className="text-emerald-100 font-medium">Jan 2023</span>
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
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className="text-sm text-emerald-300">Password</span>
                <span className="text-emerald-400">••••••••</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-emerald-300">Two-Factor Authentication</span>
                <span className="text-emerald-400">Disabled</span>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-emerald-100 rounded-lg transition-all border border-primary/20">
                Change Password
              </button>
              <button className="w-full py-2 px-4 bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 rounded-lg transition-all border border-amber-600/20">
                Enable 2FA
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
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="block text-sm text-emerald-300">Email Notifications</span>
                  <span className="text-xs text-emerald-500">Receive important updates via email</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-emerald-950/70 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/30"></div>
                </label>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="block text-sm text-emerald-300">Push Notifications</span>
                  <span className="text-xs text-emerald-500">Get real-time alerts on your device</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-emerald-950/70 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary/30"></div>
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
                <label htmlFor="language" className="block text-sm font-medium text-emerald-300 mb-2">
                  Language
                </label>
                <select 
                  id="language"
                  className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-emerald-300 mb-2">
                  Timezone
                </label>
                <select 
                  id="timezone"
                  className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option>(UTC) London</option>
                  <option>(UTC+05:00) Pakistan</option>
                  <option>(UTC-05:00) New York</option>
                  <option>(UTC+01:00) Berlin</option>
                </select>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-800/50 hover:border-emerald-600/50 transition-all">
            <div className="flex items-center mb-4">
              <FiCreditCard className="text-primary mr-3" />
              <h2 className="text-lg font-semibold text-emerald-100">Billing</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className="text-sm text-emerald-300">Plan</span>
                <span className="text-emerald-100 font-medium">Pro ($15/month)</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-emerald-300">Next Billing Date</span>
                <span className="text-emerald-100 font-medium">May 15, 2023</span>
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-emerald-100 rounded-lg transition-all border border-primary/20">
                Update Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 bg-rose-900/20 backdrop-blur-sm rounded-xl p-6 border border-rose-800/50">
          <h2 className="text-lg font-semibold text-rose-100 mb-4">Danger Zone</h2>
          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-rose-800/50 hover:bg-rose-700/50 text-rose-100 rounded-lg transition-all flex items-center justify-between">
              <span>Deactivate Account</span>
              <span className="text-xs opacity-70">Temporarily disable your account</span>
            </button>
            <button className="w-full py-2 px-4 bg-rose-900/70 hover:bg-rose-800/50 text-rose-100 rounded-lg transition-all flex items-center justify-between">
              <span>Delete Account</span>
              <span className="text-xs opacity-70">Permanently remove all data</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;