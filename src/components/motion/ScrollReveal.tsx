'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in seconds
}

/**
 * High-performance, INP-optimized scroll reveal wrapper.
 * Uses IntersectionObserver to trigger hardware-accelerated transitions
 * without heavy scroll event listeners.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Return early if no browser context
    if (typeof window === 'undefined') return;

    // Direct reveal if prefers-reduced-motion is enabled
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setTimeout(() => setHasRevealed(true), 0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        'transition-all opacity-0 translate-y-6 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
        hasRevealed && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
