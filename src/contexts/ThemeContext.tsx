'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react';
import type { Theme, ThemeContextType, ResolvedTheme } from '@/types';

const STORAGE_KEY = 'hevinet-theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored && ['light', 'dark', 'system'].includes(stored)) return stored;
  return 'system';
}

function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', resolved);
  root.classList.toggle('dark', resolved === 'dark');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  // Tracks system dark mode preference; only updated from event listener callbacks
  const [systemPrefersDark, setSystemPrefersDark] =
    useState<boolean>(getSystemPrefersDark);

  // Derive resolved theme from user preference and system state — no setState in effects
  const resolvedTheme: ResolvedTheme = useMemo(() => {
    if (theme === 'system') return systemPrefersDark ? 'dark' : 'light';
    return theme as ResolvedTheme;
  }, [theme, systemPrefersDark]);

  // Apply theme side effects whenever resolvedTheme or theme changes
  useEffect(() => {
    applyTheme(resolvedTheme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [resolvedTheme, theme]);

  // Listen for system theme changes (only when in 'system' mode)
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
