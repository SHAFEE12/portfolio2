
import "./TypingIndicator.css";

export default function TypingIndicator() {
  return (
    <div className="typing-container">
      {/* <div className="bot-avatar"></div> */}

      <div className="typing-bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}