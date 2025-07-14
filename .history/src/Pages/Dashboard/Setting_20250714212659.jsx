import React, { useState, useEffect, useContext } from 'react';
import { FiUser, FiSun, FiMoon, FiMail, FiLock, FiGlobe, FiBell, FiCreditCard } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { ThemeContext } from '../../Context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);

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
  }, [setTheme]);

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

  // Card styling classes based on theme
  const cardClasses = `
    rounded-xl p-6 border transition-all
    ${theme === 'dark' 
      ? 'bg-emerald-900/50 border-emerald-800/50 hover:border-emerald-600/50' 
      : 'bg-white border-gray-200 hover:border-emerald-300 shadow-sm'}
  `;

  // Text color classes based on theme
  const textPrimary = theme === 'dark' ? 'text-emerald-500' : 'text-gray-800';
  const textSecondary = theme === 'dark' ? 'text-emerald-300' : 'text-gray-600';
  const textMuted = theme === 'dark' ? 'text-emerald-500' : 'text-gray-400';

  // Button styling classes
  const primaryButtonClasses = `
    w-full mt-4 py-2 px-4 rounded-lg transition-all border
    ${theme === 'dark' 
      ? 'bg-emerald-400/10 hover:bg-primary/20 text-emerald-400 border-primary/20' 
      : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-emerald-200'}
  `;

  const secondaryButtonClasses = `
    w-full py-2 px-4 rounded-lg transition-all border
    ${theme === 'dark' 
      ? 'bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 border-amber-600/20' 
      : 'bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-200'}
  `;

  const dangerButtonClasses = `
    w-full py-2 px-4 rounded-lg transition-all flex items-center justify-between
    ${theme === 'dark' 
      ? 'bg-rose-800/50 hover:bg-rose-700/50 text-rose-100' 
      : 'bg-rose-100 hover:bg-rose-200 text-rose-800'}
  `;

  const themeButtonClasses = (selectedTheme) => `
    py-2 px-3 rounded-lg flex items-center justify-center transition-all
    ${theme === selectedTheme || 
      (selectedTheme === 'system' && localStorage.getItem('themePreference') === 'system')
      ? theme === 'dark' 
        ? 'bg-primary/20 border border-primary/50' 
        : 'bg-emerald-300 border border-emerald-300'
      : theme === 'dark' 
        ? 'bg-emerald-800/50 hover:bg-emerald-700/50' 
        : 'bg-gray-100 hover:bg-gray-200'}
  `;

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-emerald-950/80 to-emerald-900/90' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <IoSettingsOutline className={`text-2xl mr-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
          <h1 className={`text-2xl font-bold ${textPrimary}`}>Settings</h1>
        </div>

        {/* Settings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Appearance Card */}
          <div className={cardClasses}>
            <div className="flex items-center mb-4">
              {theme === 'dark' ? (
                <FiMoon className="text-primary mr-3" />
              ) : (
                <FiSun className="text-primary mr-3" />
              )}
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Appearance</h2>
            </div>
            
            <div className="space-y-6">
              {/* Theme Selection */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => handleThemeChange('light')}
                    className={themeButtonClasses('light')}
                  >
                    <FiSun className="mr-2" />
                    Light
                  </button>
                  <button 
                    onClick={() => handleThemeChange('dark')}
                    className={themeButtonClasses('dark')}
                  >
                    <FiMoon className="mr-2" />
                    Dark
                  </button>
                  <button 
                    onClick={() => handleThemeChange('system')}
                    className={themeButtonClasses('system')}
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
                <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Accent Color</label>
                <div className="flex flex-wrap gap-2">
                  {accentColors.map(({ name, color }) => (
                    <button
                      key={name}
                      onClick={() => setAccentColor(name)}
                      className={`w-8 h-8 rounded-full ${color} border-2 transition-all
                        ${accentColor === name 
                          ? theme === 'dark' 
                            ? 'border-white scale-110' 
                            : 'border-gray-800 scale-110'
                          : 'border-transparent hover:scale-105'}`}
                      aria-label={`${name} accent color`}
                    />
                  ))}
                </div>
              </div>

              {/* UI Density */}
              <div>
                <label htmlFor="uiDensity" className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                  UI Density
                </label>
                <select 
                  id="uiDensity"
                  value={uiDensity}
                  onChange={(e) => setUiDensity(e.target.value)}
                  className={`w-full rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-emerald-950/50 border-emerald-800/50 text-emerald-100' 
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
                >
                  <option value="comfortable">Comfortable</option>
                  <option value="compact">Compact</option>
                  <option value="spacious">Spacious</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className={cardClasses}>
            <div className="flex items-center mb-4">
              <FiUser className={`mr-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Account Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className={`text-sm ${textSecondary}`}>Username</span>
                <span className={`font-medium ${textPrimary}`}>kinzafatima</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className={`text-sm ${textSecondary}`}>Email</span>
                <span className={`font-medium ${textPrimary}`}>kinza@example.com</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={`text-sm ${textSecondary}`}>Member Since</span>
                <span className={`font-medium ${textPrimary}`}>Jan 2023</span>
              </div>
              <button className={primaryButtonClasses}>
                Edit Profile
              </button>
            </div>
          </div>

          {/* Security */}
          <div className={cardClasses}>
            <div className="flex items-center mb-4">
              <FiLock className={`mr-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Security</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className={`text-sm ${textSecondary}`}>Password</span>
                <span className={textMuted}>••••••••</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={`text-sm ${textSecondary}`}>Two-Factor Authentication</span>
                <span className={textMuted}>Disabled</span>
              </div>
              <button className={primaryButtonClasses}>
                Change Password
              </button>
              <button className={secondaryButtonClasses}>
                Enable 2FA
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className={cardClasses}>
            <div className="flex items-center mb-4">
              <FiBell className={`mr-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className={`block text-sm ${textSecondary}`}>Email Notifications</span>
                  <span className={`text-xs ${textMuted}`}>Receive important updates via email</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all ${
                    theme === 'dark' 
                      ? 'bg-emerald-950/70 peer-checked:bg-primary/30 after:bg-primary' 
                      : 'bg-gray-200 peer-checked:bg-emerald-200 after:bg-white'
                  }`}></div>
                </label>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className={`block text-sm ${textSecondary}`}>Push Notifications</span>
                  <span className={`text-xs ${textMuted}`}>Get real-time alerts on your device</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all ${
                    theme === 'dark' 
                      ? 'bg-emerald-950/70 peer-checked:bg-primary/30 after:bg-primary' 
                      : 'bg-gray-200 peer-checked:bg-emerald-200 after:bg-white'
                  }`}></div>
                </label>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className={cardClasses}>
            <div className="flex items-center mb-4">
              <FiGlobe className={`mr-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Preferences</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="language" className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                  Language
                </label>
                <select 
                  id="language"
                  className={`w-full rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-emerald-950/50 border-emerald-800/50 text-emerald-100' 
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label htmlFor="timezone" className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                  Timezone
                </label>
                <select 
                  id="timezone"
                  className={`w-full rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-emerald-950/50 border-emerald-800/50 text-emerald-100' 
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
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
          <div className={cardClasses}>
            <div className="flex items-center mb-4">
              <FiCreditCard className={`mr-3 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Billing</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-emerald-800/30">
                <span className={`text-sm ${textSecondary}`}>Plan</span>
                <span className={`font-medium ${textPrimary}`}>Pro ($15/month)</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={`text-sm ${textSecondary}`}>Next Billing Date</span>
                <span className={`font-medium ${textPrimary}`}>May 15, 2023</span>
              </div>
              <button className={primaryButtonClasses}>
                Update Payment Method
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className={`mt-8 rounded-xl p-6 border ${
          theme === 'dark' 
            ? 'bg-rose-900/20 border-rose-800/50' 
            : 'bg-rose-50 border-rose-200'
        }`}>
          <h2 className={`text-lg font-semibold mb-4 ${
            theme === 'dark' ? 'text-rose-100' : 'text-rose-800'
          }`}>Danger Zone</h2>
          <div className="space-y-4">
            <button className={dangerButtonClasses}>
              <span>Deactivate Account</span>
              <span className={`text-xs ${theme === 'dark' ? 'opacity-70' : 'text-rose-600'}`}>
                Temporarily disable your account
              </span>
            </button>
            <button className={dangerButtonClasses}>
              <span>Delete Account</span>
              <span className={`text-xs ${theme === 'dark' ? 'opacity-70' : 'text-rose-600'}`}>
                Permanently remove all data
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;