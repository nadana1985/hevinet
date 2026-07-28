'use client';

import { useRef, useState, useEffect } from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { SlideUp } from '@/components/motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 30, suffix: '+', label: 'Countries Served' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Quality Rate' },
];

/**
 * Animated statistics counter section with gradient background.
 * Counters animate from 0 to their target value when scrolled into view.
 *
 * @example
 * <StatsCounter />
 */
function AnimatedStat({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const { count, isComplete } = useAnimatedCounter(value, {
    duration: 2200,
    start,
  });

  return (
    <span className={isComplete ? 'after:content-[""]' : ''}>
      {count}
      {suffix}
    </span>
  );
}

/**
 * Statistics counter section showing company metrics.
 *
 * @example
 * <StatsCounter />
 */
export function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-600"
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <SlideUp>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Impact in Numbers
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
              Building trust through years of excellence in global trade
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                  <AnimatedStat
                    value={stat.value}
                    suffix={stat.suffix}
                    start={isVisible}
                  />
                </div>
                <p className="text-white/80 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SlideUp>
    </section>
  );
}

export default StatsCounter;
