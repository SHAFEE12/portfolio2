import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import SuggestionChips from './SuggestionChips';

function ChatWindow({ title, messages, isTyping, onSend, onClose }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '1.25rem',
        padding: '1rem',
        background: 'rgba(10, 10, 10, 0.98)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
        maxWidth: '360px',
        width: '100%',
        margin: '0',
        color: '#e5e7eb'
      }}
    >
      <ChatHeader title={title} onClose={onClose} />
      <div style={{ flex: 1, minHeight: '0', overflow: 'hidden' }}>
        <ChatMessages messages={messages} isTyping={isTyping} />
      </div>
      <ChatInput onSend={onSend} />
    </div>
  );
}

export default ChatWindow;
