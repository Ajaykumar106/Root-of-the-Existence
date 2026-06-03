"use client";

import { MuseumExhibit, SubModule } from "@/lib/museum";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink, Activity, Rocket, History, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function SubModuleClient({ exhibit, subModule }: { exhibit: MuseumExhibit; subModule: SubModule }) {
  return (
    <div className="w-full min-h-screen pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <Link 
          href={`/explore/${exhibit.id}`}
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-card hover:bg-white/10 transition-colors text-sm font-space tracking-widest uppercase pointer-events-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {exhibit.title}
        </Link>
      </nav>

      {/* Massive Hero Banner */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end p-8 md:p-16 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={subModule.imagePath}
            alt={subModule.title}
            fill
            className="object-cover mix-blend-screen"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-5xl mx-auto w-full"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 text-xs font-space tracking-widest uppercase">
              Classified Research Data
            </span>
          </div>
          <h1 className="font-space text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            {subModule.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
            {subModule.description}
          </p>
        </motion.div>
      </section>

      {/* Core Research Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 mt-20 flex flex-col gap-16"
      >
        
        {/* At a Glance (Components) */}
        <motion.section variants={fadeUp} className="glass-panel p-8 md:p-12">
          <h2 className="font-space text-3xl font-bold mb-8 flex items-center gap-3">
            <Activity className="w-6 h-6 text-blue-400" />
            Planetary / Mission Telemetry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subModule.components.map((comp, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 glass-card border border-white/5 hover:border-blue-400/30 transition-colors">
                <span className="text-xs text-blue-400 uppercase tracking-widest">{comp.label}</span>
                <span className="font-space font-bold text-lg">{comp.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The Timeline Archive */}
        <motion.section variants={fadeUp} className="flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row gap-8 items-start glass-panel p-8 md:p-12 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center flex-shrink-0">
              <History className="w-6 h-6 text-slate-300" />
            </div>
            <div>
              <h3 className="font-space text-2xl font-bold mb-2 text-slate-200">Historical Context</h3>
              <p className="text-sm font-space text-slate-400 tracking-widest uppercase mb-4">The Past</p>
              <p className="text-lg text-white/80 leading-relaxed">{subModule.past}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start glass-panel p-8 md:p-12 border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5" />
            <div className="w-16 h-16 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_20px_#3b82f6]">
              <Activity className="w-6 h-6 text-blue-300" />
            </div>
            <div className="relative z-10">
              <h3 className="font-space text-2xl font-bold mb-2 text-blue-100">Live Status</h3>
              <p className="text-sm font-space text-blue-400 tracking-widest uppercase mb-4">The Present</p>
              <p className="text-lg text-white/90 leading-relaxed font-medium">{subModule.present}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start glass-panel p-8 md:p-12 hover:shadow-[0_0_40px_rgba(245,158,11,0.05)] transition-shadow">
            <div className="w-16 h-16 rounded-full bg-amber-900 border border-amber-600 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="font-space text-2xl font-bold mb-2 text-amber-100">Future Trajectory</h3>
              <p className="text-sm font-space text-amber-500 tracking-widest uppercase mb-4">Next Steps</p>
              <p className="text-lg text-white/80 leading-relaxed">{subModule.future}</p>
            </div>
          </div>

        </motion.section>

        {/* Academic Citations Section */}
        <motion.section variants={fadeUp} className="mt-12">
          <div className="flex items-center gap-3 mb-8 px-4">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="font-space text-2xl font-bold">Academic Citations & Official Sources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subModule.citations?.map((citation, i) => (
              <a 
                key={i}
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 glass-card hover:bg-white/10 hover:border-blue-400/50 transition-all group"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{citation.source}</span>
                  </div>
                  <span className="font-space font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {citation.title}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
          
          {(!subModule.citations || subModule.citations.length === 0) && (
            <div className="p-8 glass-panel text-center">
              <p className="text-white/50 font-space text-sm tracking-widest uppercase">No external citations available for this record.</p>
            </div>
          )}
        </motion.section>

      </motion.div>
    </div>
  );
}
