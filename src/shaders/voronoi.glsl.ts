export const voronoiVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const voronoiFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uExpansion; // Driven by NASA DONKI solar flare data (0 to 1)
  
  varying vec2 vUv;

  // 2D Random
  vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
  }

  // Voronoi noise
  float voronoi(vec2 x) {
    vec2 n = floor(x);
    vec2 f = fract(x);
    float res = 8.0;
    for(int j=-1; j<=1; j++) {
      for(int i=-1; i<=1; i++) {
        vec2 b = vec2(float(i), float(j));
        vec2 r = vec2(b) - f + random2(n + b);
        float d = dot(r, r);
        res = min(res, d);
      }
    }
    return sqrt(res);
  }

  void main() {
    // Center coordinates
    vec2 uv = vUv * 2.0 - 1.0;
    float dist = length(uv);

    // Expansion ring (radiation wavefront)
    float ring = smoothstep(uExpansion - 0.1, uExpansion, dist) - smoothstep(uExpansion, uExpansion + 0.1, dist);
    
    // Core brightness
    float core = smoothstep(0.5, 0.0, dist) * (1.0 - uExpansion);
    
    // CMB background noise
    float noise = voronoi(vUv * 10.0 + uTime * 0.1) * 0.5 + 0.5;
    
    // Colors
    vec3 coreColor = vec3(1.0, 0.9, 0.8);
    vec3 waveColor = vec3(1.0, 0.3, 0.1);
    vec3 cmbColor = vec3(0.05, 0.0, 0.1) * noise;

    vec3 finalColor = cmbColor;
    
    // Mix in expansion
    if (dist < uExpansion) {
      finalColor = mix(finalColor, waveColor, ring * 2.0);
      finalColor += coreColor * core * 5.0;
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;
