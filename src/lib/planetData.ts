export interface PlanetInfo {
  name: string;
  radius: number;         // Display radius in scene units
  orbitRadius: number;     // Distance from sun in scene units
  orbitSpeed: number;      // Radians per second
  axialTilt: number;       // Degrees
  rotationSpeed: number;   // Radians per second
  texture: string;         // Path to texture file
  color: string;           // Fallback hex color
  hasRing?: boolean;
  ringTexture?: string;
  description: string;
  stats: {
    diameter: string;
    mass: string;
    distance: string;
    orbitalPeriod: string;
    moons: string;
    temperature: string;
  };
}

export const PLANETS: PlanetInfo[] = [
  {
    name: "Mercury",
    radius: 0.25,
    orbitRadius: 5,
    orbitSpeed: 0.8,
    axialTilt: 0.034,
    rotationSpeed: 0.005,
    texture: "/assets/textures/mercury.jpg",
    color: "#8c7e6d",
    description: "The smallest planet and closest to the Sun. Its surface is heavily cratered, resembling Earth's Moon.",
    stats: {
      diameter: "4,879 km",
      mass: "3.3 × 10²³ kg",
      distance: "57.9M km",
      orbitalPeriod: "88 days",
      moons: "0",
      temperature: "-180°C to 430°C",
    },
  },
  {
    name: "Venus",
    radius: 0.4,
    orbitRadius: 7,
    orbitSpeed: 0.6,
    axialTilt: 177.4,
    rotationSpeed: -0.002,
    texture: "/assets/textures/venus.jpg",
    color: "#e8cda0",
    description: "Often called Earth's twin due to similar size. Its thick atmosphere traps heat, making it the hottest planet.",
    stats: {
      diameter: "12,104 km",
      mass: "4.87 × 10²⁴ kg",
      distance: "108.2M km",
      orbitalPeriod: "225 days",
      moons: "0",
      temperature: "462°C average",
    },
  },
  {
    name: "Earth",
    radius: 0.42,
    orbitRadius: 9,
    orbitSpeed: 0.5,
    axialTilt: 23.44,
    rotationSpeed: 0.02,
    texture: "/assets/textures/earth_day.jpg",
    color: "#4a90d9",
    description: "Our home planet. The only known world to harbor life, with liquid water covering 71% of its surface.",
    stats: {
      diameter: "12,742 km",
      mass: "5.97 × 10²⁴ kg",
      distance: "149.6M km",
      orbitalPeriod: "365.25 days",
      moons: "1",
      temperature: "15°C average",
    },
  },
  {
    name: "Mars",
    radius: 0.3,
    orbitRadius: 11.5,
    orbitSpeed: 0.4,
    axialTilt: 25.19,
    rotationSpeed: 0.019,
    texture: "/assets/textures/mars.jpg",
    color: "#c1440e",
    description: "The Red Planet. Home to the tallest volcano (Olympus Mons) and longest canyon (Valles Marineris) in the solar system.",
    stats: {
      diameter: "6,779 km",
      mass: "6.42 × 10²³ kg",
      distance: "227.9M km",
      orbitalPeriod: "687 days",
      moons: "2",
      temperature: "-65°C average",
    },
  },
  {
    name: "Jupiter",
    radius: 1.2,
    orbitRadius: 16,
    orbitSpeed: 0.2,
    axialTilt: 3.13,
    rotationSpeed: 0.04,
    texture: "/assets/textures/jupiter.jpg",
    color: "#c4a882",
    description: "The gas giant king. Its Great Red Spot is a storm larger than Earth that has raged for centuries.",
    stats: {
      diameter: "139,820 km",
      mass: "1.90 × 10²⁷ kg",
      distance: "778.5M km",
      orbitalPeriod: "11.86 years",
      moons: "95",
      temperature: "-110°C average",
    },
  },
  {
    name: "Saturn",
    radius: 1.0,
    orbitRadius: 21,
    orbitSpeed: 0.14,
    axialTilt: 26.73,
    rotationSpeed: 0.038,
    texture: "/assets/textures/saturn.jpg",
    color: "#e8d5a3",
    hasRing: true,
    ringTexture: "/assets/textures/saturn_ring.png",
    description: "Famous for its stunning ring system made of ice and rock particles. It's less dense than water.",
    stats: {
      diameter: "116,460 km",
      mass: "5.68 × 10²⁶ kg",
      distance: "1.43B km",
      orbitalPeriod: "29.46 years",
      moons: "146",
      temperature: "-140°C average",
    },
  },
  {
    name: "Uranus",
    radius: 0.6,
    orbitRadius: 26,
    orbitSpeed: 0.08,
    axialTilt: 97.77,
    rotationSpeed: -0.03,
    texture: "/assets/textures/uranus.jpg",
    color: "#8ecad6",
    description: "The ice giant tilted on its side. It rotates nearly perpendicular to its orbital plane.",
    stats: {
      diameter: "50,724 km",
      mass: "8.68 × 10²⁵ kg",
      distance: "2.87B km",
      orbitalPeriod: "84 years",
      moons: "28",
      temperature: "-195°C average",
    },
  },
  {
    name: "Neptune",
    radius: 0.55,
    orbitRadius: 31,
    orbitSpeed: 0.05,
    axialTilt: 28.32,
    rotationSpeed: 0.028,
    texture: "/assets/textures/neptune.jpg",
    color: "#3f54ba",
    description: "The windiest planet, with speeds reaching 2,100 km/h. It has a vivid blue color from methane in its atmosphere.",
    stats: {
      diameter: "49,244 km",
      mass: "1.02 × 10²⁶ kg",
      distance: "4.50B km",
      orbitalPeriod: "164.8 years",
      moons: "16",
      temperature: "-200°C average",
    },
  },
];
