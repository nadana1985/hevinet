'use client';

import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface AIChatBubbleProps {
  role: 'user' | 'bot' | 'assistant' | 'system';
  content: string;
  className?: string;
}

/**
 * A lightweight custom markdown parser to convert basic markdown constructs
 * into HTML without requiring heavy external dependencies.
 */
function parseMarkdown(text: string): string {
  if (!text) return '';

  let html = text
    // Escape HTML tags to prevent XSS
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 1. Code blocks
  html = html.replace(
    /```(\w*)\n([\s\S]*?)```/g,
    (_, lang, code) =>
      `<pre class="bg-neutral-900 text-neutral-100 p-4 rounded-xl overflow-x-auto text-xs my-3 font-mono border border-neutral-800"><code>${code.trim()}</code></pre>`
  );

  // 2. Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="bg-neutral-100 dark:bg-neutral-800 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>'
  );

  // 3. Bold text
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // 4. Bullet points
  const lines = html.split('\n');
  let inList = false;
  const parsedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const content = trimmed.substring(2);
      let listStart = '';
      if (!inList) {
        inList = true;
        listStart = '<ul class="list-disc pl-5 my-2 space-y-1">';
      }
      return `${listStart}<li>${content}</li>`;
    } else {
      let listEnd = '';
      if (inList) {
        inList = false;
        listEnd = '</ul>';
      }
      return `${listEnd}${line}`;
    }
  });

  if (inList) {
    parsedLines.push('</ul>');
  }

  html = parsedLines.join('\n');

  // 5. Line breaks / paragraphs
  html = html
    .split(/\n{2,}/)
    .map((p) => {
      // If paragraph contains a list, pre, block, don't wrap in p tag to avoid invalid HTML nesting
      if (p.startsWith('<ul') || p.startsWith('<pre') || p.endsWith('</ul>') || p.endsWith('</pre>')) {
        return p;
      }
      return `<p class="leading-relaxed mb-2">${p.replace(/\n/g, '<br />')}</p>`;
    })
    .join('');

  return html;
}

export function AIChatBubble({ role, content, className }: AIChatBubbleProps) {
  const isBot = role === 'bot' || role === 'assistant' || role === 'system';

  return (
    <div
      className={cn(
        'flex gap-3 max-w-[85%] sm:max-w-[75%]',
        isBot ? 'self-start' : 'self-end flex-row-reverse',
        className
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border',
          isBot
            ? 'bg-primary-50 border-primary-100 text-primary-600 dark:bg-primary-950/20 dark:border-primary-900/40 dark:text-primary-400'
            : 'bg-neutral-50 border-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300'
        )}
      >
        {isBot ? <Bot className="h-4.5 w-4.5" /> : <User className="h-4.5 w-4.5" />}
      </div>

      {/* Bubble Content */}
      <div
        className={cn(
          'rounded-2xl px-4 py-3 text-sm shadow-sm transition-colors border',
          isBot
            ? 'bg-white border-neutral-100 dark:bg-neutral-900 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200'
            : 'bg-primary-500 border-primary-500 text-white font-medium shadow-primary-500/10'
        )}
      >
        {isBot ? (
          <div
            className="prose prose-sm dark:prose-invert max-w-none space-y-1.5"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
          />
        ) : (
          <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );
}

export default AIChatBubble;
