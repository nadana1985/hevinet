'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface UseAnimatedCounterOptions {
  /** Animation duration in milliseconds. Default 2000 */
  duration?: number;
  /** Whether to start the animation. Default true */
  start?: boolean;
}

interface UseAnimatedCounterReturn {
  /** Current animated count value */
  count: number;
  /** Whether the animation has completed (derived: count === end) */
  isComplete: boolean;
  /** Manually restart the animation */
  restart: () => void;
}

/**
 * Custom hook that animates a number from 0 to the target value using
 * requestAnimationFrame for smooth 60fps animation.
 *
 * Derived state: `isComplete` is computed as `count === end`, so no extra
 * state variable is needed.
 *
 * @example
 * const { count, isComplete } = useAnimatedCounter(500, { duration: 2000 });
 * return <span>{count}+</span>;
 */
export function useAnimatedCounter(
  end: number,
  options: UseAnimatedCounterOptions = {}
): UseAnimatedCounterReturn {
  const { duration = 2000, start = true } = options;

  const [count, setCount] = useState(0);
  const isComplete = count === end;

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const animateRef = useRef<((ts: number) => void) | null>(null);
  const endRef = useRef(end);
  const durationRef = useRef(duration);

  const restart = useCallback(() => {
    setCount(0);
    startTimeRef.current = null;
  }, []);

  // Sync end/duration to refs (not during render, to satisfy render-phase ref rules)
  useEffect(() => {
    endRef.current = end;
    durationRef.current = duration;
  }, [end, duration]);

  // Stable animate callback — reads latest end/duration from refs.
  // Uses animateRef.current for self-referencing to avoid "accessed before declared" lint.
  const animate = useCallback((timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / durationRef.current, 1);

    // Ease out cubic for smooth deceleration
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentCount = Math.round(eased * endRef.current);

    setCount(currentCount);

    if (progress < 1 && animateRef.current) {
      rafRef.current = requestAnimationFrame(animateRef.current);
    }
  }, []);

  // Sync animate to ref (not during render, to satisfy render-phase ref rules)
  useEffect(() => {
    animateRef.current = animate;
  }, [animate]);

  // Start/stop the animation loop
  useEffect(() => {
    if (!start || !animateRef.current) return;

    startTimeRef.current = null;
    rafRef.current = requestAnimationFrame(animateRef.current);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start]);

  return { count, isComplete, restart };
}
