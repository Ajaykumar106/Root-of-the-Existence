import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { jupiterVertexShader, jupiterFragmentShader } from '../../shaders/jupiter.glsl';
import { saturnRingsVertexShader, saturnRingsFragmentShader } from '../../shaders/saturnRings.glsl';

export default function SolarSystemScene() {
  const jupiterMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const asteroidsRef = useRef<THREE.InstancedMesh>(null);
  
  // Orbit Radii
  const JUPITER_ORBIT = 15;
  const SATURN_ORBIT = 25;
  const ASTEROID_INNER = 8;
  const ASTEROID_OUTER = 11;
  const NUM_ASTEROIDS = 5000;

  // Generate paths for orbits
  const jupiterPath = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * JUPITER_ORBIT, 0, Math.sin(angle) * JUPITER_ORBIT));
    }
    return points;
  }, []);

  const saturnPath = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * SATURN_ORBIT, 0, Math.sin(angle) * SATURN_ORBIT));
    }
    return points;
  }, []);

  const jupiterUniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), []);

  // Initialize asteroids
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  useEffect(() => {
    if (asteroidsRef.current) {
      for (let i = 0; i < NUM_ASTEROIDS; i++) {
        const radius = ASTEROID_INNER + Math.random() * (ASTEROID_OUTER - ASTEROID_INNER);
        const theta = Math.random() * Math.PI * 2;
        const y = (Math.random() - 0.5) * 1.5;
        
        dummy.position.set(
          radius * Math.cos(theta),
          y,
          radius * Math.sin(theta)
        );
        
        const scale = 0.02 + Math.random() * 0.05;
        dummy.scale.set(scale, scale, scale);
        
        dummy.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        dummy.updateMatrix();
        asteroidsRef.current.setMatrixAt(i, dummy.matrix);
      }
      asteroidsRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [dummy]);

  const jupiterOrbitRef = useRef<THREE.Group>(null);
  const saturnOrbitRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Update time uniforms
    if (jupiterMaterialRef.current) {
      jupiterMaterialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    // Slowly rotate asteroids
    if (asteroidsRef.current) {
      asteroidsRef.current.rotation.y += delta * 0.05;
    }

    // Slowly orbit planets
    if (jupiterOrbitRef.current) {
      jupiterOrbitRef.current.rotation.y += delta * 0.02;
    }
    if (saturnOrbitRef.current) {
      saturnOrbitRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <group>
      {/* Asteroid Belt */}
      <instancedMesh ref={asteroidsRef} args={[undefined as any, undefined as any, NUM_ASTEROIDS]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#888888" roughness={0.8} />
      </instancedMesh>

      {/* Orbit Rings (N-Body paths) */}
      <Line points={jupiterPath} color="#666666" lineWidth={1} transparent opacity={0.3} />
      <Line points={saturnPath} color="#666666" lineWidth={1} transparent opacity={0.3} />

      {/* Jupiter */}
      <group ref={jupiterOrbitRef}>
        <mesh position={[JUPITER_ORBIT, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <shaderMaterial
            ref={jupiterMaterialRef}
            vertexShader={jupiterVertexShader}
            fragmentShader={jupiterFragmentShader}
            uniforms={jupiterUniforms}
          />
        </mesh>
      </group>

      {/* Saturn */}
      <group ref={saturnOrbitRef}>
        <group position={[SATURN_ORBIT, 0, 0]}>
          <mesh>
            <sphereGeometry args={[1.2, 64, 64]} />
            <meshStandardMaterial color="#e2bf7d" roughness={0.6} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.5, 3.0, 64]} />
            <shaderMaterial
              vertexShader={saturnRingsVertexShader}
              fragmentShader={saturnRingsFragmentShader}
              transparent={true}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};
