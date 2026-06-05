export const jupiterVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const jupiterFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;

  // Simple 2D noise
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
  }

  void main() {
    // Latitude bands
    float bands = sin(vUv.y * 50.0 + noise(vUv * 10.0) * 2.0);
    
    // Wind advection (differential rotation)
    float wind = vUv.x + uTime * 0.05 * sin(vUv.y * 20.0);
    
    // Great Red Spot
    vec2 grsPos = vec2(0.7 - uTime*0.02, 0.4);
    grsPos.x = fract(grsPos.x); // wrap around
    float distToGRS = length((vec2(wind, vUv.y) - grsPos) * vec2(1.0, 2.0));
    float grs = smoothstep(0.1, 0.0, distToGRS);
    
    // Base colors
    vec3 col1 = vec3(0.8, 0.7, 0.6); // Light tan
    vec3 col2 = vec3(0.6, 0.4, 0.3); // Dark brown
    vec3 baseCol = mix(col1, col2, smoothstep(-1.0, 1.0, bands));
    
    // Add noise turbulence
    baseCol += (noise(vec2(wind * 50.0, vUv.y * 50.0)) - 0.5) * 0.1;
    
    // Mix in GRS
    baseCol = mix(baseCol, vec3(0.8, 0.3, 0.2), grs * noise(vUv*100.0));
    
    // Simple spherical lighting
    float light = max(dot(vNormal, normalize(vec3(1.0, 0.5, 1.0))), 0.0) * 0.8 + 0.2;

    gl_FragColor = vec4(baseCol * light, 1.0);
  }
`;
