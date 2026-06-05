"use client";

import React, { useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { lensingPostProcessShader } from '../../shaders/lensingPostProcess.glsl';

export function BlackHoleScene() {
  const { gl, scene, camera, size } = useThree();

  const composer = useMemo(() => {
    const comp = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    comp.addPass(renderPass);
    
    const shaderPass = new ShaderPass(lensingPostProcessShader);
    comp.addPass(shaderPass);
    
    return comp;
  }, [gl, scene, camera]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
    composer.setPixelRatio(gl.getPixelRatio());
  }, [composer, size, gl]);

  useFrame((state) => {
    const pass = composer.passes[1] as any;
    if (pass && pass.uniforms) {
      if (!pass.uniforms.uTime) {
        pass.uniforms.uTime = { value: 0 };
      }
      pass.uniforms.uTime.value = state.clock.elapsedTime;
      pass.uniforms.uBlackHolePos.value = [0.5, 0.5];
      pass.uniforms.uMass.value = 0.1;
      pass.uniforms.uAspectRatio.value = size.width / size.height;
    }
    composer.render();
  }, 1);

  return (
    <>
      <color attach="background" args={['#000000']} />
      
      {/* Background Starfield */}
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />

      {/* Accretion Disk - Inner glowing part */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <ringGeometry args={[1.5, 3.5, 128]} />
        <meshBasicMaterial 
          color="#ffaa44" 
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Accretion Disk - Outer diffuse glow */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <ringGeometry args={[1.2, 5.0, 128]} />
        <meshBasicMaterial 
          color="#ff4400" 
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

export default BlackHoleScene;
