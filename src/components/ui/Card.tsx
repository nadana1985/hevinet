'use client';

import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

/**
 * Card component with padding options and hover effects.
 * Supports dark mode automatically via Tailwind classes.
 *
 * @example
 * <Card hover padding="lg">Content</Card>
 * <Card>Default padding (md), no hover</Card>
 */
function Card({
  children,
  className,
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        'bg-white rounded-2xl border border-neutral-100',
        // Dark mode
        'dark:bg-neutral-800 dark:border-neutral-700',
        // Padding
        paddingStyles[padding],
        // Hover effect
        hover &&
          'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-neutral-200 dark:hover:border-neutral-600',
        className
      )}
    >
      {children}
    </div>
  );
}

export { Card };
export default Card;
