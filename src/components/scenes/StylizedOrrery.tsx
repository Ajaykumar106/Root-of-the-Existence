"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";

const PLANETS = [
  { radius: 1, distance: 4, speed: 1.5, color: "#aaddff" }, // Inner planet
  { radius: 1.5, distance: 7, speed: 0.8, color: "#ffddaa" }, // Mid planet
  { radius: 2, distance: 12, speed: 0.3, color: "#ffaacc" }, // Outer planet
];

export default function StylizedOrrery() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire system slowly for a cinematic angle
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = 0.2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      
      // Rotate planets along their orbits
      PLANETS.forEach((planet, i) => {
        const orbitGroup = groupRef.current!.children[i * 2 + 1] as THREE.Group; // skip the line
        if (orbitGroup) {
          orbitGroup.rotation.y = state.clock.elapsedTime * planet.speed;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sun at the center */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Sun Glow */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#ffaa00" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Planets and Orbit Rings */}
      {PLANETS.map((planet, i) => {
        // Generate orbit circle points
        const points = [];
        for (let a = 0; a <= 64; a++) {
          const angle = (a / 64) * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(angle) * planet.distance, 0, Math.sin(angle) * planet.distance));
        }

        return (
          <group key={i}>
            {/* Orbit Path */}
            <Line points={points} color="#ffffff" lineWidth={1} transparent opacity={0.1} />
            
            {/* Planet Group (for rotation) */}
            <group>
              <mesh position={[planet.distance, 0, 0]}>
                <sphereGeometry args={[planet.radius, 32, 32]} />
                <meshStandardMaterial color={planet.color} roughness={0.4} metalness={0.8} />
              </mesh>
            </group>
          </group>
        );
      })}

      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={50} color="#ffeedd" />
    </group>
  );
}
