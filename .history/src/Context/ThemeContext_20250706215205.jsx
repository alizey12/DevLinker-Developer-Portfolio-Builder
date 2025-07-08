// contexts/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  const [accentColor, setAccentColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accentColor') || 'emerald';
    }
    return 'emerald';
  });

  const [uiDensity, setUiDensity] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('uiDensity') || 'comfortable';
    }
    return 'comfortable';
  });

  // Listen to system theme changes if theme === 'system'
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        updateThemeClass(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  // Update DOM classes and localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    // Save to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('accentColor', accentColor);
    localStorage.setItem('uiDensity', uiDensity);

    // Clear previous theme/density/accent classes
    root.classList.remove('light', 'dark');
    root.classList.remove(...Array.from(root.classList).filter(cls => cls.startsWith('accent-') || cls.startsWith('density-')));

    const resolvedTheme =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;

    // Apply new classes
    root.classList.add(resolvedTheme); // 'dark' or 'light'
    root.classList.add(`accent-${accentColor}`);
    root.classList.add(`density-${uiDensity}`);
  }, [theme, accentColor, uiDensity]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        accentColor,
        setAccentColor,
        uiDensity,
        setUiDensity,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
