export interface MuseumExhibit {
  id: string;
  title: string;
  subtitle: string;
  category: "Origin" | "Structure" | "Humanity" | "Future";
  description: string;
  simpleExplanation: string;
  metrics: { label: string; value: string }[];
  imagePath?: string;
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
    imagePath: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop"
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
    imagePath: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2000&auto=format&fit=crop"
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
    imagePath: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop"
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
    imagePath: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
  }
];
