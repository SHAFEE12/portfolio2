
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

export default function ChatBubble({ message }) {
  const isBot = message.sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex items-end gap-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10">
          <Bot className="h-5 w-5 text-cyan-400" />
        </div>
      )}

      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 whitespace-pre-line shadow-lg backdrop-blur-xl ${
          isBot
            ? "border border-cyan-500/20 bg-slate-900/80 text-slate-100"
            : "bg-cyan-500 text-black"
        }`}
      >
        {message.text}
      </div>

      {!isBot && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500">
          <User className="h-5 w-5 text-black" />
        </div>
      )}
    </motion.div>
  );
}