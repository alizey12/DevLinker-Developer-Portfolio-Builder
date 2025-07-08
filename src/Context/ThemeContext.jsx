// contexts/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme, default to 'system'
    return localStorage.getItem('theme') || 'system';
  });
  
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('accentColor') || 'emerald';
  });

  const [uiDensity, setUiDensity] = useState(() => {
    return localStorage.getItem('uiDensity') || 'comfortable';
  });

  // Detect system theme preference
  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark-theme', e.matches);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  // Apply theme classes and save to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('accentColor', accentColor);
    localStorage.setItem('uiDensity', uiDensity);

    // Apply theme classes
    const root = document.documentElement;
    root.className = ''; // Clear existing classes
    
    if (theme === 'system') {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(systemIsDark ? 'dark-theme' : 'light-theme');
    } else {
      root.classList.add(`${theme}-theme`);
    }
    
    root.classList.add(`accent-${accentColor}`, `density-${uiDensity}`);
  }, [theme, accentColor, uiDensity]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, accentColor, setAccentColor, uiDensity, setUiDensity }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}