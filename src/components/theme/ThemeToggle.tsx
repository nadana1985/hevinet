'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { IconButton } from '@/components/ui/IconButton';

/**
 * Theme toggle button with animated sun/moon icon swap.
 * Uses the ThemeProvider context.
 *
 * @example
 * <ThemeToggle />
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = resolvedTheme === 'dark';

  return (
    <IconButton
      icon={
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'sun' : 'moon'}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-500" />
            )}
          </motion.div>
        </AnimatePresence>
      }
      label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggle}
      variant="ghost"
      size="md"
    />
  );
}

export default ThemeToggle;
