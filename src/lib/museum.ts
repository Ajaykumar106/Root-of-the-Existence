export interface MuseumExhibit {
  id: string;
  title: string;
  subtitle: string;
  category: "Origin" | "Structure" | "Humanity" | "Future";
  description: string;
  simpleExplanation: string;
  metrics: { label: string; value: string }[];
  imagePath: string;
  // Deep Research Data
  timeline: { year: string; event: string }[];
  physics: { concept: string; detail: string }[];
  deepLore: string;
}

export const MUSEUM_DATA: MuseumExhibit[] = [
  {
    id: "big-bang",
    title: "The Big Bang",
    subtitle: "The Root of Our Existence",
    category: "Origin",
    description: "The universe began as a single, infinitely dense point. In a fraction of a second, it expanded into everything we see today. This wasn't an explosion in space, but an explosion of space itself.",
    simpleExplanation: "Imagine everything that exists—all the stars, planets, and empty space—squished into a dot smaller than a grain of sand. Then, suddenly, it rapidly ballooned outwards. That was the start of time and space.",
    metrics: [
      { label: "AGE", value: "13.8 Billion Years" },
      { label: "TEMPERATURE", value: "Billions of Degrees" }
    ],
    imagePath: "/assets/images/big_bang.png",
    timeline: [
      { year: "10^-43 Seconds", event: "The Planck Epoch. The laws of physics as we know them begin to take shape." },
      { year: "10^-32 Seconds", event: "Cosmic Inflation. The universe expands faster than the speed of light." },
      { year: "380,000 Years", event: "Recombination. The first atoms form, and light can finally travel freely (Cosmic Microwave Background)." }
    ],
    physics: [
      { concept: "Singularity", detail: "A point of infinite density and temperature where the math of general relativity breaks down." },
      { concept: "Expansion", detail: "Space itself is stretching, carrying galaxies away from each other, driven by Dark Energy." }
    ],
    deepLore: "Before the Big Bang, the concept of 'before' might not even make sense. Time itself was created in this event. Every atom that makes up your body, the screen you are reading this on, and the stars in the night sky originated from this single, microscopic, intensely hot point. We are living inside the aftermath of the greatest event in history."
  },
  {
    id: "nebulas",
    title: "Nebulas",
    subtitle: "The Stellar Nurseries",
    category: "Structure",
    description: "Giant clouds of dust and gas floating in space. Some come from the gas thrown out by a dying star. Others are regions where new stars are beginning to form from the dust.",
    simpleExplanation: "Think of a nebula as a giant, glowing cloud in space. It's the birthplace of stars. Dust and gas slowly pull together until they get hot enough to ignite and become a shiny new star.",
    metrics: [
      { label: "SIZE", value: "Up to 100 Light Years" },
      { label: "COMPOSITION", value: "Hydrogen & Dust" }
    ],
    imagePath: "/assets/images/stellar_nebula.png",
    timeline: [
      { year: "Stage 1", event: "Gravity begins to pull cold cosmic dust and gas together into a dense pocket." },
      { year: "Stage 2", event: "A protostar forms at the center, glowing with heat but not yet undergoing fusion." },
      { year: "Stage 3", event: "Nuclear fusion ignites. The star's solar winds blow the remaining nebula gas away, revealing the new star system." }
    ],
    physics: [
      { concept: "Emission Spectra", detail: "Different gases glow in different colors when hit by starlight. Hydrogen glows red; oxygen glows blue/green." },
      { concept: "Gravitational Collapse", detail: "The delicate balance between the inward pull of gravity and the outward push of thermal pressure." }
    ],
    deepLore: "When you look at a nebula, you are looking at the raw material of creation. The Pillars of Creation in the Eagle Nebula are light-years tall, towering columns of cold gas. Inside them, thousands of new solar systems are slowly gestating in the dark. It is the ultimate recycling program of the universe: old stars die and explode, providing the heavy elements for nebulas to forge new stars."
  },
  {
    id: "solar-system",
    title: "The Solar System",
    subtitle: "Our Cosmic Neighborhood",
    category: "Structure",
    description: "Our planetary system is located in an outer spiral arm of the Milky Way galaxy. It consists of our star, the Sun, and everything bound to it by gravity—the planets, dwarf planets, dozens of moons, and millions of asteroids.",
    simpleExplanation: "We live in a family of planets that all circle around a warm, glowing campfire called the Sun. The Sun's gravity holds us all together so we don't float away into the dark.",
    metrics: [
      { label: "STAR", value: "The Sun" },
      { label: "PLANETS", value: "8 Major Planets" }
    ],
    imagePath: "/assets/images/solar_system.png",
    timeline: [
      { year: "4.6 Billion Years Ago", event: "The solar nebula collapses to form the Sun." },
      { year: "4.5 Billion Years Ago", event: "The Earth forms from the accretion disk of dust swirling around the young Sun." },
      { year: "4.5 Billion Years Ago (Late)", event: "A Mars-sized object collides with Earth, creating the debris ring that forms our Moon." }
    ],
    physics: [
      { concept: "Orbital Mechanics", detail: "Planets are essentially in a state of constant free-fall toward the Sun, moving sideways fast enough to keep missing it." },
      { concept: "Heliopause", detail: "The boundary where the Sun's solar wind is finally stopped by the interstellar medium of the galaxy." }
    ],
    deepLore: "The Solar System is our island in a vast, dark ocean. From the scorching, lead-melting surface of Venus, to the massive, raging storms on Jupiter that have lasted for centuries, to the freezing methane lakes of Titan, our tiny neighborhood contains an incredible diversity of worlds. And right in the goldilocks zone, perfectly positioned, is a pale blue dot where life took hold."
  },
  {
    id: "humanity",
    title: "Humanity",
    subtitle: "The Universe Experiencing Itself",
    category: "Humanity",
    description: "After 13.8 billion years of cosmic evolution, stardust organized itself into complex biological machines capable of observing, understanding, and exploring the very universe that created them.",
    simpleExplanation: "Every atom in your body was forged inside a dying star. We are literally made of star-stuff. We are the universe's way of thinking, dreaming, and looking back at itself.",
    metrics: [
      { label: "ORIGIN", value: "Earth" },
      { label: "STATUS", value: "Space-faring" }
    ],
    imagePath: "/assets/images/human_exploration.png",
    timeline: [
      { year: "3.5 Billion Years Ago", event: "The first single-celled life appears in Earth's oceans." },
      { year: "300,000 Years Ago", event: "Homo sapiens (modern humans) emerge in Africa." },
      { year: "1969 CE", event: "Apollo 11. Humans walk on another celestial body for the first time." },
      { year: "Present", event: "Humanity expands its reach, aiming for Mars and establishing a permanent presence in low Earth orbit." }
    ],
    physics: [
      { concept: "Carbon-Based Life", detail: "Carbon's unique ability to form four stable bonds allows it to build the complex molecules (DNA/RNA) necessary for life." },
      { concept: "Consciousness", detail: "The still-unsolved phenomenon of how physical matter (the brain) generates subjective experience." }
    ],
    deepLore: "We are the universe waking up. For billions of years, the cosmos was silent, running purely on blind physics and chemistry. Then, through an impossibly long chain of evolutionary survival, matter became conscious. When an astronomer looks through a telescope, it is the universe looking at itself. Our curiosity is the universe trying to understand its own existence."
  }
];
