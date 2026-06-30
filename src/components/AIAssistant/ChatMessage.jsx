import React from 'react';

function ChatMessage({ role, text }) {
  const isUser = role === 'user';

  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: '0.75rem' }}>
      <div
        style={{
          maxWidth: '80%',
          padding: '0.8rem 1rem',
          borderRadius: '1rem',
          background: isUser ? '#111827' : '#121212',
          color: '#f8fafc',
          boxShadow: isUser ? '0 8px 20px rgba(0, 0, 0, 0.4)' : '0 8px 18px rgba(255, 255, 255, 0.05)'
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default ChatMessage;
