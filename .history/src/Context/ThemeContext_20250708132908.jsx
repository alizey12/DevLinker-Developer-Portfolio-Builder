import { createContext, useState } from "react";

// Create context
export const ThemeContext = createContext();

// Create provider componentexport const ThemePrOV = ({ children }) => {

  const [theme, setTheme] = useState('light'); // theme state

  // toggle function to switch theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    toggleTheme,
    theme
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
