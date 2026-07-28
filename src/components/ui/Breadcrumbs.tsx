'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation for inner pages.
 *
 * @example
 * <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Spices' }]} />
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-1.5 text-sm">
        <li>
          <Link
            href="/"
            className="text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-neutral-300 dark:text-neutral-600" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 dark:text-white font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
