export const raymarchingVertexShader = /* glsl */ `
  varying vec3 vWorldPos;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const raymarchingFragmentShader = /* glsl */ `
  uniform vec3 uCameraPos;
  uniform float uTime;
  
  varying vec3 vWorldPos;

  // 3D Noise function (simplified for WebGL performance)
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float noise3D(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                   mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
               mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                   mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
  }

  // 6-octave Fractal Brownian Motion
  float fbm(vec3 p) {
    float f = 0.0;
    float w = 0.5;
    for (int i = 0; i < 6; i++) {
      f += w * noise3D(p);
      p *= 2.0;
      w *= 0.5;
    }
    return f;
  }

  void main() {
    vec3 rayDir = normalize(vWorldPos - uCameraPos);
    vec3 rayPos = uCameraPos;
    
    float totalDensity = 0.0;
    vec3 totalColor = vec3(0.0);
    
    // 64-step raymarcher
    for(int i = 0; i < 64; i++) {
      if (totalDensity > 0.99) break;
      
      vec3 p = rayPos + vec3(uTime * 0.1, 0.0, 0.0); // Cloud drift
      float density = fbm(p * 0.5) - 0.3; // Threshold
      
      if (density > 0.0) {
        // Color gradient: deep blue -> pink -> white core
        vec3 color = mix(vec3(0.0, 0.1, 0.4), vec3(0.8, 0.2, 0.5), density * 2.0);
        color = mix(color, vec3(1.0), density * density * 4.0);
        
        float alpha = density * 0.1;
        totalColor += color * alpha * (1.0 - totalDensity);
        totalDensity += alpha;
      }
      
      rayPos += rayDir * 0.2; // Step size
    }

    gl_FragColor = vec4(totalColor, totalDensity);
  }
`;
