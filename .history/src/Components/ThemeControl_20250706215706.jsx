// src/Components/ThemeControl.jsx
import React from 'react';
import { useTheme } from '../';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeControls = () => {
  const {
    theme,
    setTheme,
    accentColor,
    setAccentColor,
    uiDensity,
    setUiDensity,
  } = useTheme();

  const themes = ['light', 'dark', 'system'];
  const accentColors = ['emerald', 'blue', 'purple', 'rose'];
  const densities = ['comfortable', 'compact', 'spacious'];

  return (
    <div className="space-y-6">
      {/* Theme Switcher */}
      <div>
        <label className="block text-sm text-emerald-300 mb-2">Theme</label>
        <div className="flex space-x-3">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center border transition-all
                ${
                  theme === t
                    ? 'bg-emerald-600/50 border-emerald-400'
                    : 'bg-emerald-800/50 hover:bg-emerald-700/50 border-emerald-800/50'
                }
                text-emerald-100`}
            >
              {t === 'light' && <FiSun className="mr-2" />}
              {t === 'dark' && <FiMoon className="mr-2" />}
              {t === 'system' && (
                <>
                  <FiSun className="mr-1" />
                  <FiMoon className="mr-1" />
                </>
              )}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color */}
      <div>
        <label className="block text-sm text-emerald-300 mb-2">Accent Color</label>
        <div className="flex space-x-2">
          {accentColors.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all
                bg-${color}-500
                ${
                  accentColor === color
                    ? `border-${color}-300 scale-110`
                    : 'border-transparent'
                }`}
              title={color}
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
          className="w-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-100 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          {densities.map((d) => (
            <option key={d} value={d}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeControls;
