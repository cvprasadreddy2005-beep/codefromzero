import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ActiveTheme = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  theme: ActiveTheme;
  isDark: boolean;
  isLight: boolean;
  isLightModeOverride: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  setTheme: (theme: ActiveTheme) => void;
  setLightModeOverride: (override: boolean) => void;
  forceLightMode: () => void;
  forceDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'cfz_theme_mode';
const OVERRIDE_KEY = 'cfz_light_mode_override';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    try {
      const override = localStorage.getItem(OVERRIDE_KEY);
      if (override === 'true') return 'light';
      const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('cfz_theme');
      if (stored === 'dark' || stored === 'light' || stored === 'system') return stored;
    } catch (e) {
      console.warn('Error reading theme from localStorage', e);
    }
    return 'light'; // Default to light mode support
  });

  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Listen to system dark mode preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Compute active theme ('light' or 'dark')
  const activeTheme: ActiveTheme = themeMode === 'system' 
    ? (systemIsDark ? 'dark' : 'light') 
    : themeMode;

  const isDark = activeTheme === 'dark';
  const isLight = activeTheme === 'light';
  const isLightModeOverride = themeMode === 'light';

  // Apply dark or light class to <html> and <body> elements
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
      root.style.colorScheme = 'dark';
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
      root.style.colorScheme = 'light';
      root.setAttribute('data-theme', 'light');
    }

    try {
      localStorage.setItem(STORAGE_KEY, themeMode);
      localStorage.setItem('cfz_theme', activeTheme);
      localStorage.setItem(OVERRIDE_KEY, String(themeMode === 'light'));
    } catch (e) {
      console.warn('Error saving theme to localStorage', e);
    }
  }, [themeMode, isDark, activeTheme]);

  const toggleTheme = () => {
    setThemeModeState(prev => {
      if (prev === 'system') {
        return systemIsDark ? 'light' : 'dark';
      }
      return prev === 'dark' ? 'light' : 'dark';
    });
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
  };

  const setTheme = (t: ActiveTheme) => {
    setThemeModeState(t);
  };

  const setLightModeOverride = (override: boolean) => {
    if (override) {
      setThemeModeState('light');
    } else {
      setThemeModeState(systemIsDark ? 'dark' : 'light');
    }
  };

  const forceLightMode = () => {
    setThemeModeState('light');
  };

  const forceDarkMode = () => {
    setThemeModeState('dark');
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        themeMode, 
        theme: activeTheme, 
        isDark, 
        isLight,
        isLightModeOverride,
        toggleTheme, 
        setThemeMode, 
        setTheme,
        setLightModeOverride,
        forceLightMode,
        forceDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
