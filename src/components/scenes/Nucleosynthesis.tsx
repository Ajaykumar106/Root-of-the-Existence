"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

// Simplified periodic table data mapped to stellar origins
const ELEMENTS = [
  { s: "H",  o: "Big Bang",       color: "#ffffff", pos: [-5, 3] },
  { s: "He", o: "Big Bang",       color: "#ffffff", pos: [5, 3] },
  { s: "C",  o: "Small Stars",    color: "#ffccaa", pos: [1, 2] },
  { s: "N",  o: "Small Stars",    color: "#ffccaa", pos: [2, 2] },
  { s: "O",  o: "Large Stars",    color: "#aaccff", pos: [3, 2] },
  { s: "Fe", o: "Large Stars",    color: "#aaccff", pos: [-1, 0] },
  { s: "Au", o: "Neutron Stars",  color: "#ffdd55", pos: [-2, -2] },
  { s: "U",  o: "Supernovae",     color: "#ff5555", pos: [3, -3] },
];

export default function Nucleosynthesis() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Title */}
      <Text
        position={[0, 4.5, 0]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        font="/assets/fonts/Inter-Bold.woff"
      >
        STELLAR NUCLEOSYNTHESIS
      </Text>

      {/* Elements Grid */}
      {ELEMENTS.map((el, idx) => (
        <group key={idx} position={[el.pos[0] * 1.5, el.pos[1] * 1.5, 0]}>
          {/* Card background */}
          <mesh>
            <planeGeometry args={[1.2, 1.4]} />
            <meshBasicMaterial 
              color={el.color} 
              transparent 
              opacity={0.1} 
              side={THREE.DoubleSide} 
            />
            {/* Outline */}
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(1.2, 1.4)]} />
              <lineBasicMaterial color={el.color} opacity={0.5} transparent />
            </lineSegments>
          </mesh>

          {/* Symbol */}
          <Text
            position={[0, 0.2, 0.01]}
            fontSize={0.6}
            color={el.color}
            anchorX="center"
            anchorY="middle"
            font="/assets/fonts/Inter-Bold.woff"
          >
            {el.s}
          </Text>

          {/* Origin Label */}
          <Text
            position={[0, -0.4, 0.01]}
            fontSize={0.15}
            color="#aaaaaa"
            anchorX="center"
            anchorY="middle"
            font="/assets/fonts/Inter-Regular.woff"
          >
            {el.o}
          </Text>
        </group>
      ))}
    </group>
  );
}
