// // import React, { useState } from 'react';
// // import ChatWindow from './ChatWindow';
// // import { ASSISTANT_CONFIG, SUGGESTION_ITEMS } from './constants';
// // import { RESPONSES, FALLBACK_RESPONSE } from './responses';
// // import { matchKeyword } from './keywords';

// // function AIAssistant({ onClose }) {
// //   const [messages, setMessages] = useState([{ role: 'assistant', text: ASSISTANT_CONFIG.initialMessage }]);
// //   const [isTyping, setIsTyping] = useState(false);

// //   const handleSend = (value) => {
// //     const userMessage = { role: 'user', text: value };
// //     setMessages((prev) => [...prev, userMessage]);
// //     setIsTyping(true);

// //     setTimeout(() => {
// //       const matched = matchKeyword(value);
// //       const answer = matched ? RESPONSES[matched] : FALLBACK_RESPONSE;
// //       setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
// //       setIsTyping(false);
// //     }, 400);
// //   };

// //   return (
// //     <ChatWindow
// //       title={ASSISTANT_CONFIG.title}
// //       messages={messages}
// //       isTyping={isTyping}
// //       onSend={handleSend}
// //       onClose={onClose}
// //     />
// //   );
// // }

// // export default AIAssistant;


// // egegegaegaedgasdfuasdfhfiuwdfh






// import { useState, useRef, useEffect } from "react";

// import "./AIAssistant.css";

// import ChatBubble from "./ChatBubble";
// import ChatInput from "./ChatInput";
// import TypingIndicator from "./TypingIndicator";

// import { responses, defaultResponse } from "./responses";

// export default function AIAssistant({ open, onClose }) {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "👋 Hello Commander.\n\nI'm Shafee AI.\nAsk me anything about me.",
//     },
//   ]);

//   const [typing, setTyping] = useState(false);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, typing]);

//   const findAnswer = (question) => {
//     const input = question.toLowerCase();

//     for (const key in responses) {
//       const item = responses[key];

//       if (
//         item.keywords.some((keyword) =>
//           input.includes(keyword.toLowerCase())
//         )
//       ) {
//         return item.answer;
//       }
//     }

//     return defaultResponse;
//   };

//   // const handleSend = (text) => {
//   //   if (!text.trim()) return;

//   //   const userMessage = {
//   //     sender: "user",
//   //     text,
//   //   };

//   //   setMessages((prev) => [...prev, userMessage]);

//   //   setTyping(true);

//   //   setTimeout(() => {
//   //     const botMessage = {
//   //       sender: "bot",
//   //       text: findAnswer(text),
//   //     };

//   //     setMessages((prev) => [...prev, botMessage]);

//   //     setTyping(false);
//   //   }, 700);
//   // };


//   const handleSend = async (text) => {
//   if (!text.trim()) return;

//   const userMessage = {
//     sender: "user",
//     text,
//   };

//   setMessages((prev) => [...prev, userMessage]);

//   setTyping(true);

//   const input = text.toLowerCase();

//   // Questions related to LeetCode
//   const leetcodeKeywords = [
//     "leetcode",
//     "dsa",
//     "solve",
//     "solved",
//     "problem",
//     "coding",
//     "ranking",
//   ];

//   const isLeetcodeQuestion = leetcodeKeywords.some((keyword) =>
//     input.includes(keyword)
//   );

//   if (isLeetcodeQuestion) {
//     try {
//       const response = await fetch("http://localhost:5000/api/leetcode");

//       const result = await response.json();

//       if (result.success) {
//         const profile = result.data;

//         const botMessage = {
//           sender: "bot",
//           text: `✅ Yes!

// I have solved ${profile.totalSolved} LeetCode problems.

// 🟢 Easy : ${profile.easy}
// 🟠 Medium : ${profile.medium}
// 🔴 Hard : ${profile.hard}

// 🏆 Ranking : ${profile.ranking}

// 🔗 ${profile.profile}`,
//         };

//         setMessages((prev) => [...prev, botMessage]);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "bot",
//             text: "Unable to fetch LeetCode profile.",
//           },
//         ]);
//       }
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "bot",
//           text: "Backend server is offline.",
//         },
//       ]);
//     }

//     setTyping(false);
//     return;
//   }

//   // Existing responses
//   setTimeout(() => {
//     const botMessage = {
//       sender: "bot",
//       text: findAnswer(text),
//     };

//     setMessages((prev) => [...prev, botMessage]);

//     setTyping(false);
//   }, 700);
// };




//   if (!open) return null;

//   return (
//     <div className="assistant-overlay">
//       <div className="assistant-window">
//         {/* Header */}
//         <div className="assistant-header">
//           <div>
//             <h2>🤖 Shafee AI</h2>
//             <p>ONLINE</p>
//           </div>

