"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CinematicEarth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  // Custom shader for atmospheric edge glow (Fresnel)
  const atmosphereShader = useMemo(() => ({
    uniforms: {
      c: { type: "f", value: 0.5 },
      p: { type: "f", value: 4.0 },
      glowColor: { type: "c", value: new THREE.Color("#4488ff") },
      viewVector: { type: "v3", value: new THREE.Vector3() }
    },
    vertexShader: `
      uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying float intensity;
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector);
        intensity = pow(c - dot(vNormal, vNormel), p);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float intensity;
      void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, intensity * 0.5);
      }
    `
  }), []);

  useFrame((state) => {
    if (earthRef.current && atmosphereRef.current) {
      // Slow rotation
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Update camera view vector for the fresnel glow
      atmosphereShader.uniforms.viewVector.value = new THREE.Vector3().subVectors(state.camera.position, atmosphereRef.current.position);
    }
  });

  return (
    <group>
      {/* Solid Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#112244" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Atmospheric Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <shaderMaterial
          uniforms={atmosphereShader.uniforms}
          vertexShader={atmosphereShader.vertexShader}
          fragmentShader={atmosphereShader.fragmentShader}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          transparent={true}
          depthWrite={false}
        />
      </mesh>

      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
    </group>
  );
}
