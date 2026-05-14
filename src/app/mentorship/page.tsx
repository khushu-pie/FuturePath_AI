"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function MentorshipPage() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hello! I am your FuturePath AI Mentor. What career path are you exploring today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: "ai", 
        content: "That sounds like a great path! I can help you understand the skills required, average salaries, or even guide you through a simulation. What would you like to know first?" 
      }]);
    }, 1000);
  };

  return (
    <div className="container mx-auto flex h-[calc(100vh-4rem)] max-w-4xl flex-col px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-black text-zinc-900 dark:text-white md:text-5xl">
          AI Career Mentor
        </h1>
        <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
          Ask anything about your future career.
        </p>
      </motion.div>

      {/* Chat Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-1 flex-col overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800"
      >
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={idx} 
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex max-w-[80%] gap-3 rounded-2xl p-4 ${
                msg.role === "user" 
                  ? "bg-blue-600 text-white" 
                  : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white"
              }`}>
                {msg.role === "ai" && (
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Icons.Bot size={14} />
                  </div>
                )}
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Software Engineering, MBA, or general career advice..."
              className="flex-1 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-105 disabled:opacity-50"
            >
              <Icons.Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
