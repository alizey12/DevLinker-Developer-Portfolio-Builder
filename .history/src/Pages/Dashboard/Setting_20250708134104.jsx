import React, { useState, useEffect, useContext } from 'react';
import { FiUser, FiSun, FiMoon, FiMail, FiLock, FiGlobe, FiBell, FiCreditCard } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLightMode, MdLightMode } from 'react-icons/md';
import { ThemeContext } from '../../Context/ThemeContext';

const Settings = () => {
  // State for theme preferences
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

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-emerald-950/80 to-emerald-900/90' : 'bg-gradient-to-br from-emerald-100 to-emerald-50'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <IoSettingsOutline className="text-primary text-2xl mr-3" />
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-emerald-100' : 'text-emerald-900'}`}>Settings</h1>
        </div>

        {/* Theme Toggle Button */}
        <div className="mb-8">
          <button
            onClick={toggleTheme}
            className="flex items-center text-xl font-semibold text-blue-500 hover:text-blue-700"
          >
            {theme === "light" ? (
              <>
                <MdOutlineLightMode size={24} className="mr-2" />
                Light Mode
              </>
            ) : (
              <>
                <MdLightMode size={24} className="mr-2" />
                Dark Mode
              </>
            )}
          </button>
        </div>

        {/* Rest of your settings components... */}
        {/* Make sure to update all the className props to respect the current theme */}
      </div>
    </div>
  );
};

export default Settings;





//   );
// };

// export default Settings;