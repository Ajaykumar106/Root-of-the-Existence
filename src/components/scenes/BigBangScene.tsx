"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { voronoiVertexShader, voronoiFragmentShader } from "@/shaders/voronoi.glsl";

export default function BigBangScene() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // State for NASA DONKI integration
  const [solarFlareIntensity, setSolarFlareIntensity] = useState(0.1);

  // Fetch DONKI data on mount
  useEffect(() => {
    fetch("/api/nasa?type=donki")
      .then(res => res.json())
      .then(data => {
        // Simple heuristic: map number of flares to an intensity multiplier
        if (Array.isArray(data) && data.length > 0) {
          const intensity = Math.min(data.length * 0.05 + 0.1, 0.5);
          setSolarFlareIntensity(intensity);
        }
      })
      .catch(err => console.error("DONKI fetch failed", err));
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uExpansion: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Animate expansion based on time and solar flare intensity
      // It expands from 0 to 1 over ~5 seconds, scaled by intensity
      let expansion = (state.clock.elapsedTime * solarFlareIntensity) % 1.5;
      materialRef.current.uniforms.uExpansion.value = Math.min(expansion, 1.0);
    }
  });

  return (
    <mesh>
      {/* Full screen quad */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={voronoiVertexShader}
        fragmentShader={voronoiFragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        transparent={true}
      />
    </mesh>
  );
}
