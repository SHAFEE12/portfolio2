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


