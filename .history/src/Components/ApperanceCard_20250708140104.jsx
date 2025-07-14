// import React, { useState, useEffect, useContext } from 'react';
// import { FiSun, FiMoon } from 'react-icons/fi';
// import { ThemeContext } from '../../Context/ThemeContext';

// const AppearanceCard = () => {
//   const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
//   const [accentColor, setAccentColor] = useState(() => {
//     return localStorage.getItem('accentColor') || 'emerald';
//   });
  
//   const [uiDensity, setUiDensity] = useState(() => {
//     return localStorage.getItem('uiDensity') || 'comfortable';
//   });

//   // Apply accent color changes
//   useEffect(() => {
//     const root = document.documentElement;
//     root.style.setProperty('--color-primary', `var(--color-${accentColor}-500)`);
//     root.style.setProperty('--color-primary-light', `var(--color-${accentColor}-400)`);
//     root.style.setProperty('--color-primary-dark', `var(--color-${accentColor}-600)`);
//     localStorage.setItem('accentColor', accentColor);
//   }, [accentColor]);

//   // Apply UI density changes
//   useEffect(() => {
//     document.documentElement.setAttribute('data-density', uiDensity);
//     localStorage.setItem('uiDensity', uiDensity);
//   }, [uiDensity]);

//   const accentColors = [
//     { name: 'emerald', color: 'bg-emerald-500' },
//     { name: 'blue', color: 'bg-blue-500' },
//     { name: 'purple', color: 'bg-purple-500' },
//     { name: 'rose', color: 'bg-rose-500' },
//     { name: 'amber', color: 'bg-amber-500' },
//     { name: 'indigo', color: 'bg-indigo-500' }
//   ];

//   // Card styling classes based on theme
//   const cardClasses = `
//     rounded-xl p-6 border transition-all
//     ${theme === 'dark' 
//       ? 'bg-emerald-900/50 border-emerald-800/50 hover:border-emerald-600/50' 
//       : 'bg-white border-gray-200 hover:border-emerald-300 shadow-sm'}
//   `;

//   // Text color classes based on theme
//   const textPrimary = theme === 'dark' ? 'text-emerald-100' : 'text-gray-800';
//   const textSecondary = theme === 'dark' ? 'text-emerald-300' : 'text-gray-600';

//   // Button styling classes
//   const themeButtonClasses = (selectedTheme) => `
//     py-2 px-3 rounded-lg flex items-center justify-center transition-all
//     ${theme === selectedTheme || 
//       (selectedTheme === 'system' && localStorage.getItem('themePreference') === 'system')
//       ? theme === 'dark' 
//         ? 'bg-primary/20 border border-primary/50' 
//         : 'bg-emerald-100 border border-emerald-300'
//       : theme === 'dark' 
//         ? 'bg-emerald-800/50 hover:bg-emerald-700/50' 
//         : 'bg-gray-100 hover:bg-gray-200'}
//   `;

//   const handleThemeChange = (selectedTheme) => {
//     if (selectedTheme === 'system') {
//       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//       setTheme(systemTheme);
//     } else {
//       setTheme(selectedTheme);
//     }
//     localStorage.setItem('themePreference', selectedTheme);
//   };

//   return (
//     <div className={cardClasses}>
//       <div className="flex items-center mb-4">
//         {theme === 'dark' ? (
//           <FiMoon className="text-primary mr-3" />
//         ) : (
//           <FiSun className="text-primary mr-3" />
//         )}
//         <h2 className={`text-lg font-semibold ${textPrimary}`}>Appearance</h2>
//       </div>
      
//       <div className="space-y-6">
//         {/* Theme Selection */}
//         <div>
//           <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Theme</label>
//           <div className="grid grid-cols-3 gap-3">
//             <button 
//               onClick={() => handleThemeChange('light')}
//               className={themeButtonClasses('light')}
//             >
//               <FiSun className="mr-2" />
//               Light
//             </button>
//             <button 
//               onClick={() => handleThemeChange('dark')}
//               className={themeButtonClasses('dark')}
//             >
//               <FiMoon className="mr-2" />
//               Dark
//             </button>
//             <button 
//               onClick={() => handleThemeChange('system')}
//               className={themeButtonClasses('system')}
//             >
//               <div className="flex items-center">
//                 <FiSun className="mr-1" />
//                 <FiMoon className="ml-1" />
//               </div>
//               <span className="ml-2">System</span>
//             </button>
//           </div>
//         </div>

//         {/* Accent Color */}
//         <div>
//           <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Accent Color</label>
//           <div className="flex flex-wrap gap-2">
//             {accentColors.map(({ name, color }) => (
//               <button
//                 key={name}
//                 onClick={() => setAccentColor(name)}
//                 className={`w-8 h-8 rounded-full ${color} border-2 transition-all
//                   ${accentColor === name 
//                     ? theme === 'dark' 
//                       ? 'border-white scale-110' 
//                       : 'border-gray-800 scale-110'
//                     : 'border-transparent hover:scale-105'}`}
//                 aria-label={`${name} accent color`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* UI Density */}
//         <div>
//           <label htmlFor="uiDensity" className={`block text-sm font-medium mb-2 ${textSecondary}`}>
//             UI Density
//           </label>
//           <select 
//             id="uiDensity"
//             value={uiDensity}
//             onChange={(e) => setUiDensity(e.target.value)}
//             className={`w-full rounded-lg p-2 focus:ring-2 focus:ring-primary focus:border-transparent ${
//               theme === 'dark' 
//                 ? 'bg-emerald-950/50 border-emerald-800/50 text-emerald-100' 
//                 : 'bg-white border-gray-300 text-gray-800'
//             }`}
//           >
//             <option value="comfortable">Comfortable</option>
//             <option value="compact">Compact</option>
//             <option value="spacious">Spacious</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppearanceCard;