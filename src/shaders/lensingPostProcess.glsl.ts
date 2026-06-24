export const lensingPostProcessShader = {
  uniforms: {
    tDiffuse: { value: null },
    uBlackHolePos: { value: [0.5, 0.5] }, // Screen space coordinates
    uMass: { value: 0.1 },                // Strength of lensing
    uAspectRatio: { value: 1.0 }          // Screen aspect ratio for correct circle math
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec2 uBlackHolePos;
    uniform float uMass;
    uniform float uAspectRatio;
    
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Adjust for aspect ratio
      vec2 diff = uv - uBlackHolePos;
      diff.x *= uAspectRatio;
      
      float dist = length(diff);
      
      // Gravitational lensing math (1 / r^2 falloff roughly)
      if (dist > 0.0) {
        // Bend space
        float bend = uMass / (dist * dist);
        // Clamp to prevent singularity explosion
        bend = min(bend, 0.5); 
        
        vec2 dir = normalize(diff);
        // Distort UVs
        uv -= dir * bend * vec2(1.0 / uAspectRatio, 1.0);
      }
      
      // Schwarzschild radius (pure black event horizon)
      vec4 texColor = texture2D(tDiffuse, uv);
      if (dist < uMass * 0.5) {
        texColor = vec4(0.0, 0.0, 0.0, 1.0);
      }
      
      gl_FragColor = texColor;
    }
  `
};
