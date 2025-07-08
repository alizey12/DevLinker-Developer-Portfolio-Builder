// contexts/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system'); // 'light', 'dark', or 'system'
  const [resolvedTheme, setResolvedTheme] = useState('light'); // for actual applied theme
  const [accentColor, setAccentColor] = useState('emerald');
  const [uiDensity, setUiDensity] = useState('comfortable');

  useEffect(() => {
    const applyTheme = (mode) => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(mode);
      setResolvedTheme(mode);
    };

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
      };

      applyTheme(mediaQuery.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        resolvedTheme,
        accentColor,
        setAccentColor,
        uiDensity,
        setUiDensity
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
