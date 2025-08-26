'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Ctx = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<Ctx | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme | null) ?? null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: Theme = saved ?? (systemDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', initial === 'dark');
    setTheme(initial);
  }, []);

  // applique + persiste à chaque changement
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}