//           <button className="close-btn" onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         {/* Chat */}
//         <div className="assistant-chat">
//           {messages.map((message, index) => (
//             <ChatBubble key={index} message={message} />
//           ))}

//           {typing && <TypingIndicator />}

//           <div ref={messagesEndRef} />
//         </div>

//         {/* Footer */}
//         <div className="assistant-footer">
//           <ChatInput onSend={handleSend} />
//         </div>
//       </div>
//     </div>
//   );
// }

import { prepareHeroVideo } from "../../utils/videoController";
import detectSecret from "../../utils/SecretDetector";
import useEasterEgg from "../../hooks/useEasterEgg";

import SuggestionChips from "./SuggestionChips";

import { useState, useRef, useEffect } from "react";

import "./AIAssistant.css";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import { responses, defaultResponse } from "./responses";

export default function AIAssistant({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello Commander.\n\nI'm Shafee AI.\nAsk me anything about me.",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const { startEasterEgg } = useEasterEgg();

  const messagesEndRef = useRef(null);

  useEffect(() => {
  if (!localStorage.getItem("sessionId")) {
    const id =
      Date.now().toString() +
      Math.random().toString(36).substring(2);

    localStorage.setItem("sessionId", id);
  }
}, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const findAnswer = (question) => {
    const input = question.toLowerCase();

    for (const key in responses) {
      const item = responses[key];

      if (
        item.keywords.some((keyword) =>
          input.includes(keyword.toLowerCase())
        )
      ) {
        return item.answer;
      }
    }

    return defaultResponse;
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;



console.log("Text =", text);
console.log("detectSecret =", detectSecret(text));

if (detectSecret(text)) {

    console.log("🎬 Preparing Hero Video...");

    await prepareHeroVideo();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
      {
        sender: "bot",
        text: "❤️ Access Granted...",
      },
    ]);

    // Small cinematic delay
    setTimeout(() => {

        console.log("🚀 Starting Easter Egg");

        startEasterEgg();

    }, 800);

    return;
}

    // const userMessage = {
    //   sender: "user",
    //   text,
    // };

    // setMessages((prev) => [...prev, userMessage]);

    // setTyping(true);

const userMessage = {
  sender: "user",
  text,
};

setMessages((prev) => [...prev, userMessage]);

// Save visitor message to backend
try {
  await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: text,
      sessionId: localStorage.getItem("sessionId"),
      browser: navigator.userAgent,
      device: /Mobi|Android/i.test(navigator.userAgent)
        ? "Mobile"
        : "Desktop",
      page: window.location.pathname,
    }),
  });
} catch (error) {
  console.error("Failed to save visitor message:", error);
}

setTyping(true);


    const input = text.toLowerCase();

    const leetcodeKeywords = [
      "leetcode",
      "dsa",
      "solve",
      "solved",
      "problem",
      "coding",
      "ranking",
      "today",
      "question",
    ];

    const isLeetcodeQuestion = leetcodeKeywords.some((word) =>
      input.includes(word)
    );

    if (isLeetcodeQuestion) {
      try {
       const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/leetcode`
);

        const result = await response.json();

        if (result.success) {
          const profile = result.data;

          const botMessage = {
            sender: "bot",
            text: `✅ Yes!

I have solved ${profile.totalSolved} LeetCode problems.

🟢 Easy : ${profile.easy}

🟠 Medium : ${profile.medium}

🔴 Hard : ${profile.hard}

🏆 Ranking : ${profile.ranking}

🔗 ${profile.profile}`,
          };

          setMessages((prev) => [...prev, botMessage]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "❌ Unable to fetch LeetCode profile.",
            },
          ]);
        }
      } catch (error) {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              "⚠️ Unable to connect to backend.\n\nMake sure your backend is running.",
          },
        ]);
      }

      setTyping(false);
      return;
    }

    // Existing Responses

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: findAnswer(text),
      };

      setMessages((prev) => [...prev, botMessage]);

      setTyping(false);
    }, 700);
  };

  if (!open) return null;

  return (
    <div className="assistant-overlay ai-section">

      
      <div className="assistant-window">
        {/* Header */}

        <div className="assistant-header">
          <div>
            <h2> Shafee AI</h2>
            {/* <p>ONLINE</p> */}
          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Chat */}

        <div className="assistant-chat">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
            />
          ))}

          {typing && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}

        <div className="assistant-footer">
          {/* <ChatInput onSend={handleSend} /> */}
          <SuggestionChips
    onSelect={handleSend}
/>

<ChatInput
    onSend={handleSend}
/>
        </div>
      </div>
    </div>
  );
}