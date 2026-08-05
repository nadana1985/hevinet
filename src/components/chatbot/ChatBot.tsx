'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { quickReplies, type QuickReply } from '@/data/chatbot-responses';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { AIChatBubble } from '@/components/ui/AIChatBubble';

interface ChatBotProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

/**
 * Helper to extract text parts from a Vercel AI SDK 5.0+ UIMessage structure.
 */
function getMessageText(message: UIMessage): string {
  return (
    message.parts
      ?.filter((part) => part.type === 'text')
      .map((part) => (part as { type: 'text'; text: string }).text)
      .join('') || ''
  );
}

/**
 * ChatBot component - AI-powered streaming chatbot.
 * Integrates Vercel AI SDK 5.0+ on client side and renders custom markdown chat bubbles.
 */
export function ChatBot({ isOpen = false, onToggle }: ChatBotProps) {
  const setIsOpen = onToggle || (() => {});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Own input state management since AI SDK 5.0+ no longer provides it inside useChat
  const [input, setInput] = useState('');

  // Setup Vercel AI SDK useChat Hook (defaults to /api/chat route)
  const {
    messages,
    status,
    sendMessage,
  } = useChat({
    messages: [
      {
        id: 'welcome',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: `👋 **Hello! Welcome to HeviNet Trading!**

I'm here to help you with:
- 🌶️ **Product specifications** (spices, aged rice, cow ghee, toys)
- 📜 **Quality standards** (ISO certifications, quality controls)
- 🚢 **Logistics & Delivery** (global shipping, cargo terms)
- 💰 **Inquiries & Quotes** (Minimum Order Quantities, custom packaging)

How can I help your business today?`,
          },
        ],
      },
    ],
  });

  const isStreaming = status === 'streaming' || status === 'submitted';

  // Focus trap
  useFocusTrap(chatRef, isOpen, () => setIsOpen(false));

  // Scroll to bottom when messages arrive/stream
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  // Focus input when chat window opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle quick reply click
  const handleQuickReply = (reply: QuickReply) => {
    sendMessage({ text: reply.message });
  };

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="HeviNet Assistant"
            className="fixed bottom-[148px] right-6 z-[60] w-[390px] max-w-[calc(100vw-3rem)] h-[540px] max-h-[calc(100vh-10rem)] bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-500 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">HeviNet AI Assistant</p>
                <p className="text-xs text-white/80">Representing HeviNet.in</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50 dark:bg-neutral-900/20" aria-live="assertive">
              {messages.map((msg: UIMessage) => (
                <AIChatBubble key={msg.id} role={msg.role as 'user' | 'assistant'} content={getMessageText(msg)} />
              ))}

              {/* Streaming/Typing indicator */}
              <AnimatePresence>
                {isStreaming && (messages[messages.length - 1]?.role as string) === 'user' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-50 dark:bg-neutral-850 flex items-center justify-center border border-neutral-100 dark:border-neutral-800">
                      <Bot className="h-4.5 w-4.5 text-neutral-500 dark:text-neutral-400" />
                    </div>
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl px-4 py-3 border border-neutral-100 dark:border-neutral-800">
                      <div className="flex gap-1.5 items-center h-2">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} aria-hidden="true" />
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} aria-hidden="true" />
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} aria-hidden="true" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-3 pt-2 bg-neutral-50/50 dark:bg-neutral-900/20">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.id}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3.5 py-1.5 text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-100 dark:border-neutral-700 hover:bg-primary-50 dark:hover:bg-primary-950/20 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-900 transition-colors"
                    >
                      {reply.icon} {reply.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <form onSubmit={handleFormSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about exports..."
                  className="flex-1 px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-neutral-450 dark:placeholder:text-neutral-550 border-none transition-all"
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;
