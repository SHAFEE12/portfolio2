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









// import React from "react";
// import ChatMessage from "./ChatMessage";
// import { useEasterEgg } from "../../context/EasterEggContext";
// import secretVideo from "../../assets/videos/secret.mp4";

// function ChatMessages({ messages, isTyping }) {
//   const { isActive } = useEasterEgg();

//   if (isActive) {
//     return (
//       <div
//         style={{
//           maxHeight: "380px",
//           height: "380px",
//           overflow: "hidden",
//           borderRadius: "14px",
//         }}
//       >
//         <video
//           autoPlay
//           muted
//           playsInline
//           controls={false}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         >
//           <source src={secretVideo} type="video/mp4" />
//         </video>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         maxHeight: "380px",
//         overflowY: "auto",
//         marginBottom: "1rem",
//         paddingRight: "0.25rem",
//       }}
//     >
//       {messages.map((message, index) => (
//         <ChatMessage
//           key={`${message.role}-${index}`}
//           role={message.role}
//           text={message.text}
//         />
//       ))}

//       {isTyping && (
//         <ChatMessage
//           role="assistant"
//           text="..."
//         />
//       )}
//     </div>
//   );
// }

// export default ChatMessages;
