import { MuseumExhibit } from "../types";

export const originsExhibit: MuseumExhibit = {
  id: "big-bang",
  title: "The Big Bang",
  subtitle: "The Root of Our Existence",
  category: "Origin",
  description: "The universe began as a single, infinitely dense point. In a fraction of a second, it expanded into everything we see today. This wasn't an explosion in space, but an explosion of space itself.",
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
  deepLore: "Before the Big Bang, the concept of 'before' might not even make sense. Time itself was created in this event. Every atom that makes up your body originated from this single point.",
  subModules: [
    {
      id: "planck-epoch",
      title: "The Planck Epoch",
      description: "The earliest known state of the universe, from zero to 10^-43 seconds. The four fundamental forces were likely unified into one superforce.",
      components: [
        { label: "Size", value: "Infinitesimal" },
        { label: "Physics", value: "Quantum Gravity required" }
      ],
      imagePath: "/assets/images/big_bang.png",
      past: "Prior to this epoch, the concepts of space and time do not apply. This is the absolute beginning of the chronological universe.",
      present: "Physicists are currently trying to unify General Relativity (gravity) and Quantum Mechanics to understand what actually happened during this epoch.",
      future: "The ultimate goal of modern theoretical physics is to formulate a 'Theory of Everything' (like String Theory) to mathematically prove the conditions of the Planck Epoch."
    },
    {
      id: "recombination",
      title: "Recombination & The Dark Ages",
      description: "Around 380,000 years after the Big Bang, the universe finally cooled enough for electrons to bind to nuclei, forming the first atoms (hydrogen).",
      components: [
        { label: "Matter", value: "75% Hydrogen, 25% Helium" },
        { label: "Light", value: "Cosmic Microwave Background" }
      ],
      imagePath: "/assets/images/stellar_nebula.png",
      past: "Before this, the universe was an opaque plasma of free-floating electrons and protons that trapped light. When it cooled, light was finally released, creating the CMB.",
      present: "The 'afterglow' of this event, the Cosmic Microwave Background (CMB), is still visible everywhere in the universe today in the microwave spectrum.",
      future: "Radio telescopes are mapping the minute temperature fluctuations in the CMB to precisely measure the amount of Dark Matter and Dark Energy in the universe."
    }
  ]
};

export const nebulasExhibit: MuseumExhibit = {
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
  deepLore: "When you look at a nebula, you are looking at the raw material of creation. It is the ultimate recycling program of the universe.",
  subModules: [
    {
      id: "orion",
      title: "The Orion Nebula",
      description: "One of the brightest nebulas, visible to the naked eye in the night sky. A massive star-forming region located 1,344 light-years away.",
      components: [
        { label: "Type", value: "Diffuse Nebula" },
        { label: "Stars", value: "Thousands of young stars" }
      ],
      imagePath: "/assets/images/stellar_nebula.png",
      past: "Observed by ancient civilizations, but its true nature as a cloud of gas was only confirmed by telescopes in the 17th century.",
      present: "The James Webb Space Telescope recently captured unprecedented images of the Orion Nebula, revealing protoplanetary disks (baby solar systems) forming around young stars.",
      future: "Over millions of years, the radiation from its massive newly-formed stars will eventually blow the gas cloud away, leaving behind a new open star cluster."
    }
  ]
};
