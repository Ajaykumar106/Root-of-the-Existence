"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function CinematicMars() {
  const groupRef = useRef<THREE.Group>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const atmosRef = useRef<THREE.Mesh>(null);

  // Rotate Mars slowly
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.02} />
      {/* Main sun light coming from the left/back to create a dramatic crescent/rim light */}
      <directionalLight position={[-10, 5, -5]} intensity={4} color="#ffffff" />
      {/* Soft fill light */}
      <directionalLight position={[10, 0, 10]} intensity={0.1} color="#B25022" />

      {/* Mars Solid Sphere */}
      <mesh ref={marsRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial 
          color="#a3421f"
          roughness={0.9}
          metalness={0.1}
          bumpScale={0.05}
        />
      </mesh>

      {/* Atmospheric Glow (Rim Light) */}
      <mesh ref={atmosRef}>
        <sphereGeometry args={[3.1, 64, 64]} />
        <meshBasicMaterial 
          color="#ff6b3d"
          transparent={true}
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
