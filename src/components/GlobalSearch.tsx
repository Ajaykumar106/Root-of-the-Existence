"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ChevronRight, Sparkles, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MUSEUM_DATA } from "@/lib/museum";
import Link from "next/link";

// Flatten the entire museum database into a searchable array
type SearchResult = {
  id: string;
  exhibitId: string;
  title: string;
  type: "Exhibit" | "Sub-Module";
  description: string;
};

const searchIndex: SearchResult[] = [];
MUSEUM_DATA.forEach((exhibit) => {
  searchIndex.push({
    id: exhibit.id,
    exhibitId: exhibit.id,
    title: exhibit.title,
    type: "Exhibit",
    description: exhibit.description,
  });

  if (exhibit.subModules) {
    exhibit.subModules.forEach((sub) => {
      searchIndex.push({
        id: sub.id,
        exhibitId: exhibit.id,
        title: sub.title,
        type: "Sub-Module",
        description: sub.description,
      });
    });
  }
});

type ChatMessage = { role: "user" | "ai"; text: string };

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<"search" | "ai">("search");
  
  // Search State
  const [query, setQuery] = useState("");
  const router = useRouter();

  // AI Chat State
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  // Filter encyclopedia results
  const filteredResults = query
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (exhibitId: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/explore/${exhibitId}`);
  };

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
      {/* Mobile-Friendly Global Floating Buttons */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <Link 
          href="/pricing"
          className="hidden md:flex px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 transition-opacity font-space text-xs tracking-widest text-white uppercase font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]"
        >
          Upgrade to Pro
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full glass-card hover:bg-white/10 transition-colors group flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          aria-label="Search Cosmos"
        >
          <span className="hidden md:flex text-xs font-space tracking-widest text-white/50 group-hover:text-white/80 transition-colors items-center gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded-md text-[10px]">CTRL</kbd> + <kbd className="px-2 py-1 bg-white/10 rounded-md text-[10px]">K</kbd>
          </span>
          <Search className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[15vh] px-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col h-[70vh] max-h-[600px] overflow-hidden"
            >
              
              {/* Tabs */}
              <div className="flex border-b border-white/10 p-2 gap-2">
                <button
                  onClick={() => setTab("search")}
                  className={`flex-1 py-2 rounded-lg font-space text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${tab === "search" ? "bg-white/10 text-white" : "text-white/40 hover:bg-white/5"}`}
                >
                  <Search className="w-4 h-4" /> Encyclopedia
                </button>
                <button
                  onClick={() => setTab("ai")}
                  className={`flex-1 py-2 rounded-lg font-space text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${tab === "ai" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "text-white/40 hover:bg-white/5"}`}
                >
                  <Sparkles className="w-4 h-4" /> Ask COSMOS AI
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 ml-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>
              </div>

              {/* SEARCH TAB */}
              {tab === "search" && (
                <div className="flex flex-col flex-grow overflow-hidden">
                  <div className="flex items-center gap-4 p-4 border-b border-white/10 shrink-0">
                    <Search className="w-6 h-6 text-blue-400" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search the cosmos (e.g. 'Mars', 'NASA', 'Gravity')..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="flex-grow bg-transparent text-lg font-space text-white outline-none placeholder:text-white/30"
                    />
                  </div>
                  <div className="flex-grow overflow-y-auto p-2 scrollbar-thin">
                    {query === "" ? (
                      <div className="p-8 text-center text-white/40 font-space text-sm">
                        Enter a search term to explore the encyclopedia.
                      </div>
                    ) : filteredResults.length === 0 ? (
                      <div className="p-8 text-center text-white/40 font-space text-sm">
                        No results found for "{query}".
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {filteredResults.map((result) => (
                          <button
                            key={result.id}
                            onClick={() => handleSelect(result.exhibitId)}
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 text-left group transition-colors"
                          >
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-3">
                                <span className="font-space text-white text-lg font-medium group-hover:text-blue-400 transition-colors">
                                  {result.title}
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-space tracking-widest text-white/50 uppercase">
                                  {result.type}
                                </span>
                              </div>
                              <span className="text-sm text-white/50 line-clamp-1">
                                {result.description}
                              </span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* AI CHAT TAB */}
              {tab === "ai" && (
                <div className="flex flex-col flex-grow overflow-hidden bg-gradient-to-b from-transparent to-blue-900/10">
                  {/* Chat History */}
                  <div className="flex-grow overflow-y-auto p-6 scrollbar-thin flex flex-col gap-6">
                    {chatHistory.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                          <Bot className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="font-space text-xl font-bold text-white">I am COSMOS</h3>
                        <p className="text-white/50 max-w-sm text-sm">
                          Your digital guide to the universe. Ask me anything about space, astronomy, or physics.
                        </p>
                      </div>
                    )}
                    
                    {chatHistory.map((msg, i) => (
                      <div key={i} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-white/10" : "bg-blue-500/20 border border-blue-500/30"}`}>
                          {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-blue-400" />}
                        </div>
                        <div className={`p-4 rounded-2xl max-w-[80%] ${msg.role === "user" ? "bg-white/10 text-white rounded-tr-sm" : "bg-blue-500/10 text-blue-100 border border-blue-500/20 rounded-tl-sm leading-relaxed"}`}>
                          <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 rounded-tl-sm flex items-center gap-1">
                          <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-white/10 shrink-0 bg-[#0a0a0a]">
                    <form onSubmit={handleAskAI} className="relative flex items-center">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Ask a question..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        disabled={isTyping}
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-white font-space placeholder:text-white/30 outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
                      />
                      <button 
                        type="submit"
                        disabled={!chatInput.trim() || isTyping}
                        className="absolute right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 disabled:bg-white/10 disabled:text-white/30 transition-colors shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
