'use client';

import { forwardRef, useId, type ForwardedRef } from 'react';
import { cn } from '@/lib/utils';
import type { InputProps } from '@/types';

/**
 * Input component with label, error state, and helper text.
 * Uses a generated or provided ID for label-input association.
 *
 * @example
 * <Input label="Email" type="email" error="Invalid email" />
 * <Input label="Name" helperText="Enter your full name" />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      id: externalId,
      className,
      type = 'text',
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const generatedId = useId();
    const inputId = externalId || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
          {props.required && (
            <span className="ml-1 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <input
          ref={ref}
          id={inputId}
          type={type}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            'w-full px-4 py-3 rounded-xl border text-neutral-900 placeholder:text-neutral-400 transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500',
            error
              ? 'border-red-500 focus:ring-red-500 dark:border-red-400'
              : 'border-neutral-200 focus:ring-primary-500 focus:border-primary-500 dark:border-neutral-700 dark:focus:border-primary-400',
            className
          )}
          {...props}
        />

        {error && (
          <p id={errorId} role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="text-sm text-neutral-500 dark:text-neutral-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export default Input;
