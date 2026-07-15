

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
      text: "👋 Heyy..\nAsk me anything about me.",
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


// add 

  async function saveVisitorMessage(text) {
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
}

  const handleSend = async (text) => {
    if (!text.trim()) return;



console.log("Text =", text);
console.log("detectSecret =", detectSecret(text));

if (detectSecret(text)) {

  

    await prepareHeroVideo();

    // await saveVisitorMessage(text);

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
      {
        sender: "bot",
        text: "❤️",
      },
    ]);


   
    // Small cinematic delay
    setTimeout(() => {

   

        startEasterEgg();

    }, 800);

    return;
}

  

const userMessage = {
  sender: "user",
  text,
};

setMessages((prev) => [...prev, userMessage]);


 saveVisitorMessage(text);

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

  let message = "";

  // -----------------------------
  // Today's solved problems
  // -----------------------------
  if (profile.today.solved) {
    message += `✅ I solved ${profile.today.count} problem${
      profile.today.count > 1 ? "s" : ""
    } today.\n\n`;

    profile.today.questions.forEach((q, index) => {
      message += `${index + 1}. 🟢 ${q.title}\n`;
      message += `https://leetcode.com/problems/${q.titleSlug}/\n\n`;
    });
  } else {
    message += `❌ I haven't solved any LeetCode problem today.\n\n`;

    message += `📌 Recent solved problems:\n\n`;

    profile.recentSolved.forEach((q, index) => {
      message += `${index + 1}. ${q.title}\n`;
      message += `📅 ${q.relativeTime}\n`;
      message += `https://leetcode.com/problems/${q.titleSlug}/\n\n`;
    });
  }

  message +=
    "━━━━━━━━━━━━━━━━━━━━━━\n\n";

  message += `📊 Overall Profile\n\n`;

  message += `✅ Total Solved : ${profile.totalSolved}\n\n`;

  message += `🟢 Easy : ${profile.easy}\n`;

  message += `🟠 Medium : ${profile.medium}\n`;

  message += `🔴 Hard : ${profile.hard}\n\n`;

  message += `🏆 Ranking : ${profile.ranking}\n\n`;

  message += `${profile.profile}`;

  setMessages((prev) => [
    ...prev,
    {
      sender: "bot",
      text: message,
    },
  ]);
}
        
        else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "❌ Unable to fetch LeetCode profile. sorryyy for inconvenience",
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
              "⚠️ Unable to connect to backend. sorryyy for inconvenience",
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