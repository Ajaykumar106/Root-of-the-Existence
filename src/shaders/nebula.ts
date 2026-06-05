export const nebulaVertexShader = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  attribute vec3 aVelocity;

  uniform float uTime;
  uniform float uRotation;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vColor = aColor;

    // Apply drift velocity
    vec3 pos = position;
    pos += aVelocity * uTime * 0.5;

    // Wrap around boundaries (-50 to 50 range)
    pos = mod(pos + 50.0, 100.0) - 50.0;

    // Apply scroll-linked rotation around Y axis
    float cosR = cos(uRotation);
    float sinR = sin(uRotation);
    mat3 rotY = mat3(
      cosR, 0.0, sinR,
      0.0, 1.0, 0.0,
      -sinR, 0.0, cosR
    );
    pos = rotY * pos;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    // Size attenuation
    gl_PointSize = aSize * (200.0 / -mvPosition.z);
    gl_PointSize = max(gl_PointSize, 1.0);

    // Depth-based alpha for fog effect
    float dist = length(mvPosition.xyz);
    vAlpha = smoothstep(80.0, 10.0, dist);

    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const nebulaFragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Soft radial gradient for each point
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;

    float strength = 1.0 - smoothstep(0.0, 0.5, d);
    strength = pow(strength, 1.5);

    gl_FragColor = vec4(vColor, strength * vAlpha * 0.7);
  }
`;
