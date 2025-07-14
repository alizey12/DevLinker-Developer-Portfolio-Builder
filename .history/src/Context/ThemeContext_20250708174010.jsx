// ThemeContext.js
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("accentColor") || "emerald";
  });
  
  const [uiDensity, setUiDensity] = useState(() => {
    return localStorage.getItem("uiDensity") || "comfortable";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply theme changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Apply accent color changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", `var(--color-${accentColor}-500)`);
    root.style.setProperty("--color-primary-light", `var(--color-${accentColor}-400)`);
    root.style.setProperty("--color-primary-dark", `var(--color-${accentColor}-600)`);
    localStorage.setItem("accentColor", accentColor);
  }, [accentColor]);

  // Apply UI density changes
  useEffect(() => {
    document.documentElement.setAttribute("data-density", uiDensity);
    localStorage.setItem("uiDensity", uiDensity);
  }, [uiDensity]);

  const value = {
    theme,
    accentColor,
    uiDensity,
    toggleTheme,
    setTheme,
    setAccentColor,
    setUiDensity
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};