import React, { useState, useEffect, useContext } from 'react';
import {
  FiUser, FiSun, FiMoon, FiMail, FiLock,
  FiGlobe, FiBell, FiCreditCard
} from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { ThemeContext } from '../../Context/ThemeContext';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [accentColor, setAccentColor] = useState('emerald');
  const [uiDensity, setUiDensity] = useState('comfortable');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedAccent = localStorage.getItem('accentColor') || 'emerald';
    const savedDensity = localStorage.getItem('uiDensity') || 'comfortable';
    const savedThemePref = localStorage.getItem('themePreference') || 'light';

    setAccentColor(savedAccent);
    setUiDensity(savedDensity);

    if (savedThemePref === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    } else {
      setTheme(savedThemePref);
    }
  }, [setTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', `var(--color-${accentColor}-500)`);
    root.style.setProperty('--color-primary-light', `var(--color-${accentColor}-400)`);
    root.style.setProperty('--color-primary-dark', `var(--color-${accentColor}-600)`);
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-density', uiDensity);

    switch (uiDensity) {
      case 'compact':
        root.style.setProperty('--spacing-unit', '0.5rem');
        root.style.setProperty('--padding-unit', '0.75rem');
        root.style.setProperty('--font-size-base', '0.875rem');
        break;
      case 'spacious':
        root.style.setProperty('--spacing-unit', '1.25rem');
        root.style.setProperty('--padding-unit', '1.5rem');
        root.style.setProperty('--font-size-base', '1rem');
        break;
      default:
        root.style.setProperty('--spacing-unit', '1rem');
        root.style.setProperty('--padding-unit', '1rem');
        root.style.setProperty('--font-size-base', '0.9375rem');
    }

    localStorage.setItem('uiDensity', uiDensity);
  }, [uiDensity]);

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
    { name: 'indigo', color: 'bg-indigo-500' },
  ];

  // === Common Classes ===
  const textPrimary = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const textMuted = theme === 'dark' ? 'text-gray-500' : 'text-gray-400';

  const cardClasses = `rounded-xl p-6 border transition-all ${
    theme === 'dark'
      ? 'bg-gray-800/50 border-gray-700 hover:border-primary'
      : 'bg-white border-gray-200 hover:border-primary shadow-sm'
  }`;

  const primaryButtonClasses = `w-full mt-4 py-2 px-4 rounded-lg border transition-all ${
    theme === 'dark'
      ? 'bg-primary/10 hover:bg-primary/20 text-gray-100 border-primary/20'
      : 'bg-primary/10 hover:bg-primary/20 text-gray-800 border-primary/20'
  }`;

  const secondaryButtonClasses = `w-full py-2 px-4 rounded-lg transition-all ${
    theme === 'dark'
      ? 'bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 border border-amber-600/20'
      : 'bg-amber-100 hover:bg-amber-200 text-amber-600 border border-amber-300'
  }`;

  const dangerButtonClasses = `w-full py-2 px-4 flex items-center justify-between rounded-lg transition-all ${
    theme === 'dark'
      ? 'bg-rose-800/50 hover:bg-rose-700/50 text-rose-100'
      : 'bg-rose-100 hover:bg-rose-200 text-rose-700'
  }`;

  const Card = ({ children, title, icon: Icon }) => (
    <div className={cardClasses}>
      <div className="flex items-center mb-4">
        <Icon className={`mr-3 ${theme === 'dark' ? 'text-primary' : 'text-primary-dark'}`} />
        <h2 className={`text-lg font-semibold ${textPrimary}`}>{title}</h2>
      </div>
      {children}
    </div>
  );

  const SettingRow = ({ label, description, children }) => (
    <div className="flex justify-between items-center py-3">
      <div>
        <div className={`text-sm ${textSecondary}`}>{label}</div>
        {description && <div className={`text-xs ${textMuted}`}>{description}</div>}
      </div>
      {children}
    </div>
  );

  return (
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <IoSettingsOutline className={`text-2xl mr-3 ${theme === 'dark' ? 'text-primary' : 'text-primary-dark'}`} />
          <h1 className={`text-2xl font-bold ${textPrimary}`}>Settings</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Appearance */}
          <Card title="Appearance" icon={theme === 'dark' ? FiMoon : FiSun}>
            <div className="space-y-6">
              <div>
                <h3 className={`text-sm font-medium mb-2 ${textSecondary}`}>Theme</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={() => handleThemeChange('light')} className={`py-2 px-3 rounded-lg flex items-center justify-center transition-all ${theme === 'light' ? 'bg-primary/20 border border-primary/50' : 'hover:bg-gray-700/10'}`}>
                    <FiSun className="mr-2" /> Light
                  </button>
                  <button onClick={() => handleThemeChange('dark')} className={`py-2 px-3 rounded-lg flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-primary/20 border border-primary/50' : 'hover:bg-gray-700/10'}`}>
                    <FiMoon className="mr-2" /> Dark
                  </button>
                  <button onClick={() => handleThemeChange('system')} className={`py-2 px-3 rounded-lg flex items-center justify-center transition-all ${localStorage.getItem('themePreference') === 'system' ? 'bg-primary/20 border border-primary/50' : 'hover:bg-gray-700/10'}`}>
                    <div className="flex items-center">
                      <FiSun className="mr-1" />
                      <FiMoon className="ml-1" />
                    </div>
                    System
                  </button>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <h3 className={`text-sm font-medium mb-2 ${textSecondary}`}>Accent Color</h3>
                <div className="flex flex-wrap gap-2">
                  {accentColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setAccentColor(color.name)}
                      className={`w-8 h-8 rounded-full ${color.color} border-2 transition-all ${
                        accentColor === color.name
                          ? theme === 'dark'
                            ? 'border-white'
                            : 'border-gray-800'
                          : 'border-transparent hover:scale-105'
                      }`}
                      aria-label={`${color.name} accent color`}
                    />
                  ))}
                </div>
              </div>

              {/* UI Density */}
              <div>
                <h3 className={`text-sm font-medium mb-2 ${textSecondary}`}>UI Density</h3>
                <select
                  value={uiDensity}
                  onChange={(e) => setUiDensity(e.target.value)}
                  className={`w-full rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border-gray-600 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
                >
                  <option value="compact">Compact</option>
                  <option value="comfortable">Comfortable</option>
                  <option value="spacious">Spacious</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Account Info */}
          <Card title="Account" icon={FiUser}>
            <div className="space-y-3">
              <SettingRow label="Username" description="Your public profile name">
                <span className={`font-medium ${textPrimary}`}>kinzafatima</span>
              </SettingRow>
              <SettingRow label="Email" description="Account email address">
                <span className={`font-medium ${textPrimary}`}>kinza@example.com</span>
              </SettingRow>
              <SettingRow label="Member Since">
                <span className={`font-medium ${textPrimary}`}>Jan 2023</span>
              </SettingRow>
              <button className={primaryButtonClasses}>Edit Profile</button>
            </div>
          </Card>
          {/* Other cards remain the same but use the new Card and SettingRow components */}
          <Card title="Account" icon={FiUser}>
            <div className="space-y-3">
              <SettingRow label="Username" description="Your public profile name">
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>kinzafatima</span>
              </SettingRow>
              <SettingRow label="Email" description="Account email address">
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>kinza@example.com</span>
              </SettingRow>
              <SettingRow label="Member Since">
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>Jan 2023</span>
              </SettingRow>
              <button className={`w-full mt-4 py-2 px-4 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'bg-primary/10 hover:bg-primary/20 text-gray-100 border-primary/20'
                  : 'bg-primary/10 hover:bg-primary/20 text-gray-800 border-primary/20'
              }`}>
                Edit Profile
              </button>
            </div>
          </Card>

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
          {/* <div className={cardClasses}>
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
          </div> */}
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