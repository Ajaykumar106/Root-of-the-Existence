"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Archives() {
  return (
    <main className="bg-void-black text-starlight-white font-inter min-h-screen antialiased selection:bg-cobalt-nebula selection:text-starlight-white">
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-5 md:px-20 pt-32 pb-20 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
          <h1 className="font-space text-sm text-cobalt-nebula tracking-widest uppercase mb-4">RootX Domain: At_Live_3_2_Point</h1>
          <p className="font-mono text-[10px] text-secondary mb-8 leading-relaxed uppercase">
            Accessing restricted telemetry and theoretical research datasets. All queries are logged and monitored by the Ethics Board.
          </p>

          {/* Query Box */}
          <div className="bg-obsidian-grey/40 backdrop-blur-[20px] top-light-stroke p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">Query</h3>
            <div className="bg-void-black border border-mercury-silver/20 px-4 py-2 flex items-center">
              <input 
                type="text" 
                placeholder="Sector / Background Data / ID" 
                className="bg-transparent border-none outline-none text-xs font-mono text-starlight-white w-full placeholder:text-secondary/50"
              />
            </div>
          </div>

          {/* Source Matrix */}
          <div className="bg-obsidian-grey/40 backdrop-blur-[20px] top-light-stroke p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">Source Matrix</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 bg-void-black border-mercury-silver/20 checked:bg-cobalt-nebula rounded-none appearance-none checked:before:content-['✓'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center" />
                <span className="font-mono text-xs text-starlight-white tracking-widest">BIOLOGICAL</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 bg-void-black border border-mercury-silver/20 checked:bg-cobalt-nebula rounded-none appearance-none checked:before:content-['✓'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center" />
                <span className="font-mono text-xs text-secondary tracking-widest">CHEMICAL</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 bg-void-black border-mercury-silver/20 checked:bg-cobalt-nebula rounded-none appearance-none checked:before:content-['✓'] checked:before:text-white checked:before:text-[10px] checked:before:flex checked:before:items-center checked:before:justify-center" />
                <span className="font-mono text-xs text-starlight-white tracking-widest">DIGITAL</span>
              </label>
            </div>
          </div>

          {/* Connection Status */}
          <div className="bg-obsidian-grey/40 backdrop-blur-[20px] top-light-stroke p-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cobalt-nebula rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-starlight-white">ONLINE / STABLE</span>
            </div>
          </div>
        </aside>

        {/* Right Content Grid */}
        <section className="flex-1 flex flex-col gap-6">
          
          {/* Top Row Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-obsidian-grey/20 border border-mercury-silver/10 overflow-hidden group">
              <div className="h-48 overflow-hidden bg-black">
                <Image src="/assets/images/stellar_nebula.png" alt="Neural Lattice" width={600} height={300} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-space text-lg uppercase tracking-wider text-starlight-white font-medium">Neural Lattice Synthesis</h3>
                  <span className="material-symbols-outlined text-secondary text-[16px]">lock_open</span>
                </div>
                <p className="font-inter text-xs text-secondary leading-relaxed mb-6">
                  Attempting to map consciousness pathways using synthetic neural lace structures. Initial phase trials show high retention in localized cognitive networks.
                </p>
                <div className="w-full bg-void-black h-1 rounded-full overflow-hidden">
                  <div className="bg-cobalt-nebula w-3/4 h-full" />
                </div>
                <p className="font-mono text-[10px] text-secondary mt-2 uppercase tracking-widest">Status: Trial Ongoing</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-obsidian-grey/20 border border-mercury-silver/10 overflow-hidden group">
              <div className="h-48 overflow-hidden bg-black">
                <Image src="/assets/images/big_bang.png" alt="Quantum State" width={600} height={300} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-space text-lg uppercase tracking-wider text-starlight-white font-medium">Quantum State Archival</h3>
                  <span className="material-symbols-outlined text-secondary text-[16px]">lock_outline</span>
                </div>
                <p className="font-inter text-xs text-secondary leading-relaxed mb-6">
                  Stabilizing ephemeral quantum states into cold storage matrices. Current error rates require recalibration of the secondary containment field.
                </p>
                <div className="w-full bg-void-black h-1 rounded-full overflow-hidden">
                  <div className="bg-secondary w-1/4 h-full" />
                </div>
                <p className="font-mono text-[10px] text-secondary mt-2 uppercase tracking-widest">Status: Calibration</p>
              </div>
            </motion.div>

          </div>

          {/* Full Width Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-obsidian-grey/20 border border-mercury-silver/10 flex flex-col md:flex-row overflow-hidden group h-auto md:h-64">
            <div className="w-full md:w-1/2 overflow-hidden bg-black">
              <Image src="/assets/images/exoplanet.png" alt="Exoplanet Topography" width={600} height={400} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-space text-lg uppercase tracking-wider text-starlight-white font-medium">Exoplanetary Topography Mapping</h3>
                <span className="material-symbols-outlined text-cobalt-nebula text-[16px]">visibility</span>
              </div>
              <p className="font-inter text-xs text-secondary leading-relaxed mb-8">
                Processing deep space telemetry to construct high-fidelity topographical models of Sector 4 anomalies. Analysis indicates non-random geometric formations in sector alpha-nine.
              </p>
              <div className="w-full bg-void-black h-1 rounded-full overflow-hidden">
                <div className="bg-cobalt-nebula w-[95%] h-full" />
              </div>
              <p className="font-mono text-[10px] text-cobalt-nebula mt-2 uppercase tracking-widest">Status: Processing Complete</p>
            </div>
          </motion.div>

        </section>
      </div>
    </main>
  );
}
