export const atmosphereVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mvPosition.xyz);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const atmosphereFragmentShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;

  uniform vec3 uColor;
  uniform float uIntensity;

  void main() {
    float fresnel = 1.0 - dot(vNormal, vViewDir);
    fresnel = pow(fresnel, 3.0) * uIntensity;

    gl_FragColor = vec4(uColor, fresnel * 0.8);
  }
`;
