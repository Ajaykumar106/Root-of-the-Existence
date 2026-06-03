"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

function Starfield() {
  const starsRef = useRef<THREE.Group>(null);
  const dustRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      // Extremely slow cinematic rotation for distant stars
      starsRef.current.rotation.x -= delta / 40;
      starsRef.current.rotation.y -= delta / 50;
    }
    if (dustRef.current) {
      // Faster rotation for foreground "stardust"
      dustRef.current.rotation.x += delta / 20;
      dustRef.current.rotation.y -= delta / 30;
    }
  });

  return (
    <>
      {/* Distant, dense starfield */}
      <group ref={starsRef}>
        <Stars 
          radius={150} 
          depth={50} 
          count={7000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </group>
      
      {/* Foreground glowing "stardust" (slightly larger, blue/purple tinted) */}
      <group ref={dustRef}>
        <Stars 
          radius={50} 
          depth={20} 
          count={1000} 
          factor={7} 
          saturation={1} 
          fade 
          speed={2} 
        />
      </group>
    </>
  );
}

export default function CosmicEngine() {
  return (
    <div className="fixed inset-0 -z-20 bg-black overflow-hidden pointer-events-none">
      
      {/* Deep Space Nebula Background Image (Blurred and Darkened) */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen scale-110">
        <Image 
          src="/assets/images/stellar_nebula.png" 
          alt="Space Nebula" 
          fill 
          className="object-cover blur-[100px]"
          priority
        />
      </div>

      {/* Subtle radial gradient to create a central core glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black/80 to-black z-0" />
      
      {/* WebGL Stars Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          gl={{ antialias: false, alpha: true }} 
          dpr={[1, 2]} 
        >
          <ambientLight intensity={0.5} />
          <Starfield />
        </Canvas>
      </div>
    </div>
  );
}
