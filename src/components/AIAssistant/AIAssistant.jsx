import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { ASSISTANT_CONFIG, SUGGESTION_ITEMS } from './constants';
import { RESPONSES, FALLBACK_RESPONSE } from './responses';
import { matchKeyword } from './keywords';

function AIAssistant({ onClose }) {
  const [messages, setMessages] = useState([{ role: 'assistant', text: ASSISTANT_CONFIG.initialMessage }]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (value) => {
    const userMessage = { role: 'user', text: value };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const matched = matchKeyword(value);
      const answer = matched ? RESPONSES[matched] : FALLBACK_RESPONSE;
      setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <ChatWindow
      title={ASSISTANT_CONFIG.title}
      messages={messages}
      isTyping={isTyping}
      onSend={handleSend}
      onClose={onClose}
    />
  );
}

export default AIAssistant;
