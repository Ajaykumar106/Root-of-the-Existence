"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BigBangParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const [positions, colors] = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorObject = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Start them tightly packed
      const r = Math.random() * 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Hot orange to bright yellow gradient
      const isHot = Math.random() > 0.5;
      colorObject.set(isHot ? "#ffaa00" : "#ffffff");
      colors[i * 3] = colorObject.r;
      colors[i * 3 + 1] = colorObject.g;
      colors[i * 3 + 2] = colorObject.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current && materialRef.current) {
      // Cinematic slow rotation
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.05;

      // Pulsing glow effect
      materialRef.current.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.15}
        vertexColors={true}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
