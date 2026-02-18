import { useState, useEffect } from 'react';

/**
 * useTheme Hook
 * 
 * Manages light/dark theme with:
 * - localStorage persistence
 * - System preference detection
 * - HTML class toggle for Tailwind
 * 
 * @returns {Object} { theme: 'light' | 'dark', toggleTheme: Function }
 */
export const useTheme = () => {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Only run in browser (not during SSR)
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      
      // Fallback to system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });
  
  // Apply theme changes to DOM and localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first (cleanup)
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Run when theme changes
  
  // Toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return { theme, toggleTheme };
};