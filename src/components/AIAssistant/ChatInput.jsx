// import React, { useState } from 'react';

// function ChatInput({ onSend }) {
//   const [value, setValue] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!value.trim()) return;
//     onSend(value);
//     setValue('');
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem' }}>
//       <input
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//         placeholder="Ask about the portfolio..."
//         style={{
//           flex: 1,
//           border: '1px solid rgba(255, 255, 255, 0.12)',
//           borderRadius: '999px',
//           padding: '0.75rem 1rem',
//           background: 'rgba(255,255,255,0.05)',
//           color: '#f8fafc'
//         }}
//       />
//       <button
//         type="submit"
//         style={{
//           border: 'none',
//           borderRadius: '999px',
//           padding: '0.75rem 1rem',
//           background: '#111827',
//           color: '#f8fafc',
//           cursor: 'pointer'
//         }}
//       >
//         →
//       </button>
//     </form>
//   );
// }

// export default ChatInput;


// import detectSecret from "../../utils/SecretDetector";
// import useEasterEgg from "../../hooks/useEasterEgg";

// import "./ChatInput.css";
// import { useState } from "react";

// export default function ChatInput({ onSend }) {
//   const [message, setMessage] = useState("");

//   const handleSend = () => {
//     const text = message.trim();

//     if (!text) return;



//     onSend(text);
//     setMessage("");
 

// if (detectSecret(message)) {

//     startEasterEgg();

//     return;

//     if(detectSecret(message)){

//     console.log("Secret Activated");

//     startEasterEgg();

//     return;
// }
// }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSend();
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <form className="chat-input-container" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="chat-input"
//         placeholder="Ask me anything..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />

//       <button className="send-btn" type="submit" aria-label="Send message">
//         →
//       </button>
//     </form>
//   );
// }







import { prepareHeroVideo } from "../../utils/videoController";
import "./ChatInput.css";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    onSend(text);

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <form
      className="chat-input-container"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="chat-input"
        placeholder="Ask me anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="send-btn"
        type="submit"
        aria-label="Send message"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12 20 4l-4.5 16-3.2-6.3L4 12Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="m12.3 13.7 3.2-3.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </button>
    </form>
  );
}


