// src/components/theme/ThemeProvider.tsx
'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Ctx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const ThemeContext = createContext<Ctx | undefined>(undefined);

function applyHtmlClass(t: Theme) {
  const root = document.documentElement;
  if (t === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light'); // placeholder SSR

  // Init côté client: lit localStorage, sinon suit le système une seule fois
  useEffect(() => {
    try {
      const saved = (localStorage.getItem('theme') as Theme | null) ?? null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial: Theme = saved ?? (prefersDark ? 'dark' : 'light');
      setTheme(initial);
      applyHtmlClass(initial);
    } catch {
      // en cas de blocage localStorage, rester en 'light'
      applyHtmlClass('light');
    } finally {
      setMounted(true);
    }
  }, []);

  // Applique + persiste à chaque changement
  useEffect(() => {
    if (!mounted) return;
    applyHtmlClass(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme, mounted]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    }),
    [theme]
  );

  // Évite les diff SSR/CSR: ne rend le contenu qu’une fois monté
  if (!mounted) return null;

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}