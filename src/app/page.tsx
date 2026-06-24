"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";

// Dynamically import 3D scenes for performance
const HeroStarfield = dynamic(() => import("@/components/scenes/HeroStarfield"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Cinematic Blur Fade Animation Variant
const blurFade: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: 40 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP ScrollTrigger for buttery smooth canvas fading and parallax
    const ctx = gsap.context(() => {
      canvasesRef.current.forEach((canvas, i) => {
        if (!canvas) return;
        
        // Deep parallax effect: canvas moves slower than scrolling
        gsap.to(canvas, {
          y: "30%", // Moves down as you scroll down
          ease: "none",
          scrollTrigger: {
            trigger: canvas.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
        
        // Cinematic Fade in/out
        gsap.fromTo(canvas, 
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: canvas.parentElement,
              start: "top 70%",
              end: "top 30%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white relative w-full overflow-hidden min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <div ref={el => { canvasesRef.current[0] = el; }} className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <HeroStarfield />
          </Canvas>
        </div>
        <motion.div 
          initial="hidden" animate="visible" variants={blurFade}
          className="relative z-10 text-center pointer-events-none px-4"
        >
          <h1 className="text-5xl md:text-8xl font-space font-black tracking-tighter mb-4 text-gradient">Root of Existence</h1>
          <p className="text-xl md:text-3xl font-inter text-white/60 tracking-widest uppercase mt-4">The Engine of Creation</p>
        </motion.div>
      </section>

    </main>
  );
}
