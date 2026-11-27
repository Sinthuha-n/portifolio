import React, { useEffect, useState } from 'react';
import { ThemeChoice, ThemeContext } from './ThemeContextDefinition';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeChoice>(() => {
    if (typeof window === 'undefined') return 'light';
    try {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme') as ThemeChoice;
      if (urlTheme === 'light' || urlTheme === 'dark' || urlTheme === 'system') {
        return urlTheme;
      }
      const stored = localStorage.getItem('portfolio-theme') as ThemeChoice;
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'light'; // Default to Light for first-time visitors
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  const applyTheme = (choice: ThemeChoice) => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = choice === 'dark' || (choice === 'system' && prefersDark);

    if (isDark) {
      root.classList.add('dark');
      setEffectiveTheme('dark');
    } else {
      root.classList.remove('dark');
      setEffectiveTheme('light');
    }
  };

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore storage write issues
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (choice: ThemeChoice) => {
    setThemeState(choice);
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
