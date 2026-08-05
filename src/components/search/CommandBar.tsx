'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Sun, Moon, Laptop, Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface CommandItem {
  id: string;
  label: string;
  category: 'Products' | 'Pages' | 'Actions';
  action?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

interface CommandBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandBar({ isOpen, onClose }: CommandBarProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useFocusTrap(containerRef, isOpen, onClose);

  // Command items definitions
  const getCommandItems = useCallback((): CommandItem[] => {
    const items: CommandItem[] = [
      // Products
      { id: 'prod-spices', label: 'Spices Category', category: 'Products', href: '/products/spices' },
      { id: 'prod-rice', label: 'Rice & Pulses Category', category: 'Products', href: '/products/rice-pulses' },
      { id: 'prod-flowers', label: 'Flowers Category', category: 'Products', href: '/products/flowers' },
      { id: 'prod-tea', label: 'Tea & Coffee Category', category: 'Products', href: '/products/tea-coffee' },
      { id: 'prod-dress', label: 'Kids Dress Category', category: 'Products', href: '/products/kids-dress' },

      // Pages
      { id: 'page-home', label: 'Go to Homepage', category: 'Pages', href: '/' },
      { id: 'page-about', label: 'Go to About Us', category: 'Pages', href: '/about' },
      { id: 'page-markets', label: 'Go to Markets Page', category: 'Pages', href: '/markets' },
      { id: 'page-contact', label: 'Go to Contact Us', category: 'Pages', href: '/contact' },
      { id: 'page-privacy', label: 'View Privacy Policy', category: 'Pages', href: '/privacy' },
      { id: 'page-terms', label: 'View Terms & Conditions', category: 'Pages', href: '/terms' },

      // Actions
      {
        id: 'action-theme-dark',
        label: 'Switch to Dark Theme',
        category: 'Actions',
        icon: <Moon className="h-4 w-4" />,
        action: () => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          onClose();
        },
      },
      {
        id: 'action-theme-light',
        label: 'Switch to Light Theme',
        category: 'Actions',
        icon: <Sun className="h-4 w-4" />,
        action: () => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          onClose();
        },
      },
      {
        id: 'action-theme-system',
        label: 'Switch to System Default Theme',
        category: 'Actions',
        icon: <Laptop className="h-4 w-4" />,
        action: () => {
          localStorage.removeItem('theme');
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.classList.toggle('dark', isDark);
          onClose();
        },
      },
    ];
    return items;
  }, [onClose]);

  const allItems = getCommandItems();

  // Simple fuzzy regex filter to match query
  const filteredItems = query.trim()
    ? allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;


  // Focus input when Command Bar opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex < 0 || !listRef.current) return;
    const items = listRef.current.querySelectorAll('[data-command-item]');
    const selected = items[selectedIndex] as HTMLElement | undefined;
    selected?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  // Execute selected item command
  const executeCommand = useCallback((item: CommandItem) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      window.location.href = item.href;
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredItems.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredItems.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            executeCommand(filteredItems[selectedIndex]);
          }
          break;
      }
    },
    [filteredItems, selectedIndex, executeCommand]
  );

  // Group items by category
  const groupedItems = filteredItems.reduce<Record<string, CommandItem[]>>((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-md pt-[12vh] px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            ref={containerRef}
            className="w-full max-w-xl glass backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command Bar"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 dark:border-white/5 bg-white/20 dark:bg-black/10">
              <Search className="h-5 w-5 text-neutral-500 dark:text-neutral-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search products or type a command..."
                className="flex-1 bg-transparent text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 outline-none border-none"
                autoComplete="off"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-neutral-500 bg-white/40 dark:bg-neutral-800/40 rounded-md border border-white/20 dark:border-neutral-700/30">
                <Command className="h-3 w-3" />
                K
              </kbd>
            </div>

            {/* Content List */}
            <div
              ref={listRef}
              className="max-h-80 overflow-y-auto py-2 bg-white/5 dark:bg-black/5"
              role="listbox"
              aria-label="Commands"
            >
              {filteredItems.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    No matching commands found for &ldquo;{query}&rdquo;
                  </p>
                </div>
              ) : (
                Object.entries(groupedItems).map(([category, itemsInCategory]) => (
                  <div key={category}>
                    <p className="px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {category}
                    </p>
                    {itemsInCategory.map((item) => {
                      const globalIndex = filteredItems.indexOf(item);
                      const isSelected = selectedIndex === globalIndex;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          data-command-item
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => executeCommand(item)}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                          className={cn(
                            'flex items-center justify-between w-full px-5 py-3 text-sm text-left transition-all',
                            isSelected
                              ? 'bg-primary-500 text-white font-medium shadow-md shadow-primary-500/20'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-white/10 dark:hover:bg-white/5'
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon ? (
                              <span className="shrink-0">{item.icon}</span>
                            ) : (
                              <Link2 className={cn('h-4 w-4 shrink-0', isSelected ? 'text-white' : 'text-neutral-400')} />
                            )}
                            <span>{item.label}</span>
                          </div>
                          <ArrowRight
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              isSelected ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                            )}
                          />
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="flex items-center gap-4 px-5 py-3 bg-white/20 dark:bg-black/20 border-t border-white/10 dark:border-white/5 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white/40 dark:bg-neutral-800/40 rounded border border-white/20 dark:border-neutral-700/30">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white/40 dark:bg-neutral-800/40 rounded border border-white/20 dark:border-neutral-700/30">
                  ↵
                </kbd>
                Execute
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white/40 dark:bg-neutral-800/40 rounded border border-white/20 dark:border-neutral-700/30">
                  Esc
                </kbd>
                Close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandBar;
