'use client';

import { useState, Suspense } from 'react';
import { FloatingButtons } from './FloatingButtons';
import { ChatBot } from '@/components/chatbot/ChatBot';

/**
 * Client wrapper component that manages all floating actions.
 * Handles chat state and renders both FloatingButtons and ChatBot.
 *
 * @example
 * <FloatingActions />
 */
export function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <FloatingButtons
        onChatToggle={setIsChatOpen}
        isChatOpen={isChatOpen}
      />
      <Suspense fallback={null}>
        <ChatBot
          isOpen={isChatOpen}
          onToggle={setIsChatOpen}
        />
      </Suspense>
    </>
  );
}

export default FloatingActions;
