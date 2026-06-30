import React from 'react';
import ChatMessage from './ChatMessage';

function ChatMessages({ messages, isTyping }) {
  return (
    <div style={{ maxHeight: '380px', overflowY: 'auto', marginBottom: '1rem', paddingRight: '0.25rem' }}>
      {messages.map((message, index) => (
        <ChatMessage key={`${message.role}-${index}`} role={message.role} text={message.text} />
      ))}
      {isTyping ? <ChatMessage role="assistant" text="..." /> : null}
    </div>
  );
}

export default ChatMessages;
