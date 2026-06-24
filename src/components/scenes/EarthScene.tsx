import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { earthVertexShader, earthFragmentShader } from '../../shaders/earthScattering.glsl';

export default function EarthScene() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  
  // Create placeholder textures for day and night if they are not loaded
  const dayTex = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#103050'; // Basic ocean blue
      ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = '#206030'; // Basic land green
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 256, Math.random() * 256, Math.random() * 40, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  const nightTex = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#050510'; // Dark night
      ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = '#ffffaa'; // City lights
      for (let i = 0; i < 50; i++) {
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 1.5, 1.5);
      }
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  const uniforms = useMemo(
    () => ({
      dayTexture: { value: dayTex },
      nightTexture: { value: nightTex },
      sunDirection: { value: new THREE.Vector3(1, 0, 0) },
    }),
    [dayTex, nightTex]
  );

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.06;
    }
    
    // Update sun direction to simulate orbit
    const time = state.clock.getElapsedTime();
    uniforms.sunDirection.value.set(Math.cos(time * 0.2), 0, Math.sin(time * 0.2)).normalize();
  });

  return (
    <group>
      {/* Base Earth Surface */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={earthVertexShader}
          fragmentShader={earthFragmentShader}
          uniforms={uniforms}
        />
      </mesh>

      {/* Cloud Layer */}
      <mesh ref={cloudsRef}>
        {/* Slightly larger than base earth */}
        <sphereGeometry args={[2.02, 64, 64]} />
        <meshPhongMaterial
          color={0xffffff}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};
