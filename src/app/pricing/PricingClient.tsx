"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Rocket, Star, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Metadata } from "next";

// Note: Next.js metadata must be exported from a layout or page in a server component. 
// Since this is a client component to handle Framer Motion, we would ideally split it.
// For the sake of this file, we will focus on the UI component.

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function PricingClient() {
  return (
    <div className="w-full min-h-screen pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <Link 
          href="/"
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-card hover:bg-white/10 transition-colors text-sm font-space tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Museum
        </Link>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-space text-xs tracking-widest uppercase mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Subscription Access
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-space text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Unlock the Universe
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Choose a plan to gain unrestricted access to our encyclopedia, advanced AI research tools, and live telemetry data.
        </motion.p>
      </section>

      {/* Pricing Grid */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* FREE PLAN */}
        <motion.div variants={fadeUp} className="glass-panel p-8 flex flex-col relative border border-white/5 hover:border-white/20 transition-colors">
          <div className="mb-8">
            <h3 className="font-space text-2xl font-bold text-white mb-2">Explorer</h3>
            <p className="text-white/50 text-sm">Basic access for curious minds.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-space font-bold">₹0</span>
            <span className="text-white/50 text-sm"> /mo</span>
          </div>
          
          <ul className="flex flex-col gap-4 flex-grow mb-8">
            <li className="flex items-center gap-3 text-sm text-white/70">
              <CheckCircle2 className="w-5 h-5 text-white/30" />
              Access to core articles
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <CheckCircle2 className="w-5 h-5 text-white/30" />
              3 AI questions per day
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <CheckCircle2 className="w-5 h-5 text-white/30" />
              Live telemetry view
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <CheckCircle2 className="w-5 h-5 text-white/30" />
              Community support
            </li>
          </ul>

          <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 font-space font-bold tracking-widest uppercase transition-colors">
            Current Plan
          </button>
        </motion.div>

        {/* STUDENT PLAN (POPULAR) */}
        <motion.div variants={fadeUp} className="glass-panel p-8 flex flex-col relative border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] transform md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-space font-bold tracking-widest uppercase text-white shadow-lg">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="font-space text-2xl font-bold text-amber-500 mb-2">Student</h3>
            <p className="text-white/50 text-sm">For deep-dive learning and research.</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-5xl font-space font-bold text-white">₹69</span>
            <span className="text-white/50 text-sm">/mo</span>
          </div>
          
          <ul className="flex flex-col gap-4 flex-grow mb-8">
            <li className="flex items-center gap-3 text-sm text-white/90 font-medium">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              All Explorer features
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              Completely Ad-Free
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              Interactive Solar System mode
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              Full universe explore access
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              Increased AI search limits
            </li>
          </ul>

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 font-space font-bold tracking-widest uppercase text-white shadow-lg transition-opacity flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4" />
            Subscribe
          </button>
        </motion.div>

        {/* PREMIUM PLAN */}
        <motion.div variants={fadeUp} className="glass-panel p-8 flex flex-col relative border border-blue-500/20 hover:border-blue-500/40 transition-colors">
          <div className="mb-8">
            <h3 className="font-space text-2xl font-bold text-blue-400 mb-2">Astronomer</h3>
            <p className="text-white/50 text-sm">The ultimate encyclopedia access.</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-5xl font-space font-bold text-white">₹169</span>
            <span className="text-white/50 text-sm">/mo</span>
          </div>
          
          <ul className="flex flex-col gap-4 flex-grow mb-8">
            <li className="flex items-center gap-3 text-sm text-white/90 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              All Student features
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              Full Database Access
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              Advanced Research Citations
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              Early access to new features
            </li>
            <li className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              Priority engineering support
            </li>
          </ul>

          <button className="w-full py-4 rounded-xl border border-blue-500/50 hover:bg-blue-500/10 font-space font-bold tracking-widest uppercase text-blue-400 transition-colors flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Subscribe
          </button>
        </motion.div>

      </motion.section>
    </div>
  );
}
