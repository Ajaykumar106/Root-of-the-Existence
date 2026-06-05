export const saturnRingsVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPos;
  void main() {
    vUv = uv;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const saturnRingsFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    // Distance from center (RingGeometry UVs: x is angle, y is radius)
    float r = vUv.y; 

    // Create ring bands and Cassini Division
    float bands = sin(r * 50.0) * sin(r * 150.0);
    float cassini = smoothstep(0.48, 0.5, r) - smoothstep(0.5, 0.52, r); // Dark gap

    // Ring colors
    vec3 col = mix(vec3(0.6, 0.5, 0.4), vec3(0.8, 0.7, 0.6), bands * 0.5 + 0.5);
    
    // Apply gap
    float alpha = mix(0.8, 0.0, cassini);
    
    // Fade out edges
    alpha *= smoothstep(0.0, 0.1, r) * smoothstep(1.0, 0.9, r);

    gl_FragColor = vec4(col, alpha);
  }
`;
