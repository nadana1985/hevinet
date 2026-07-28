'use client';

import { useState } from 'react';
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
      <ChatBot
        isOpen={isChatOpen}
        onToggle={setIsChatOpen}
      />
    </>
  );
}

export default FloatingActions;
