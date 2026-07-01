// import React from 'react';

// function TypingIndicator() {
//   return (
//     <div style={{ display: 'flex', gap: '0.25rem', padding: '0.5rem 0' }}>
//       <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: '#9ca3af' }} />
//       <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: '#9ca3af' }} />
//       <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: '#9ca3af' }} />
//     </div>
//   );
// }

// export default TypingIndicator;


import "./TypingIndicator.css";

export default function TypingIndicator() {
  return (
    <div className="typing-container">
      <div className="bot-avatar">🤖</div>

      <div className="typing-bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}