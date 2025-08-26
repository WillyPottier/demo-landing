// src/components/ThemeToggle.tsx
'use client';

import { useTheme } from '@/components/theme/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Basculer thème sombre/clair"
      className="rounded-lg border px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 
                 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {theme === 'dark' ? '🌙  Sombre' : '☀️  Clair'}
    </button>
  );
}