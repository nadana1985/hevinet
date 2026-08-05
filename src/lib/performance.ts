/**
 * Performance optimization utilities to manage non-critical background tasks
 * and optimize Interaction to Next Paint (INP) latency.
 */

type IdleTask = () => void;

/**
 * Execute a non-critical background task during browser idle periods.
 * Falls back to setTimeout if requestIdleCallback is not supported.
 *
 * @example
 * runIdleTask(() => {
 *   // Send analytical logs or execute non-blocking operations
 *   console.log('Sending metrics...');
 * });
 */
export function runIdleTask(task: IdleTask, timeout = 2000): void {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(task, { timeout });
  } else {
    setTimeout(task, 50);
  }
}

/**
 * Debounces a user interaction to optimize input latency and main thread responsiveness.
 */
export function debounceInteraction<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 100
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
