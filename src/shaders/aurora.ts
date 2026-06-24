export const auroraVertexShader = /* glsl */ `
  attribute float aOffset;
  
  uniform float uTime;

  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    vec3 pos = position;

    // Sinusoidal curtain displacement
    float wave = sin(pos.x * 2.0 + uTime * 1.5 + aOffset) * 0.15;
    wave += sin(pos.x * 4.0 + uTime * 0.8 + aOffset * 2.0) * 0.05;
    pos.y += wave;

    // Slight radial expansion
    float expand = sin(uTime * 0.5 + aOffset) * 0.05;
    pos.xz *= 1.0 + expand;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 3.0 * (100.0 / -mvPosition.z);
    gl_PointSize = max(gl_PointSize, 1.0);

    // Alpha oscillation
    vAlpha = 0.3 + 0.4 * sin(uTime * 2.0 + aOffset * 3.0);
    vAlpha *= smoothstep(0.0, 0.3, abs(pos.y - position.y + 0.1));

    // Green to blue gradient
    float t = (pos.y - position.y + 0.2) / 0.4;
    vColor = mix(
      vec3(0.0, 1.0, 0.4),  // Green
      vec3(0.2, 0.4, 1.0),  // Blue
      clamp(t, 0.0, 1.0)
    );

    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const auroraFragmentShader = /* glsl */ `
  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;

    float strength = 1.0 - smoothstep(0.0, 0.5, d);

    gl_FragColor = vec4(vColor, strength * vAlpha * 0.5);
  }
`;
