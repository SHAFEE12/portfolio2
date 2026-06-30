import React from 'react';

function ChatHeader({ title, onClose }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <div>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#9ca3af' }}>{title}</p>
      </div>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          style={{
            border: 'none',
            background: 'rgba(255,255,255,0.08)',
            color: '#f8fafc',
            borderRadius: '999px',
            width: '34px',
            height: '34px',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          ×
        </button>
      ) : null}
    </div>
  );
}

export default ChatHeader;
