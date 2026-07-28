'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface SearchResult {
  label: string;
  href: string;
  category?: string;
}

const defaultResults: SearchResult[] = [
  { label: 'Spices', href: '/products/spices', category: 'Products' },
  { label: 'Rice & Pulses', href: '/products/rice-pulses', category: 'Products' },
  { label: 'Tea & Coffee', href: '/products/tea-coffee', category: 'Products' },
  { label: 'Flowers', href: '/products/flowers', category: 'Products' },
  { label: 'Kids Dress', href: '/products/kids-dress', category: 'Products' },
  { label: 'About Us', href: '/about', category: 'Pages' },
  { label: 'Contact', href: '/contact', category: 'Pages' },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  results?: SearchResult[];
}

/**
 * Search modal with Cmd+K shortcut, keyboard navigation, and animated overlay.
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 * return <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
 */
export function SearchModal({
  isOpen,
  onClose,
  results = defaultResults,
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter results based on query
  const filteredResults = query.trim()
    ? results.filter((r) =>
        r.label.toLowerCase().includes(query.toLowerCase())
      )
    : results;

  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap using dynamic hook
  useFocusTrap(modalRef, isOpen, onClose);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex < 0 || !listRef.current) return;
    const items = listRef.current.querySelectorAll('[data-search-item]');
    const selected = items[selectedIndex] as HTMLElement | undefined;
    selected?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredResults.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < filteredResults.length) {
            const selected = filteredResults[selectedIndex];
            window.location.href = selected.href;
            onClose();
          }
          break;
      }
    },
    [filteredResults, selectedIndex, onClose]
  );

  // Group results by category
  const groupedResults = filteredResults.reduce<
    Record<string, SearchResult[]>
  >((acc, result) => {
    const cat = result.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(result);
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
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[15vh] px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            ref={modalRef}
            className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100 dark:border-neutral-800">
              <Search className="h-5 w-5 text-neutral-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search products, pages..."
                className="flex-1 bg-transparent text-base text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 outline-none"
                autoComplete="off"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-neutral-400 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-500 rounded-md">
                <Command className="h-3 w-3" />
                K
              </kbd>
            </div>

            {/* Results */}
            <div
              ref={listRef}
              className="max-h-80 overflow-y-auto py-2"
              role="listbox"
              aria-label="Search results"
              aria-live="assertive"
            >
              {filteredResults.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                </div>
              ) : (
                Object.entries(groupedResults).map(
                  ([category, categoryResults]) => (
                    <div key={category}>
                      <p className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        {category}
                      </p>
                      {categoryResults.map((result, index) => {
                        const globalIndex = filteredResults.indexOf(result);
                        return (
                          <a
                            key={`${category}-${index}`}
                            href={result.href}
                            data-search-item
                            role="option"
                            aria-selected={selectedIndex === globalIndex}
                            className={cn(
                              'flex items-center justify-between px-5 py-3 text-sm transition-colors',
                              selectedIndex === globalIndex
                                ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                            )}
                            onClick={onClose}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                          >
                            <span>{result.label}</span>
                            <ArrowRight
                              className={cn(
                                'h-4 w-4',
                                selectedIndex === globalIndex
                                  ? 'opacity-100 text-primary-500'
                                  : 'opacity-0'
                              )}
                            />
                          </a>
                        );
                      })}
                    </div>
                  )
                )
              )}
            </div>

            {/* Footer Hint */}
            <div className="flex items-center gap-4 px-5 py-3 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">
                  ↵
                </kbd>
                Open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-xs">
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

export default SearchModal;
