// components/ThemeControls.js
import { useTheme } from '../Context/';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeControls() {
  const { theme, setTheme, accentColor, setAccentColor, uiDensity, setUiDensity } = useTheme();

  const accentColors = [
    { name: 'emerald', bg: 'bg-emerald-500' },
    { name: 'blue', bg: 'bg-blue-500' },
    { name: 'purple', bg: 'bg-purple-500' },
    { name: 'rose', bg: 'bg-rose-500' }
  ];

  const densityOptions = [
    { value: 'compact', label: 'Compact' },
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'spacious', label: 'Spacious' }
  ];

  return (
    <div className="space-y-4">
      {/* Theme Selection */}
      <div>
        <label className="block text-sm text-emerald-300 mb-2">Theme</label>
        <div className="flex space-x-3">
          <button 
            onClick={() => setTheme('light')}
            className={`flex-1 py-2 px-3 ${theme === 'light' ? 'bg-emerald-600/50 border-emerald-400' : 'bg-emerald-800/50'} hover:bg-emerald-700/50 text-emerald-100 rounded-lg flex items-center justify-center border`}
          >
            <FiSun className="mr-2" />
            Light
          </button>
          <button 
            onClick={() => setTheme('dark')}
            className={`flex-1 py-2 px-3 ${theme === 'dark' ? 'bg-emerald-600/50 border-emerald-400' : 'bg-emerald-800/50'} hover:bg-emerald-700/50 text-emerald-100 rounded-lg flex items-center justify-center border`}
          >
            <FiMoon className="mr-2" />
            Dark
          </button>
          <button 
            onClick={() => setTheme('system')}
            className={`flex-1 py-2 px-3 ${theme === 'system' ? 'bg-emerald-600/50 border-emerald-400' : 'bg-emerald-800/50'} hover:bg-emerald-700/50 text-emerald-100 rounded-lg flex items-center justify-center border`}
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
          {accentColors.map((color) => (
            <button
              key={color.name}
              onClick={() => setAccentColor(color.name)}
              className={`w-8 h-8 rounded-full ${color.bg} border-2 ${accentColor === color.name ? 'border-emerald-300' : 'border-transparent'}`}
              title={color.name}
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
          {densityOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}