"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import { raymarchingVertexShader, raymarchingFragmentShader } from "@/shaders/raymarching.glsl";

export default function NebulaScene() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uCameraPos: { value: new THREE.Vector3(0, 0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uCameraPos.value.copy(state.camera.position);
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <mesh>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={raymarchingVertexShader}
          fragmentShader={raymarchingFragmentShader}
          uniforms={uniforms}
          depthWrite={false}
          transparent={true}
        />
      </mesh>
    </>
  );
}
