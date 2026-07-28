'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import type { NavigationItem, MegaMenuItem } from '@/types';

const navItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Spices', href: '/products?category=spices' },
      { label: 'Food Products', href: '/products?category=food' },
      { label: 'Kids Toys', href: '/products?category=toys' },
    ],
  },
  { label: 'Markets', href: '/markets' },
  { label: 'Contact Us', href: '/contact' },
];

const megaMenuCategories: MegaMenuItem[] = [
  {
    category: 'Spices',
    items: [
      { label: 'Turmeric', href: '/products/spices/turmeric' },
      { label: 'Red Chili', href: '/products/spices/red-chili' },
      { label: 'Cardamom', href: '/products/spices/cardamom' },
      { label: 'Mixed Collection', href: '/products/spices/mixed-collection' },
    ],
  },
  {
    category: 'Food Products',
    items: [
      { label: 'Basmati Rice', href: '/products/food/basmati' },
      { label: 'A2 Bilona Ghee', href: '/products/food/a2-bilona' },
      { label: 'Assorted Pulses', href: '/products/food/food-products' },
    ],
  },
  {
    category: 'Kids Toys',
    items: [
      { label: 'Wooden Toys', href: '/products/toys/wooden-set' },
      { label: 'Building Blocks', href: '/products/toys/building-blocks' },
      { label: 'Toys Collection', href: '/products/toys/kids-toys-collection' },
    ],
  },
];

interface NavigationProps {
  onSearchOpen?: () => void;
}

/**
 * Main navigation component with mega menu, mobile drawer, search trigger, and theme toggle.
 *
 * @example
 * <Navigation onSearchOpen={() => setIsSearchOpen(true)} />
 */
export function Navigation({ onSearchOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu when navigating
  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Top Bar */}
      <div className="hidden lg:block bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:info@hevinettrading.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>info@hevinettrading.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-white/60 text-xs">
            <span>Premium Indian Exports</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              onClick={handleNavClick}
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">
                  H
                </span>
              </div>
              <span className="font-heading font-bold text-lg lg:text-xl text-neutral-900 dark:text-white">
                HeviNet
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                        openDropdown === item.label
                          ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                      {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 p-6 min-w-[600px]">
                          <div className="grid grid-cols-3 gap-8">
                            {megaMenuCategories.map((category) => (
                              <div key={category.category} className="space-y-3">
                                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                                  {category.category}
                                </h3>
                                <ul className="space-y-1.5">
                                  {category.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                        onClick={handleNavClick}
                                      >
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            <Link
                              href="/products"
                              className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors inline-flex items-center gap-1"
                              onClick={handleNavClick}
                            >
                              View All Products
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search Trigger */}
              <button
                onClick={onSearchOpen}
                className="p-2 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                aria-label="Search"
                title="Search (Ctrl+K)"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-600 transition-colors shadow-sm"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            openDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 space-y-1 pb-2">
                              {megaMenuCategories.map((category) => (
                                <div key={category.category} className="py-1">
                                  <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                                    {category.category}
                                  </p>
                                  {category.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={handleNavClick}
                                      className="block px-4 py-2 rounded-lg text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center w-full bg-primary-500 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-primary-600 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;
