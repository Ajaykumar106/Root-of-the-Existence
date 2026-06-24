export const earthVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

export const earthFragmentShader = /* glsl */ `
  uniform sampler2D dayTexture;
  uniform sampler2D nightTexture;
  uniform vec3 sunDirection;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec3 dayColor = texture2D(dayTexture, vUv).rgb;
    vec3 nightColor = texture2D(nightTexture, vUv).rgb;

    // Calculate day/night mix based on sun direction
    float sunDot = dot(vNormal, normalize(sunDirection));
    
    // Smooth transition terminator line
    float blend = smoothstep(-0.2, 0.2, sunDot);

    // Apply basic diffuse lighting to the day side
    vec3 color = mix(nightColor * 2.0, dayColor * (sunDot * 0.8 + 0.2), blend);

    // Rayleigh scattering approximation (blue atmospheric rim on day side)
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
    rim = smoothstep(0.6, 1.0, rim);
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * rim * blend;

    gl_FragColor = vec4(color + atmosphere, 1.0);
  }
`;
