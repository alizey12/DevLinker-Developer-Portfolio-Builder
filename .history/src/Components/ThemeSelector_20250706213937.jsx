// components/ThemeApplier.js (or your root layout component)
import { useTheme } from '../contexts/ThemeContext';
import { useEffect } from 'react';

export default function ThemeApplier({ children }) {
  const { theme, accentColor, uiDensity } = useTheme();

  // Apply classes to document root (optional)
  useEffect(() => {
    document.documentElement.className = `${theme}-theme accent-${accentColor} density-${uiDensity}`;
  }, [theme, accentColor, uiDensity]);

  return (
    <div className={`theme-wrapper ${theme}-theme accent-${accentColor} density-${uiDensity}`}>
      {children}
    </div>
  );
}