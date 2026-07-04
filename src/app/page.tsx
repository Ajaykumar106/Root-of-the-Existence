"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import * as satellite from "satellite.js";
import Image from "next/image";
import Navbar from "@/components/Navbar";

// Dynamically import the HeroStarfield background
const HeroStarfield = dynamic(() => import("@/components/scenes/HeroStarfield"), { ssr: false });

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  // Live Data State
  const [issPosition, setIssPosition] = useState<{ lat: string, lng: string, alt: string }>({ lat: "0.00", lng: "0.00", alt: "0.00" });
  const [solarFlares, setSolarFlares] = useState<number | string>("SCANNING...");
  const [tleData, setTleData] = useState<string | null>(null);

  // Decorative Telemetry State
  const [neuralSynapse, setNeuralSynapse] = useState(14208);
  const [darkMatterFlux, setDarkMatterFlux] = useState(0.003);

  // Fetch Live APIs on mount
  useEffect(() => {
    fetch('/api/n2yo')
      .then(res => res.json())
      .then(data => {
        if (data && data.tle) {
          setTleData(data.tle);
        }
      })
      .catch(console.error);

    fetch('/api/nasa?type=donki')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setSolarFlares(data.length);
        } else {
          setSolarFlares("NORMAL");
        }
      })
      .catch(() => setSolarFlares("OFFLINE"));
  }, []);

  // Update ISS position and decorative data every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralSynapse(prev => prev + Math.floor(Math.random() * 10) - 2);
      setDarkMatterFlux(prev => 0.003 + (Math.random() * 0.002 - 0.001));

      if (tleData) {
        const tleLines = tleData.split('\n');
        if (tleLines.length >= 2) {
          const satrec = satellite.twoline2satrec(tleLines[0], tleLines[1]);
          const date = new Date();
          const positionAndVelocity = satellite.propagate(satrec, date);
          
          if (positionAndVelocity.position && typeof positionAndVelocity.position !== 'boolean') {
            const gmst = satellite.gstime(date);
            const positionGd = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
            
            const longitude = satellite.degreesLong(positionGd.longitude);
            const latitude = satellite.degreesLat(positionGd.latitude);
            const altitude = positionGd.height;

            setIssPosition({
              lat: latitude.toFixed(4),
              lng: longitude.toFixed(4),
              alt: altitude.toFixed(2)
            });
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [tleData]);

  return (
    <main ref={containerRef} className="bg-void-black text-starlight-white font-inter selection:bg-cobalt-nebula selection:text-starlight-white antialiased overflow-x-hidden">
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Central Hero Visual (3D Starfield) */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <HeroStarfield />
          </Canvas>
          {/* Removed the heavy black gradients so all stars are fully visible */}
        </div>
        
        {/* Atmospheric Glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
          <div className="w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-cobalt-nebula/5 to-transparent rounded-full blur-3xl mix-blend-screen" />
        </div>
        
        {/* Minimalist Hero Content: Just the logo */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 text-center flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image src="/assets/images/rootx-logo.png" alt="ROOTX Logo Large" width={800} height={300} className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]" priority />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-mercury-silver">Scroll Data</span>
          <div className="w-px h-12 bg-gradient-to-b from-mercury-silver to-transparent" />
        </div>
      </section>

      {/* Current Telemetry Section */}
      <section className="py-32 w-full relative border-t border-mercury-silver/5 hud-scanline">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 relative z-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} className="flex flex-col md:flex-row justify-between items-end mb-16 relative">
            {/* Background glowing orb for the header */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cobalt-nebula/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cobalt-nebula opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cobalt-nebula"></span>
                </div>
                <span className="font-mono text-cobalt-nebula tracking-widest uppercase text-sm glitch-text" data-text="Live Feed Active">Live Feed Active</span>
              </div>
              <h2 className="font-space text-4xl md:text-5xl font-bold tracking-tight">System Telemetry</h2>
            </div>
            <div className="font-mono text-secondary mt-4 md:mt-0 text-right text-sm border-l-2 border-cobalt-nebula/50 pl-4 py-1">
              <span className="block text-starlight-white">NASA DONKI: <span className="text-emerald-400">ACTIVE</span></span>
              <span className="block text-starlight-white">N2YO ORBIT: <span className="text-emerald-400">SECURE</span></span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Live ISS Position (N2YO) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.1 }} className="hud-panel p-6 transition-all duration-300 group">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="flex justify-between items-start mb-8 relative">
                <span className="material-symbols-outlined text-secondary group-hover:text-cobalt-nebula transition-colors drop-shadow-[0_0_8px_rgba(0,41,255,0.5)]">satellite_alt</span>
                <span className="font-mono text-[10px] text-starlight-white border border-cobalt-nebula/40 px-2 py-0.5 bg-cobalt-nebula/10 rounded-sm">ISS.TLE</span>
              </div>
              <p className="font-mono text-secondary mb-2 text-[11px] uppercase tracking-wider">ISS Live Orbit</p>
              <div className="flex flex-col gap-2 mt-4 font-mono">
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-1">
                  <span className="text-secondary/70">LAT</span>
                  <span className="text-starlight-white font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{issPosition.lat}°</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-1">
                  <span className="text-secondary/70">LNG</span>
                  <span className="text-starlight-white font-semibold drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{issPosition.lng}°</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-1">
                  <span className="text-secondary/70">ALT</span>
                  <span className="text-cobalt-nebula font-bold drop-shadow-[0_0_8px_rgba(0,41,255,0.6)]">{issPosition.alt} km</span>
                </div>
              </div>
              <div className="w-full h-1 bg-void-black mt-6 relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full bg-cobalt-nebula w-[99%] shadow-[0_0_10px_rgba(0,41,255,1)]" />
              </div>
            </motion.div>

            {/* Live NASA Solar Flares */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.2 }} className="hud-panel p-6 transition-all duration-300 group">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-secondary group-hover:text-amber-500 transition-colors drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">local_fire_department</span>
                <span className="font-mono text-[10px] text-amber-500 border border-amber-500/40 px-2 py-0.5 bg-amber-500/10 rounded-sm">NASA.FLR</span>
              </div>
              <p className="font-mono text-secondary mb-2 text-[11px] uppercase tracking-wider">7-Day Solar Flares</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="font-space text-4xl font-bold text-starlight-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{solarFlares}</span>
                <span className="font-mono text-secondary text-xs">EVENTS</span>
              </div>
              <div className="w-full h-1 bg-void-black mt-10 relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full bg-amber-500 w-1/4 animate-pulse shadow-[0_0_10px_rgba(245,158,11,1)]" />
              </div>
            </motion.div>

            {/* Decorative Data 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.3 }} className="hud-panel p-6 transition-all duration-300 group glow-active">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-cobalt-nebula drop-shadow-[0_0_8px_rgba(0,41,255,0.8)]">memory</span>
                <span className="font-mono text-[10px] text-cobalt-nebula border border-cobalt-nebula/40 px-2 py-0.5 bg-cobalt-nebula/10 rounded-sm">NRL.11</span>
              </div>
              <p className="font-mono text-starlight-white mb-2 text-[11px] uppercase tracking-wider">Neural Synapse Load</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="font-space text-4xl font-bold text-starlight-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{neuralSynapse.toLocaleString()}</span>
                <span className="font-mono text-secondary text-xs">T/s</span>
              </div>
              <div className="mt-7 text-[10px] font-mono text-cobalt-nebula flex items-center gap-1 bg-cobalt-nebula/10 w-fit px-2 py-1 rounded-sm border border-cobalt-nebula/20">
                <span className="material-symbols-outlined text-[12px] animate-bounce">arrow_upward</span> Elevating Core
              </div>
            </motion.div>

            {/* Decorative Data 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.4 }} className="hud-panel p-6 transition-all duration-300 group">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-secondary group-hover:text-purple-500 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">blur_on</span>
                <span className="font-mono text-[10px] text-purple-400 border border-purple-500/40 px-2 py-0.5 bg-purple-500/10 rounded-sm">AST.99</span>
              </div>
              <p className="font-mono text-secondary mb-2 text-[11px] uppercase tracking-wider">Dark Matter Flux</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="font-space text-4xl font-bold text-starlight-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{darkMatterFlux.toFixed(4)}</span>
                <span className="font-mono text-secondary text-xs">μSv/h</span>
              </div>
              <div className="w-full h-1 bg-void-black mt-10 relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-1/4 h-full bg-purple-500 w-8 shadow-[0_0_10px_rgba(168,85,247,1)]" />
                <div className="absolute top-0 left-2/4 h-full bg-purple-500/50 w-4 shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Research Pillars Section */}
      <section id="research-pillars" className="py-32 w-full relative bg-surface-dim">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mercury-silver/20 to-transparent" />
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} className="text-center mb-20">
            <h2 className="font-space text-4xl md:text-5xl font-semibold mb-6">Research Pillars</h2>
            <p className="font-inter text-secondary text-lg max-w-2xl mx-auto">
              Investigating the fundamental mechanisms of reality across biological, cosmic, and cognitive domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.1 }} className="hud-panel overflow-hidden h-[500px] flex flex-col group cursor-pointer">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="absolute inset-0 bg-obsidian-grey/40 z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/80 to-transparent z-10" />
              <div className="absolute inset-0 z-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFb6GuM01HKJe0HKQqFPyE8HFyLx_tNxznxl9_atQXR95Cn9jrcfEIFoTD7ts2TQaUzKWVWhdIkPFLNQBdbJhRlPNVd-ja3xmY9hVgcLkLjquJXtahxRReShf5NnjKyPAEy4lKmRadH0nX1eZrymoM6S4MWMm-lUWYbj_mz1ItVLQAmDUnbf2RmZMBMHmqMU29_sOlsMHY0HNAHd3dCgiYeblOxhw5Q_SQDepiUvhR7B-X7fjWyeMy4_MNflUBN_ndl1epta32huQ" alt="Quantum Biology" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 filter group-hover:saturate-150" />
              </div>
              <div className="p-8 relative z-20 flex-1 flex flex-col justify-end">
                <div className="font-mono text-cobalt-nebula text-[10px] tracking-widest mb-4 border border-cobalt-nebula/30 bg-cobalt-nebula/10 px-2 py-1 w-fit rounded-sm shadow-[0_0_10px_rgba(0,41,255,0.2)]">SECTOR 01</div>
                <h3 className="font-space text-3xl uppercase mb-3 text-starlight-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Quantum Biology</h3>
                <p className="font-inter text-secondary mb-6 text-sm leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:text-starlight-white transition-colors duration-500">Mapping subatomic interactions within cellular structures to unlock regenerative potential.</p>
                <div className="mt-auto overflow-hidden h-6">
                  <a href="#" className="font-mono text-xs text-cobalt-nebula flex items-center gap-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 w-fit">
                    INITIALIZE UPLINK <span className="material-symbols-outlined text-[16px] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-full border border-cobalt-nebula/50 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(0,41,255,0.5)]">
                  <div className="w-2 h-2 bg-cobalt-nebula rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.2 }} className="hud-panel overflow-hidden h-[500px] flex flex-col group cursor-pointer">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="absolute inset-0 bg-obsidian-grey/40 z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/80 to-transparent z-10" />
              <div className="absolute inset-0 z-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwRpNx6lo-xit6hnfF0Cgr9b7WCgkgqhDQw3KpMBGyFPENVcn6M5dJVF3D2IHN_rm5ehVjMTT0y7cvPmDfPKHMuw7wmZcwqa3rd79_OnsO2b6VnyHeg4zK9q36x2z5nPJ6fkrW6SzjsiO6NqoPk98hr-Dmrp0xMhDxTu1QhYCMTc_TsjHMj_VrFsw6oJDlrc1Zy27Y8zuF_QffSSk62igWVC0nK9Ml7iCCe1evewWfM-6iZ-lx5tEthuqUxwU0ppEMTH24vFhsZDY" alt="Astro-Genetics" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 filter group-hover:saturate-150" />
              </div>
              <div className="p-8 relative z-20 flex-1 flex flex-col justify-end">
                <div className="font-mono text-amber-500 text-[10px] tracking-widest mb-4 border border-amber-500/30 bg-amber-500/10 px-2 py-1 w-fit rounded-sm shadow-[0_0_10px_rgba(245,158,11,0.2)]">SECTOR 02</div>
                <h3 className="font-space text-3xl uppercase mb-3 text-starlight-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Astro-Genetics</h3>
                <p className="font-inter text-secondary mb-6 text-sm leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:text-starlight-white transition-colors duration-500">Studying the mutation and adaptation of genetic sequences under deep-space radiation.</p>
                <div className="mt-auto overflow-hidden h-6">
                  <a href="#" className="font-mono text-xs text-amber-500 flex items-center gap-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 w-fit">
                    INITIALIZE UPLINK <span className="material-symbols-outlined text-[16px] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-full border border-amber-500/50 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants} transition={{ delay: 0.3 }} className="hud-panel overflow-hidden h-[500px] flex flex-col group cursor-pointer">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="absolute inset-0 bg-obsidian-grey/40 z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/80 to-transparent z-10" />
              <div className="absolute inset-0 z-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6B403W6HTjmbiex9t-G6pBzRx9HW7JaR1DfkJbGeiyy98zOhQZlFk-_oq1qDrROTgkZZ_EMzdl4cHuQnqlXdcRxqx63-wbxn-GxbTye2BVRfAO0kUnlMjr14GY4WnR8HccoFEKlEBKWXgBvfaAj3ZSTYVrNFwFbJ-DD9oHpIlXGzPfwLChFAp3K97RR-qh5zTpt24HrDyjSHQSl97soDXGFY0GGLrj9ja8_mRx0WwmvsbVFk_TXmZcHUT88tSOppN-nDKEfmP1uo" alt="Neural Arch" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 filter group-hover:saturate-150" />
              </div>
              <div className="p-8 relative z-20 flex-1 flex flex-col justify-end">
                <div className="font-mono text-purple-400 text-[10px] tracking-widest mb-4 border border-purple-500/30 bg-purple-500/10 px-2 py-1 w-fit rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.2)]">SECTOR 03</div>
                <h3 className="font-space text-3xl uppercase mb-3 text-starlight-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Neural Arch</h3>
                <p className="font-inter text-secondary mb-6 text-sm leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:text-starlight-white transition-colors duration-500">Designing synthetic cognitive frameworks capable of interfacing with human consciousness.</p>
                <div className="mt-auto overflow-hidden h-6">
                  <a href="#" className="font-mono text-xs text-purple-400 flex items-center gap-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 w-fit">
                    INITIALIZE UPLINK <span className="material-symbols-outlined text-[16px] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-full border border-purple-500/50 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-void-black border-t border-mercury-silver/10 w-full relative z-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image src="/assets/images/rootx-logo.png" alt="ROOTX Logo" width={150} height={45} className="object-contain" />
            <span className="text-mercury-silver font-mono text-xs text-center md:text-left">
              © 2026 ROOTX INTERSTELLAR RESEARCH DIVISION. ALL TELEMETRY ENCRYPTED.
            </span>
          </div>
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a className="text-secondary/60 hover:text-starlight-white font-mono text-xs hover:text-cobalt-nebula transition-colors" href="#">PRIVACY PROTOCOL</a>
            <a className="text-secondary/60 hover:text-starlight-white font-mono text-xs hover:text-cobalt-nebula transition-colors" href="#">QUANTUM ENCRYPTION</a>
            <a className="text-secondary/60 hover:text-starlight-white font-mono text-xs hover:text-cobalt-nebula transition-colors" href="#">ETHICS BOARD</a>
            <a className="text-secondary/60 hover:text-starlight-white font-mono text-xs hover:text-cobalt-nebula transition-colors" href="#">LABORATORY PORTAL</a>
          </nav>
        </div>
      </footer>

    </main>
  );
}
