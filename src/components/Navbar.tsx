"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-cobalt-nebula border-b-2 border-cobalt-nebula pb-1 font-mono uppercase tracking-widest text-xs hover:bg-starlight-white/5 transition-all duration-200";
    }
    return "text-secondary hover:text-starlight-white transition-colors duration-300 font-mono uppercase tracking-widest text-xs hover:bg-starlight-white/5 px-2 py-1";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-mercury-silver/10 shadow-[0_1px_0_0_rgba(226,226,226,0.05)] h-20 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 flex justify-between items-center h-full w-full">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <Image src="/assets/images/rootx-logo.png" alt="ROOTX Logo" width={120} height={40} className="object-contain" priority />
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClass("/")}>MISSION</Link>
          <a className="text-secondary hover:text-starlight-white transition-colors duration-300 font-mono uppercase tracking-widest text-xs hover:bg-starlight-white/5 px-2 py-1" href="/#research-pillars">RESEARCH</a>
          <Link href="/network" className={getLinkClass("/network")}>NETWORK</Link>
          <Link href="/archives" className={getLinkClass("/archives")}>ARCHIVES</Link>
        </nav>
        {/* Trailing Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-secondary">
            <button className="hover:text-starlight-white transition-colors hover:bg-starlight-white/5 p-2 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">settings_input_component</span>
            </button>
            <button className="hover:text-starlight-white transition-colors hover:bg-starlight-white/5 p-2 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">language</span>
            </button>
          </div>
          <button className="bg-transparent border border-starlight-white text-starlight-white font-mono text-xs px-6 py-2.5 rounded-none hover:bg-starlight-white hover:text-void-black transition-all duration-300 tracking-wider">
            ACCESS TERMINAL
          </button>
        </div>
      </div>
    </header>
  );
}
