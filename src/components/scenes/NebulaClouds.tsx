"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NebulaClouds() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate lightweight planes with gradients instead of heavy raymarching
  const cloudCount = 15;

  const clouds = useMemo(() => {
    return Array.from({ length: cloudCount }).map((_, i) => {
      return {
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        rotation: [
          0,
          0,
          Math.random() * Math.PI * 2
        ] as [number, number, number],
        scale: 4 + Math.random() * 4,
        color: i % 2 === 0 ? "#ff00aa" : "#4400ff", // Magenta and Deep Blue
        speed: 0.05 + Math.random() * 0.1
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow cinematic drift
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Slowly rotate each individual cloud plane
      groupRef.current.children.forEach((child: any, i) => {
        if (i < clouds.length) {
          child.rotation.z += clouds[i].speed * 0.01;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {clouds.map((cloud, i) => (
        <mesh 
          key={i} 
          position={cloud.position} 
          rotation={cloud.rotation}
          scale={cloud.scale}
        >
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial
            color={cloud.color}
            transparent={true}
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      <ambientLight intensity={0.5} />
    </group>
  );
}
