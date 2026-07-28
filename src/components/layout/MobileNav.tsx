'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid3X3, MessageCircle, Info, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Products', href: '/products', icon: Grid3X3 },
  { label: 'Chat', href: '/contact', icon: MessageCircle, isSpecial: true },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Call', href: 'tel:+919876543210', icon: Phone },
];

/**
 * Mobile bottom navigation bar, visible only on small screens.
 *
 * @example
 * <MobileNav />
 */
export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 lg:hidden z-50 safe-area-bottom"
      aria-label="Mobile navigation"
    >
      <div className="flex justify-around items-center py-2 px-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isSpecial) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-0.5"
              >
                <div className="w-11 h-11 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md -mt-4">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[48px]',
                isActive
                  ? 'text-primary-500'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-primary-500'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;
