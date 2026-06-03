"use client";

import { motion } from "framer-motion";
import { MUSEUM_DATA } from "@/lib/museum";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">
              Welcome to the digital museum
            </span>
          </div>
          <h1 className="font-space text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            The Root of <br className="hidden md:block" />
            <span className="text-gradient">Our Existence</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
            A journey through 13.8 billion years of history, explained simply. Scroll to explore the cosmos.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          <span className="text-xs font-space tracking-widest uppercase text-white/40">Scroll</span>
        </motion.div>
      </section>

      {/* Museum Exhibits */}
      <section className="w-full max-w-6xl px-6 flex flex-col gap-32 mt-20">
        {MUSEUM_DATA.map((exhibit, index) => (
          <motion.div
            key={exhibit.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden glass-panel group">
              {exhibit.imagePath && (
                <Image
                  src={exhibit.imagePath}
                  alt={exhibit.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-screen"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {/* Internal glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex flex-col">
              <p className="text-blue-400 font-space tracking-widest uppercase text-sm mb-4">
                {exhibit.category}
              </p>
              <h2 className="font-space text-4xl md:text-5xl font-bold mb-4">
                {exhibit.title}
              </h2>
              <h3 className="text-xl text-white/80 font-medium mb-8">
                {exhibit.subtitle}
              </h3>
              
              <div className="glass-card p-6 md:p-8 mb-8">
                <p className="text-lg leading-relaxed text-white/90">
                  {exhibit.simpleExplanation}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {exhibit.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-widest mb-1">{metric.label}</span>
                    <span className="font-space font-semibold text-lg">{metric.value}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-3 w-fit text-sm font-space tracking-widest uppercase group hover:text-blue-400 transition-colors">
                Explore Deeper
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
