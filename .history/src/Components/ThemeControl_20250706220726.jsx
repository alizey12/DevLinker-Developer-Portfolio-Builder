import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../ontexts/ThemeContext';

const ThemeControls = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-3">
      <button
        onClick={() => setTheme('light')}
        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center ${
          theme === 'light' ? 'bg-emerald-600/50 border border-emerald-400' : 'bg-emerald-800/50'
        } text-emerald-100 transition-all`}
      >
        <FiSun className="mr-2" />
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center ${
          theme === 'dark' ? 'bg-emerald-600/50 border border-emerald-400' : 'bg-emerald-800/50'
        } text-emerald-100 transition-all`}
      >
        <FiMoon className="mr-2" />
        Dark
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center ${
          theme === 'system' ? 'bg-emerald-600/50 border border-emerald-400' : 'bg-emerald-800/50'
        } text-emerald-100 transition-all`}
      >
        <FiSun className="mr-2" />
        <FiMoon className="mr-2" />
        System
      </button>
    </div>
  );
};

export default ThemeControls;
