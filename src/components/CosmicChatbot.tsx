"use client";

import { useState, useRef, useEffect } from "react";
import { User, Send, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ChatMessage = { role: "user" | "ai"; text: string };

export default function CosmicChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping, isOpen]);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput.trim();
    setChatInput("");
    setChatHistory((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setChatHistory((prev) => [...prev, { role: "ai", text: data.response }]);
      } else {
        setChatHistory((prev) => [...prev, { role: "ai", text: data.error || "Neural link disrupted." }]);
      }
    } catch (err) {
      setChatHistory((prev) => [...prev, { role: "ai", text: "Communication failed. Check network connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-black border border-blue-500/50 hover:scale-110 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.6)] overflow-hidden ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open COSMOS AI"
      >
        <Image src="/assets/images/ai_logo.png" alt="Ask COSMOS AI" width={64} height={64} className="object-cover" />
      </button>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:max-w-md bg-[#0a0a0a]/95 backdrop-blur-2xl border border-blue-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col h-[60vh] max-h-[600px] min-h-[400px] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-blue-900/40 to-transparent shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black border border-blue-500/50 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Image src="/assets/images/ai_logo.png" alt="COSMOS AI" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <h3 className="font-space font-bold text-white text-sm">COSMOS AI</h3>
                  <span className="text-[10px] text-blue-400 font-space tracking-widest uppercase">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/50" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-grow overflow-y-auto p-4 scrollbar-thin flex flex-col gap-4 bg-gradient-to-b from-transparent to-blue-900/5">
              {chatHistory.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-white/50 text-xs max-w-[200px] font-space">
                    Ask me anything about the universe, physics, or our digital exhibits.
                  </p>
                </div>
              )}
              
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 overflow-hidden ${msg.role === "user" ? "bg-white/10" : "bg-black border border-blue-500/30"}`}>
                    {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Image src="/assets/images/ai_logo.png" alt="AI" width={32} height={32} className="object-cover" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[85%] ${msg.role === "user" ? "bg-white/10 text-white rounded-tr-sm" : "bg-blue-500/10 text-blue-100 border border-blue-500/20 rounded-tl-sm leading-relaxed"}`}>
                    <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-black border border-blue-500/30 flex items-center justify-center shrink-0 mt-1 overflow-hidden">
                    <Image src="/assets/images/ai_logo.png" alt="AI" width={32} height={32} className="object-cover" />
                  </div>
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-white/10 shrink-0 bg-[#0a0a0a]">
              <form onSubmit={handleAskAI} className="relative flex items-center">
                <input
                  autoFocus
                  type="text"
                  placeholder="Ask COSMOS..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={isTyping}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-white font-space text-sm placeholder:text-white/30 outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={!chatInput.trim() || isTyping}
                  className="absolute right-1 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 disabled:bg-transparent disabled:text-white/30 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
