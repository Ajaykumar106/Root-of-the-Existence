"use client";

import { useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Loader } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XRButtonOverlay, XREnvironment } from "@/components/xr/XRManager";
import ProceduralAudio from "@/components/audio/ProceduralAudio";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

// Dynamically import heavy 3D scenes to enable code-splitting and Suspense
const BigBangScene = dynamic(() => import("@/components/scenes/BigBangScene"));
const NebulaScene = dynamic(() => import("@/components/scenes/NebulaScene"));
const SolarSystemScene = dynamic(() => import("@/components/scenes/SolarSystemScene"));
const EarthScene = dynamic(() => import("@/components/scenes/EarthScene"));
const BlackHoleScene = dynamic(() => import("@/components/scenes/BlackHoleScene"));
const SpiralTimeline = dynamic(() => import("@/components/scenes/SpiralTimeline"));
const Nucleosynthesis = dynamic(() => import("@/components/scenes/Nucleosynthesis"));

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // GSAP ScrollTrigger setup for section fade-ins
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        // Staggered fade in/out based on scroll position
        gsap.fromTo(section, 
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1, // Smooth scrub effect
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-black text-white relative w-full h-[500vh]">
      <ServiceWorkerRegister />
      <ProceduralAudio />
      <XRButtonOverlay />

      {/* Global Canvas Overlay for persistent elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <XREnvironment>
            <Suspense fallback={null}>
              {/* Spiral timeline tracks scroll progress internally */}
              <SpiralTimeline />
            </Suspense>
          </XREnvironment>
        </Canvas>
      </div>

      {/* Section 1: Big Bang */}
      <section 
        ref={el => { sectionsRef.current[0] = el; }}
        className="h-[100vh] w-full flex items-center justify-center relative z-10"
      >
        <div className="absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <BigBangScene />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-center mix-blend-difference">
          <h1 className="text-6xl md:text-8xl font-space font-bold tracking-tighter uppercase mb-4 opacity-80 hover:opacity-100 transition-opacity">The Big Bang</h1>
          <p className="font-inter text-xl md:text-2xl opacity-60">13.8 Billion Years Ago</p>
        </div>
      </section>

      {/* Section 2: Nebula */}
      <section 
        ref={el => { sectionsRef.current[1] = el; }}
        className="h-[100vh] w-full flex items-center justify-center relative z-10"
      >
        <div className="absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <NebulaScene />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-center bg-black/30 backdrop-blur-md p-12 rounded-3xl border border-white/10">
          <h2 className="text-5xl md:text-7xl font-space font-bold tracking-tight mb-4">Stellar Nurseries</h2>
          <p className="font-inter text-lg opacity-70 max-w-xl mx-auto">Volumetric gas clouds where new stars are forged in the crucibles of gravity.</p>
        </div>
      </section>

      {/* Section 3: Solar System */}
      <section 
        ref={el => { sectionsRef.current[2] = el; }}
        className="h-[100vh] w-full flex items-center justify-center relative z-10"
      >
        <div className="absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.1} />
              <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
              <SolarSystemScene />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute top-10 left-10 text-left pointer-events-none">
          <h2 className="text-4xl font-space font-bold tracking-tight">Our Local Neighborhood</h2>
          <p className="font-inter text-sm opacity-60 mt-2">Live NASA Horizons Telemetry</p>
        </div>
      </section>

      {/* Section 4: Earth & Humanity */}
      <section 
        ref={el => { sectionsRef.current[3] = el; }}
        className="h-[100vh] w-full flex items-center justify-center relative z-10"
      >
        <div className="absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={null}>
              <EarthScene />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute bottom-20 right-20 text-right pointer-events-none">
          <h2 className="text-5xl font-space font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,100,255,0.8)]">Humanity</h2>
          <p className="font-inter text-lg mt-2 font-medium">Tracking ISS (N2YO) & Space Weather (NOAA)</p>
        </div>
      </section>

      {/* Section 5: Black Hole */}
      <section 
        ref={el => { sectionsRef.current[4] = el; }}
        className="h-[100vh] w-full flex items-center justify-center relative z-10 overflow-hidden"
      >
        <div className="absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <BlackHoleScene />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-center relative z-20 mix-blend-difference pointer-events-none">
          <h2 className="text-7xl font-space font-black tracking-tighter mb-4 text-white">Event Horizon</h2>
          <div className="inline-block border border-red-500/50 bg-red-900/20 text-red-400 px-6 py-2 rounded-full font-mono text-sm uppercase tracking-widest backdrop-blur-md">
            Warning: Time Dilation Active
          </div>
        </div>
      </section>

      {/* Loading Overlay */}
      <Loader 
        containerStyles={{ background: '#000' }}
        innerStyles={{ width: '300px' }}
        barStyles={{ height: '2px', background: '#3b82f6' }}
        dataStyles={{ color: '#fff', fontFamily: 'monospace', fontSize: '12px', marginTop: '10px' }}
      />
    </main>
  );
}
