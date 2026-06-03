"use client";

import { MuseumExhibit } from "@/lib/museum";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Atom, BookOpen, Layers, Rocket, History, Activity, ArrowRight } from "lucide-react";
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

export default function ExploreClient({ exhibit }: { exhibit: MuseumExhibit }) {
  return (
    <div className="w-full min-h-screen pb-32">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <Link 
          href="/"
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-card hover:bg-white/10 transition-colors text-sm font-space tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Museum
        </Link>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end p-8 md:p-16 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={exhibit.imagePath}
            alt={exhibit.title}
            fill
            className="object-cover mix-blend-lighten"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-4xl"
        >
          <p className="text-blue-400 font-space tracking-widest uppercase text-sm mb-4">
            {exhibit.category} Research File
          </p>
          <h1 className="font-space text-5xl md:text-7xl font-bold mb-4 text-white">
            {exhibit.title}
          </h1>
          <h2 className="text-2xl text-white/80 font-light max-w-2xl">
            {exhibit.subtitle}
          </h2>
        </motion.div>
      </section>

      {/* Deep Research Content */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Main Column (Lore & Physics) */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          
          <motion.div variants={fadeUp} className="glass-panel p-8 md:p-12 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="font-space text-2xl font-bold">Deep Lore</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/80">
              {exhibit.deepLore}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel p-8 md:p-12 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Atom className="w-6 h-6 text-blue-400" />
              <h3 className="font-space text-2xl font-bold">Physics Mechanics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {exhibit.physics.map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 glass-card">
                  <h4 className="font-space text-lg text-white font-semibold">{item.concept}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar Column (Timeline & Metrics) */}
        <div className="flex flex-col gap-12">
          
          <motion.div variants={fadeUp} className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="font-space text-xl font-bold">Timeline</h3>
            </div>
            <div className="flex flex-col gap-8 relative before:absolute before:inset-y-0 before:left-[7px] before:w-[2px] before:bg-white/10">
              {exhibit.timeline.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_10px_#3b82f6]" />
                  <span className="text-xs font-space text-blue-400 tracking-widest block mb-2">{item.year}</span>
                  <p className="text-sm text-white/70 leading-relaxed">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card p-8">
            <h3 className="font-space text-xl font-bold mb-6">Core Metrics</h3>
            <div className="flex flex-col gap-6">
              {exhibit.metrics.map((metric, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4 hover:border-blue-400/50 transition-colors">
                  <span className="text-xs text-white/40 uppercase tracking-widest">{metric.label}</span>
                  <span className="font-space font-semibold text-right">{metric.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Exhaustive Sub-Modules Grid */}
      {exhibit.subModules && exhibit.subModules.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 mt-32"
        >
          <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-6">
            <Layers className="w-8 h-8 text-blue-400" />
            <h3 className="font-space text-4xl font-bold">Exhaustive Database</h3>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {exhibit.subModules.map((sub) => (
              <motion.div 
                key={sub.id}
                whileHover={{ y: -5 }}
                className="flex flex-col glass-panel overflow-hidden group"
              >
                {/* Sub-Module Hero */}
                <div className="relative w-full h-72 overflow-hidden">
                  <Image 
                    src={sub.imagePath} 
                    alt={sub.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-screen" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <h4 className="absolute bottom-6 left-8 font-space text-4xl font-bold text-white z-10">{sub.title}</h4>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-white/80 text-base leading-relaxed mb-8">{sub.description}</p>
                  
                  {/* Components */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {sub.components.map((comp, i) => (
                      <div key={i} className="glass-card p-4 border border-white/5">
                        <span className="text-[10px] text-blue-400 uppercase tracking-widest block mb-1">{comp.label}</span>
                        <span className="font-space text-sm font-semibold">{comp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Temporal Flow: Past, Present, Future */}
                  <div className="mt-auto flex flex-col gap-6">
                    {/* PAST */}
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-slate-500 border-4 border-black" />
                      <div className="absolute left-[7px] top-5 w-[2px] h-[calc(100%+8px)] bg-white/10" />
                      <div className="flex items-center gap-2 mb-1">
                        <History className="w-3 h-3 text-slate-400" />
                        <span className="text-xs font-space text-slate-400 uppercase tracking-widest block">History (Past)</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{sub.past}</p>
                    </div>

                    {/* PRESENT */}
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] border-4 border-black z-10" />
                      <div className="absolute left-[7px] top-5 w-[2px] h-[calc(100%+8px)] bg-white/10" />
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="w-3 h-3 text-blue-400" />
                        <span className="text-xs font-space text-blue-400 uppercase tracking-widest block">Live Status (Present)</span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed font-medium line-clamp-3">{sub.present}</p>
                    </div>

                    {/* FUTURE */}
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-black z-10" />
                      <div className="flex items-center gap-2 mb-1">
                        <Rocket className="w-3 h-3 text-amber-500" />
                        <span className="text-xs font-space text-amber-500 uppercase tracking-widest block">Next Steps (Future)</span>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{sub.future}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link 
                      href={`/explore/${exhibit.id}/${sub.id}`}
                      className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-xl font-space font-bold uppercase tracking-widest transition-all group"
                    >
                      Deep Dive Research File
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

    </div>
  );
}
