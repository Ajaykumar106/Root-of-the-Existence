"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Network() {
  return (
    <main className="bg-void-black text-starlight-white font-inter min-h-screen antialiased selection:bg-cobalt-nebula selection:text-starlight-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 max-w-[1440px] mx-auto px-5 md:px-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-mono text-cobalt-nebula tracking-[0.2em] uppercase text-xs mb-4 block">LAB PORTAL</span>
            <h1 className="font-space text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Beyond The Terminator Line.
            </h1>
            <p className="font-inter text-secondary text-sm md:text-base leading-relaxed max-w-lg">
              RootX exists to engineer the infrastructure for humanity's permanent expansion into deep space. We do not hypothesize, we build the hard science requisite for multi-planetary existence. Our mandate is the deliberate, calculated conquest of the unknown.
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <Image src="/assets/images/earth.png" alt="Earth" width={500} height={500} className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] opacity-70" />
          </motion.div>
        </div>
      </section>

      {/* Global Lab Network */}
      <section className="py-20 w-full relative border-t border-mercury-silver/10 bg-surface-dim">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="font-space text-3xl md:text-4xl font-semibold uppercase mb-4">Global Lab Network</h2>
            <p className="font-inter text-secondary text-sm max-w-xl mx-auto">
              Live operational status of all ROOTX interstellar research outposts across Earth's primary extreme zones. Data encrypted via quantum relay.
            </p>
          </div>

          <div className="w-full h-64 md:h-96 border border-mercury-silver/10 bg-void-black flex items-center justify-center relative overflow-hidden mb-20 group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cobalt-nebula/20 via-transparent to-transparent" />
            <p className="font-mono text-secondary tracking-widest text-xs uppercase z-10">[ Secure Map Uplink Connecting... ]</p>
          </div>

          {/* Primary Hubs */}
          <div className="mb-10">
            <h3 className="font-space text-2xl font-semibold uppercase">Primary Hubs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hub 1 */}
            <div className="group border border-mercury-silver/10 bg-void-black overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden bg-black relative">
                <Image src="/assets/images/space_colony.png" alt="Geneva Nexus" width={500} height={300} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-void-black/80 px-2 py-1 text-starlight-white border border-mercury-silver/20 backdrop-blur">HUB.01</div>
              </div>
              <div className="p-6">
                <h4 className="font-space text-lg uppercase tracking-wider text-starlight-white mb-2">Geneva Nexus</h4>
                <p className="font-inter text-xs text-secondary leading-relaxed">
                  Primary quantum computing array and particle research division. Handles 80% of European sector analytics.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-mercury-silver/10 pt-4">
                  <span className="font-mono text-[10px] text-cobalt-nebula uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cobalt-nebula rounded-full animate-ping" /> OPERATIONAL</span>
                </div>
              </div>
            </div>

            {/* Hub 2 */}
            <div className="group border border-mercury-silver/10 bg-void-black overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden bg-black relative">
                <Image src="/assets/images/neptune.png" alt="Mariana Deep" width={500} height={300} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" />
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-void-black/80 px-2 py-1 text-starlight-white border border-mercury-silver/20 backdrop-blur">HUB.02</div>
              </div>
              <div className="p-6">
                <h4 className="font-space text-lg uppercase tracking-wider text-starlight-white mb-2">Mariana Deep</h4>
                <p className="font-inter text-xs text-secondary leading-relaxed">
                  High-pressure biological containment and astrobiology archiving facility. Sub-oceanic isolation protocol active.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-mercury-silver/10 pt-4">
                  <span className="font-mono text-[10px] text-cobalt-nebula uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cobalt-nebula rounded-full animate-ping" /> CLASSIFIED</span>
                </div>
              </div>
            </div>

            {/* Hub 3 */}
            <div className="group border border-mercury-silver/10 bg-void-black overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden bg-black relative">
                <Image src="/assets/images/mars.png" alt="Atacama Eye" width={500} height={300} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" />
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-void-black/80 px-2 py-1 text-starlight-white border border-mercury-silver/20 backdrop-blur">HUB.03</div>
              </div>
              <div className="p-6">
                <h4 className="font-space text-lg uppercase tracking-wider text-starlight-white mb-2">Atacama Eye</h4>
                <p className="font-inter text-xs text-secondary leading-relaxed">
                  Primary long-range orbital tracking and deep-space telemetry array. Coordinates with lunar satellites.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-mercury-silver/10 pt-4">
                  <span className="font-mono text-[10px] text-cobalt-nebula uppercase tracking-widest flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cobalt-nebula rounded-full animate-ping" /> OPERATIONAL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
