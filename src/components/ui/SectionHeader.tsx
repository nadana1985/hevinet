'use client';

import { cn } from '@/lib/utils';
import type { SectionHeaderProps } from '@/types';

/**
 * SectionHeader component for consistent section headings.
 * Supports left and center alignment with an optional subtitle.
 *
 * @example
 * <SectionHeader title="Our Products" subtitle="Premium quality, globally delivered" />
 * <SectionHeader title="About Us" align="left" />
 */
function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeader };
export default SectionHeader;
