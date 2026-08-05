'use client';

import { useState } from 'react';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { Sparkles, ArrowRight, Bot, Send } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AIChatBubble } from '@/components/ui/AIChatBubble';

const PRESETS = [
  {
    label: 'Turmeric Sourcing',
    prompt: 'What makes your Erode Turmeric Powder premium and what are the export specifications?',
  },
  {
    label: 'Shipping Logistics',
    prompt: 'Tell me about HeviNet shipping timelines to Singapore and Malaysia. What are the MOQ terms?',
  },
  {
    label: 'A2 Ghee Sourcing',
    prompt: 'Can you explain the traditional Bilona method used to produce your A2 cow ghee?',
  },
];

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
 * AIPlayground Section - Interactive playground showcasing real-time AI streams
 * using preset B2B queries and dynamic chat streams.
 */
export function AIPlayground() {
  const [input, setInput] = useState('');

  // Setup Vercel AI SDK useChat Hook (defaults to /api/chat route)
  const {
    messages,
    status,
    sendMessage,
    setMessages,
  } = useChat({
    messages: [],
  });

  const isStreaming = status === 'streaming' || status === 'submitted';

  const handlePresetClick = (prompt: string) => {
    // Clear previous playground conversation to keep the playground focused
    setMessages([]);
    sendMessage({ text: prompt });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <section className="py-20 bg-neutral-50/50 dark:bg-neutral-900/10 border-y border-neutral-100 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-xs font-bold mb-4 border border-primary-100/50 dark:border-primary-900/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4">
            AI Interactive Playground
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Test our export assistant. Select one of the preset B2B queries below or write a custom question to explore real-time responses.
          </p>
        </div>

        {/* Playground Frame */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left Column: Preset triggers */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
              Select a Preset Prompt
            </p>
            {PRESETS.map((preset, index) => (
              <button
                key={index}
                disabled={isStreaming}
                onClick={() => handlePresetClick(preset.prompt)}
                className="text-left w-full transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Card
                  hover
                  padding="sm"
                  className="bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800 hover:border-primary-200 dark:hover:border-primary-900/40 h-full flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {preset.label}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {preset.prompt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-primary-500 mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span>Ask AI</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Terminal Frame */}
          <div className="md:col-span-2 flex flex-col border border-neutral-150 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-2xl shadow-xl overflow-hidden min-h-[380px] h-full justify-between">
            {/* Terminal Top bar */}
            <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-150 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 ml-2 font-mono">
                  hevi-bot-stream.exe
                </span>
              </div>
              {isStreaming && (
                <span className="text-[10px] font-bold text-primary-500 animate-pulse font-mono uppercase">
                  Streaming...
                </span>
              )}
            </div>

            {/* Output screen */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 font-sans max-h-[300px]">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-neutral-400 dark:text-neutral-500">
                  <Bot className="h-10 w-10 text-neutral-300 dark:text-neutral-850 mb-3" />
                  <p className="text-sm font-semibold">Terminal Screen Empty</p>
                  <p className="text-xs max-w-xs mt-1 leading-relaxed">
                    Select a preset B2B scenario or enter a message below to watch streaming replies.
                  </p>
                </div>
              ) : (
                messages.map((msg: UIMessage) => (
                  <AIChatBubble key={msg.id} role={msg.role as 'user' | 'assistant'} content={getMessageText(msg)} />
                ))
              )}
            </div>

            {/* Bottom Input block */}
            <div className="p-4 border-t border-neutral-150 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
              <form onSubmit={handleFormSubmit} className="flex gap-2">
                <input
                  type="text"
                  maxLength={150}
                  value={input}
                  disabled={isStreaming}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a custom B2B inquiry... (max 150 chars)"
                  className="flex-1 px-4 py-2.5 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-xl text-sm border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-neutral-450 dark:placeholder:text-neutral-550 transition-all disabled:opacity-60"
                  aria-label="Playground query input"
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  variant="primary"
                  className="w-10 h-10 px-0 py-0 flex items-center justify-center shrink-0 rounded-xl"
                  aria-label="Send message to playground"
                >
                  <Send className="h-4.5 w-4.5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIPlayground;
