'use client';

import { useRef, useState, useEffect, type RefObject } from 'react';

interface UseScrollAnimationOptions {
  /** IntersectionObserver threshold (0–1). Default 0.1 */
  threshold?: number;
  /** Root margin for triggering earlier/later. Default '-40px' */
  rootMargin?: string;
  /** Only animate once. Default true */
  once?: boolean;
}

interface UseScrollAnimationReturn {
  /** Ref to attach to the target element */
  ref: RefObject<HTMLDivElement | null>;
  /** Whether the element is currently visible */
  isVisible: boolean;
  /** Whether the element has ever been visible (stays true after first trigger) */
  hasAnimated: boolean;
}

/**
 * Custom hook that detects when an element scrolls into the viewport.
 * Uses IntersectionObserver with configurable threshold and rootMargin.
 * By default, only triggers once (once=true).
 *
 * @example
 * const { ref, isVisible, hasAnimated } = useScrollAnimation({ threshold: 0.2 });
 *
 * return (
 *   <div
 *     ref={ref}
 *     className={`transition-all duration-700 ${
 *       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
 *     }`}
 *   >
 *     Content
 *   </div>
 * );
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const { threshold = 0.1, rootMargin = '-40px', once = true } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        setIsVisible(isIntersecting);

        if (isIntersecting && once) {
          setHasAnimated(true);
          observer.unobserve(element);
        } else if (isIntersecting && !once) {
          setHasAnimated(true);
        } else if (!isIntersecting && !once) {
          setHasAnimated(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible, hasAnimated };
}
