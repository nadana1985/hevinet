import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with proper conflict resolution.
 * Combines clsx for conditional classes and tailwind-merge for deduplication.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-primary-500', 'px-6') // → 'py-2 bg-primary-500 px-6'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string or timestamp into a human-readable format.
 *
 * @example
 * formatDate('2026-07-27') // → "July 27, 2026"
 * formatDate(new Date())    // → "July 27, 2026"
 */
export function formatDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(d);
}

/**
 * Truncates text to a specified length, adding an ellipsis if truncated.
 *
 * @example
 * truncate('Hello world', 5) // → "Hello..."
 * truncate('Hi', 5)          // → "Hi"
 */
export function truncate(text: string, maxLength: number, ellipsis = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + ellipsis;
}

/**
 * Converts a string to a URL-friendly slug.
 *
 * @example
 * slugify('Premium Indian Spices') // → "premium-indian-spices"
 * slugify('  Hello   World!  ')    // → "hello-world"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')  // Remove non-word chars
    .replace(/[\s_]+/g, '-')   // Replace spaces/underscores with hyphens
    .replace(/-+/g, '-')       // Collapse multiple hyphens
    .replace(/^-+|-+$/g, '');  // Trim hyphens from ends
}

/**
 * Formats a number with commas for thousands separators.
 *
 * @example
 * formatNumber(1234567) // → "1,234,567"
 * formatNumber(99.99)   // → "99.99"
 */
export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Generates a random ID string.
 *
 * @example
 * generateId() // → "a1b2c3d4"
 */
export function generateId(length = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Delays execution for a specified number of milliseconds.
 * Useful for simulating network requests or adding transitions.
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Safely accesses nested object properties without throwing.
 *
 * @example
 * const obj = { a: { b: { c: 'value' } } };
 * get(obj, 'a.b.c') // → "value"
 * get(obj, 'x.y.z', 'default') // → "default"
 */
export function get<T = unknown>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (result === null || result === undefined || typeof result !== 'object') {
      return defaultValue;
    }
    result = (result as Record<string, unknown>)[key];
  }

  return (result as T) ?? defaultValue;
}

/**
 * Creates a range of numbers.
 *
 * @example
 * range(0, 5)  // → [0, 1, 2, 3, 4, 5]
 * range(1, 3)  // → [1, 2, 3]
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object).
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as Record<string, unknown>).length === 0;
  return false;
}
