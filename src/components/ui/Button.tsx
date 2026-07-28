'use client';

import { forwardRef, type ForwardedRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import type { ButtonProps } from '@/types';

const variantStyles = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 shadow-sm',
  secondary:
    'bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500',
  ghost:
    'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
  danger:
    'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
} as const;

const sizeStyles = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
} as const;

/**
 * Button component with variants, sizes, loading state, and icon support.
 *
 * @example
 * <Button variant="primary" size="lg" isLoading>Submit</Button>
 * <Button variant="secondary" leftIcon={<SearchIcon />}>Search</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<'button'>>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      type = 'button',
      onClick,
      ...props
    }: ButtonProps & HTMLMotionProps<'button'>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const isDisabled = disabled || isLoading;

    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none';

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        whileHover={isDisabled ? undefined : { scale: 1.02 }}
        whileTap={isDisabled ? undefined : { scale: 0.98 }}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export default Button;
