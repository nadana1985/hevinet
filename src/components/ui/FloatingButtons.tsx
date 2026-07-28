'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Bot, X } from 'lucide-react';

interface FloatingButtonsProps {
  onChatToggle?: (isOpen: boolean) => void;
  isChatOpen?: boolean;
}

/**
 * Floating buttons container with WhatsApp, Back to Top, and AI Chat toggle.
 * All buttons are stacked in a single flex column for proper alignment.
 *
 * @example
 * <FloatingButtons onChatToggle={setChatOpen} isChatOpen={chatOpen} />
 */
export function FloatingButtons({ onChatToggle, isChatOpen = false }: FloatingButtonsProps) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-neutral-800 dark:bg-neutral-700 text-white flex items-center justify-center shadow-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* AI Chat Toggle */}
      {onChatToggle && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChatToggle(!isChatOpen)}
          className="w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
          aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bot className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20BA5C] transition-colors"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
}

export default FloatingButtons;
