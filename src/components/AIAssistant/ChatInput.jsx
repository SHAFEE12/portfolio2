import React, { useState } from 'react';

function ChatInput({ onSend }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem' }}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask about the portfolio..."
        style={{
          flex: 1,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '999px',
          padding: '0.75rem 1rem',
          background: 'rgba(255,255,255,0.05)',
          color: '#f8fafc'
        }}
      />
      <button
        type="submit"
        style={{
          border: 'none',
          borderRadius: '999px',
          padding: '0.75rem 1rem',
          background: '#111827',
          color: '#f8fafc',
          cursor: 'pointer'
        }}
      >
        →
      </button>
    </form>
  );
}

export default ChatInput;
