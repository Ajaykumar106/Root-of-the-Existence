"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

interface TimelineEvent {
  time: string;
  label: string;
  color: string;
}

const EVENTS: TimelineEvent[] = [
  { time: "13.8B", label: "Big Bang", color: "#ff5500" },
  { time: "13.6B", label: "First Stars", color: "#ffffaa" },
  { time: "13.2B", label: "Galaxies Form", color: "#aaffff" },
  { time: "4.6B",  label: "Solar System", color: "#ffff55" },
  { time: "3.8B",  label: "First Life", color: "#55ff55" },
  { time: "0.2M",  label: "Homo Sapiens", color: "#ffffff" },
  { time: "NOW",   label: "Space Age", color: "#55aaff" },
];

export default function SpiralTimeline({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate spiral points
  const { points, labels } = useMemo(() => {
    const pts = [];
    const lbls = [];
    const numPoints = 200;
    const radius = 5;
    const height = 20;

    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const angle = t * Math.PI * 4; // 2 loops
      
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -t * height + (height / 2); // Start top, go down
      
      pts.push(new THREE.Vector3(x, y, z));
      
      // Distribute the 7 events along the spiral
      if (i % Math.floor(numPoints / 7) === 0 && lbls.length < EVENTS.length) {
        lbls.push({
          pos: new THREE.Vector3(x * 1.2, y, z * 1.2), // slightly outside
          ...EVENTS[lbls.length]
        });
      }
    }
    return { points: pts, labels: lbls };
  }, []);

  // Create a tube geometry for the glowing line
  const tubeGeo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 100, 0.05, 8, false);
  }, [points]);

  useFrame(() => {
    if (groupRef.current) {
      // Rotate slowly
      groupRef.current.rotation.y += 0.001;
      
      // Scroll moves camera down the spiral
      // We simulate this by moving the group up
      groupRef.current.position.y = scrollProgress * 20;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={tubeGeo}>
        <meshBasicMaterial color="#445588" transparent opacity={0.3} />
      </mesh>
      
      {labels.map((lbl, idx) => (
        <group key={idx} position={lbl.pos}>
          <Text
            color={lbl.color}
            fontSize={0.4}
            anchorX="center"
            anchorY="middle"
            font="/assets/fonts/Inter-Bold.woff"
          >
            {lbl.time}
          </Text>
          <Text
            position={[0, -0.5, 0]}
            color="#aaa"
            fontSize={0.25}
            anchorX="center"
            anchorY="middle"
            font="/assets/fonts/Inter-Regular.woff"
          >
            {lbl.label}
          </Text>
        </group>
      ))}
    </group>
  );
}
