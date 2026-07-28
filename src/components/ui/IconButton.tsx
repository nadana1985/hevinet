'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { IconButtonProps } from '@/types';

const variantStyles = {
  ghost:
    'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200',
  solid:
    'bg-primary-500 text-white hover:bg-primary-600 shadow-sm',
  outline:
    'border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:border-neutral-600',
} as const;

const sizeStyles = {
  sm: 'p-1.5 rounded-lg',
  md: 'p-2 rounded-xl',
  lg: 'p-3 rounded-xl',
} as const;

/**
 * IconButton component for icon-only actions.
 * Always requires a descriptive aria-label for accessibility.
 *
 * @example
 * <IconButton icon={<SearchIcon />} label="Search" />
 * <IconButton icon={<MoonIcon />} label="Toggle dark mode" variant="solid" size="lg" />
 */
function IconButton({
  icon,
  label,
  onClick,
  className,
  variant = 'ghost',
  size = 'md',
}: IconButtonProps) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon}
    </motion.button>
  );
}

export { IconButton };
export default IconButton;
