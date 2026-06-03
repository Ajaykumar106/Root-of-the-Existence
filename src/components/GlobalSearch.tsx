"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ChevronRight } from "lucide-react";
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

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

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
              
              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="flex items-center gap-4 p-4 border-b border-white/10 shrink-0">
                  <Search className="w-6 h-6 text-blue-400" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search the encyclopedia..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-grow bg-transparent text-lg font-space text-white outline-none placeholder:text-white/30"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 ml-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-white/50" />
                  </button>
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
