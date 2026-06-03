export interface SubModule {
  id: string;
  title: string;
  description: string;
  components: { label: string; value: string }[];
  researchProgress: string;
  imagePath: string;
}

export interface MuseumExhibit {
  id: string;
  title: string;
  subtitle: string;
  category: "Origin" | "Structure" | "Humanity" | "Future";
  description: string;
  simpleExplanation: string;
  metrics: { label: string; value: string }[];
  imagePath: string;
  timeline: { year: string; event: string }[];
  physics: { concept: string; detail: string }[];
  deepLore: string;
  subModules?: SubModule[]; // New massive expansion array
}

export const MUSEUM_DATA: MuseumExhibit[] = [
  {
    id: "big-bang",
    title: "The Big Bang",
    subtitle: "The Root of Our Existence",
    category: "Origin",
    description: "The universe began as a single, infinitely dense point. In a fraction of a second, it expanded into everything we see today.",
    simpleExplanation: "Imagine everything that exists—all the stars, planets, and empty space—squished into a dot smaller than a grain of sand. Then, suddenly, it rapidly ballooned outwards.",
    metrics: [
      { label: "AGE", value: "13.8 Billion Years" },
      { label: "TEMP", value: "Billions of Degrees" }
    ],
    imagePath: "/assets/images/big_bang.png",
    timeline: [
      { year: "10^-43 Seconds", event: "The Planck Epoch. The laws of physics begin to take shape." },
      { year: "10^-32 Seconds", event: "Cosmic Inflation. The universe expands faster than light." },
      { year: "380,000 Years", event: "Recombination. The first atoms form." }
    ],
    physics: [
      { concept: "Singularity", detail: "A point of infinite density where general relativity breaks down." },
      { concept: "Expansion", detail: "Space itself is stretching, driven by Dark Energy." }
    ],
    deepLore: "Before the Big Bang, the concept of 'before' might not even make sense. Time itself was created in this event. Every atom that makes up your body originated from this single point."
  },
  {
    id: "nebulas",
    title: "Nebulas",
    subtitle: "The Stellar Nurseries",
    category: "Structure",
    description: "Giant clouds of dust and gas floating in space. Some come from the gas thrown out by a dying star. Others are regions where new stars form.",
    simpleExplanation: "Think of a nebula as a giant, glowing cloud in space. It's the birthplace of stars. Dust and gas slowly pull together until they ignite.",
    metrics: [
      { label: "SIZE", value: "Up to 100 Light Years" },
      { label: "MAKEUP", value: "Hydrogen & Dust" }
    ],
    imagePath: "/assets/images/stellar_nebula.png",
    timeline: [
      { year: "Stage 1", event: "Gravity pulls cold cosmic dust together." },
      { year: "Stage 2", event: "A protostar forms at the center." },
      { year: "Stage 3", event: "Nuclear fusion ignites, blowing away the gas." }
    ],
    physics: [
      { concept: "Emission Spectra", detail: "Different gases glow in different colors when hit by starlight." },
      { concept: "Gravitational Collapse", detail: "The delicate balance between gravity and thermal pressure." }
    ],
    deepLore: "When you look at a nebula, you are looking at the raw material of creation. It is the ultimate recycling program of the universe."
  },
  {
    id: "solar-system",
    title: "The Solar System",
    subtitle: "Our Cosmic Neighborhood",
    category: "Structure",
    description: "Our planetary system is located in an outer spiral arm of the Milky Way galaxy. It consists of our star, the Sun, and everything bound to it by gravity.",
    simpleExplanation: "We live in a family of planets that all circle around a warm, glowing campfire called the Sun.",
    metrics: [
      { label: "STAR", value: "The Sun" },
      { label: "PLANETS", value: "8 Major Planets" }
    ],
    imagePath: "/assets/images/solar_system.png",
    timeline: [
      { year: "4.6 Billion Yrs Ago", event: "The solar nebula collapses to form the Sun." },
      { year: "4.5 Billion Yrs Ago", event: "The Earth forms from the accretion disk." },
      { year: "4.5 Billion Yrs Ago", event: "A Mars-sized object collides with Earth, creating our Moon." }
    ],
    physics: [
      { concept: "Orbital Mechanics", detail: "Planets are essentially in a state of constant free-fall toward the Sun." },
      { concept: "Heliopause", detail: "The boundary where the Sun's solar wind stops." }
    ],
    deepLore: "The Solar System is our island in a vast, dark ocean. From the scorching surface of Venus to the freezing methane lakes of Titan, our tiny neighborhood contains an incredible diversity of worlds.",
    subModules: [
      {
        id: "mars",
        title: "Mars",
        description: "The rusted, dusty, cold desert world with a very thin atmosphere. It is a dynamic planet with seasons, polar ice caps, canyons, and extinct volcanoes.",
        components: [
          { label: "Surface", value: "Iron Oxide Dust" },
          { label: "Atmosphere", value: "Carbon Dioxide" }
        ],
        researchProgress: "NASA's Perseverance and Curiosity rovers are actively drilling into the Martian crust, hunting for fossilized microbial life in ancient river deltas.",
        imagePath: "/assets/images/mars.png"
      },
      {
        id: "jupiter",
        title: "Jupiter",
        description: "The largest planet in our solar system. A gas giant characterized by massive storms, including the Great Red Spot, which has raged for hundreds of years.",
        components: [
          { label: "Core", value: "Dense Rock & Ice" },
          { label: "Mantle", value: "Metallic Hydrogen" }
        ],
        researchProgress: "The Juno spacecraft is currently orbiting Jupiter, peering beneath its dense cloud cover to map its magnetic field and measure water abundance.",
        imagePath: "/assets/images/jupiter.png"
      },
      {
        id: "moon",
        title: "The Moon",
        description: "Earth's only natural satellite. It is the fifth largest moon in the solar system and the only place beyond Earth where humans have set foot.",
        components: [
          { label: "Crust", value: "Silicate Rock" },
          { label: "Gravity", value: "16% of Earth's" }
        ],
        researchProgress: "The Artemis program is preparing to return humans to the lunar south pole to establish a permanent base camp and search for water ice.",
        imagePath: "/assets/images/moon.png"
      }
    ]
  },
  {
    id: "humanity",
    title: "Humanity",
    subtitle: "The Universe Experiencing Itself",
    category: "Humanity",
    description: "After 13.8 billion years of cosmic evolution, stardust organized itself into complex biological machines capable of observing the universe.",
    simpleExplanation: "Every atom in your body was forged inside a dying star. We are literally made of star-stuff.",
    metrics: [
      { label: "ORIGIN", value: "Earth" },
      { label: "STATUS", value: "Space-faring" }
    ],
    imagePath: "/assets/images/human_exploration.png",
    timeline: [
      { year: "3.5 Billion Yrs Ago", event: "First single-celled life appears." },
      { year: "300,000 Yrs Ago", event: "Homo sapiens emerge." },
      { year: "1969 CE", event: "Apollo 11. Humans walk on the Moon." }
    ],
    physics: [
      { concept: "Carbon-Based Life", detail: "Carbon's unique ability to form four stable bonds allows it to build DNA." },
      { concept: "Consciousness", detail: "The phenomenon of how physical matter generates subjective experience." }
    ],
    deepLore: "We are the universe waking up. When an astronomer looks through a telescope, it is the universe looking at itself."
  },
  {
    id: "future-of-space",
    title: "The Future of Space",
    subtitle: "Agencies & Exoplanets",
    category: "Future",
    description: "Humanity's next great leap involves mapping Earth-like planets beyond our solar system and establishing permanent multi-planetary colonies.",
    simpleExplanation: "We are no longer just looking at the stars; we are planning how to travel to them and live among them.",
    metrics: [
      { label: "EXOPLANETS", value: "5,500+ Confirmed" },
      { label: "AGENCIES", value: "77 Global Agencies" }
    ],
    imagePath: "/assets/images/space_colony.png",
    timeline: [
      { year: "2021", event: "James Webb Space Telescope launched to analyze exoplanet atmospheres." },
      { year: "2026+", event: "Artemis III targets human return to the Moon." },
      { year: "2030s", event: "SpaceX and NASA plan crewed missions to Mars." }
    ],
    physics: [
      { concept: "Transit Method", detail: "Detecting exoplanets by measuring the tiny dip in starlight when a planet crosses in front of its star." },
      { concept: "Terraforming", detail: "The theoretical process of modifying a planet's atmosphere to make it Earth-like." }
    ],
    deepLore: "The survival of humanity depends on becoming a multi-planetary species. Thousands of exoplanets have been found, some resting in the 'Goldilocks Zone' where liquid water could exist. The next century will define our legacy in the cosmos.",
    subModules: [
      {
        id: "exoplanets",
        title: "Habitable Exoplanets",
        description: "Planets orbiting distant stars that sit perfectly within the habitable zone, where temperatures allow liquid water to pool on the surface.",
        components: [
          { label: "Kepler-186f", value: "Earth-size, Red Dwarf" },
          { label: "TRAPPIST-1e", value: "Rocky, Ultra-cool Dwarf" }
        ],
        researchProgress: "The JWST is actively analyzing the atmospheres of these planets, looking for biosignatures like methane and oxygen that could indicate extraterrestrial life.",
        imagePath: "/assets/images/exoplanet.png"
      },
      {
        id: "agencies",
        title: "Global Space Agencies",
        description: "A coalition of government and private entities driving the next frontier. NASA (USA), ISRO (India), ESA (Europe), and SpaceX.",
        components: [
          { label: "ISRO Focus", value: "Lunar South Pole (Chandrayaan)" },
          { label: "SpaceX Focus", value: "Mars Colonization (Starship)" }
        ],
        researchProgress: "Agencies are pivoting from low-Earth orbit research to deep space infrastructure, building the Lunar Gateway space station to serve as a staging point for Mars.",
        imagePath: "/assets/images/space_colony.png"
      }
    ]
  }
];
