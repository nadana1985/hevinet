'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';
import { findResponse, quickReplies, type QuickReply } from '@/data/chatbot-responses';
import { useFocusTrap } from '@/hooks/useFocusTrap';

/**
 * Message type for chat history.
 */
interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

/**
 * Initial bot greeting message.
 */
const initialMessage: Message = {
  id: 'welcome',
  role: 'bot',
  content: `👋 **Hello! Welcome to HeviNet Trading!**

I'm here to help you with:
- 🌶️ Product information
- 📜 Certifications & quality
- 🚢 Shipping & logistics
- 💰 Pricing & quotes

How can I assist you today?`,
  timestamp: new Date(),
};

/**
 * Props for ChatBot component.
 */
interface ChatBotProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

// ── Generate unique ID ─────────────────────────────────────────────────
const generateId = () => Math.random().toString(36).substring(2, 9);

/**
 * ChatBot component - Rule-based chatbot for HeviNet.
 * Floating chat widget with quick replies and message history.
 * Toggle button is rendered by FloatingButtons for proper alignment.
 *
 * @example
 * <ChatBot isOpen={isOpen} onToggle={setIsOpen} />
 */
export function ChatBot({ isOpen = false, onToggle }: ChatBotProps) {
  const setIsOpen = onToggle || (() => {});
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Focus trap using dynamic hook
  useFocusTrap(chatRef, isOpen, () => setIsOpen(false));

  // ── Scroll to bottom when new messages arrive ──────────────────────────
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ── Focus input when chat opens ────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);


  // ── Handle sending a message ───────────────────────────────────────────
  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot typing
    setIsTyping(true);

    setTimeout(() => {
      // Find bot response
      const botResponse = findResponse(messageText);

      const botMessage: Message = {
        id: generateId(),
        role: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  // ── Handle Enter key ───────────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Handle quick reply click ───────────────────────────────────────────
  const handleQuickReply = (reply: QuickReply) => {
    handleSend(reply.message);
  };

  return (
    <>
      {/* ── Chat Window ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="HeviNet Assistant"
            className="fixed bottom-[148px] right-6 z-[60] w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col overflow-hidden"
          >
            {/* ── Header ────────────────────────────────────────────────── */}
            <div className="bg-primary-500 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">HeviNet Assistant</p>
                <p className="text-xs text-white/80">Usually replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ── Messages ──────────────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="assertive">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[85%] ${
                      msg.role === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === 'user'
                          ? 'bg-primary-100 dark:bg-primary-900'
                          : 'bg-neutral-100 dark:bg-neutral-800'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <User className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                      ) : (
                        <Bot className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-primary-500 text-white rounded-br-none'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-bl-none'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} aria-hidden="true" />
                        <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} aria-hidden="true" />
                        <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} aria-hidden="true" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* ── Quick Replies ─────────────────────────────────────────── */}
            {messages.length <= 4 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.id}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {reply.icon} {reply.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Input ─────────────────────────────────────────────────── */}
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 transition-all"
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
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
