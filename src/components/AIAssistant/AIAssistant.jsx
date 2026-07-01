// import React, { useState } from 'react';
// import ChatWindow from './ChatWindow';
// import { ASSISTANT_CONFIG, SUGGESTION_ITEMS } from './constants';
// import { RESPONSES, FALLBACK_RESPONSE } from './responses';
// import { matchKeyword } from './keywords';

// function AIAssistant({ onClose }) {
//   const [messages, setMessages] = useState([{ role: 'assistant', text: ASSISTANT_CONFIG.initialMessage }]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = (value) => {
//     const userMessage = { role: 'user', text: value };
//     setMessages((prev) => [...prev, userMessage]);
//     setIsTyping(true);

//     setTimeout(() => {
//       const matched = matchKeyword(value);
//       const answer = matched ? RESPONSES[matched] : FALLBACK_RESPONSE;
//       setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
//       setIsTyping(false);
//     }, 400);
//   };

//   return (
//     <ChatWindow
//       title={ASSISTANT_CONFIG.title}
//       messages={messages}
//       isTyping={isTyping}
//       onSend={handleSend}
//       onClose={onClose}
//     />
//   );
// }

// export default AIAssistant;

import { useState, useRef, useEffect } from "react";

import "./AIAssistant.css";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import { responses, defaultResponse } from "./responses";

export default function AIAssistant({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello Commander.\n\nI'm Shafee AI.\nAsk me anything about me.",
    },
  ]);

  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const findAnswer = (question) => {
    const input = question.toLowerCase();

    for (const key in responses) {
      const item = responses[key];

      if (
        item.keywords.some((keyword) =>
          input.includes(keyword.toLowerCase())
        )
      ) {
        return item.answer;
      }
    }

    return defaultResponse;
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: findAnswer(text),
      };

      setMessages((prev) => [...prev, botMessage]);

      setTyping(false);
    }, 700);
  };

  if (!open) return null;

  return (
    <div className="assistant-overlay">
      <div className="assistant-window">
        {/* Header */}
        <div className="assistant-header">
          <div>
            <h2>🤖 Shafee AI</h2>
            <p>ONLINE</p>
          </div>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Chat */}
        <div className="assistant-chat">
          {messages.map((message, index) => (
            <ChatBubble key={index} message={message} />
          ))}

          {typing && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="assistant-footer">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}