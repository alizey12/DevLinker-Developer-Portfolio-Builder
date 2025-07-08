import {useState,useEffect,useContext,createContext, Children  } from "react";
export const ThemeContext = createContext();

export default ThemeProvider=({children})=>{
const [theme, setTheme] = useState('light');


useEffect(() => {
    
    return () => {
        
    };
}, []);
    return(
        <ThemeContext.Provider>// contexts/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system'); // 'light', 'dark', or 'system'
  const [accentColor, setAccentColor] = useState('emerald');
  const [uiDensity, setUiDensity] = useState('comfortable');

  // Detect system preference
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
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
{children}
        </ThemeContext.Provider>
    );
};