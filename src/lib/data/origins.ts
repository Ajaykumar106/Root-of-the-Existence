import { MuseumExhibit } from "../types";

export const originsExhibit: MuseumExhibit = {
  id: "big-bang",
  title: "The Big Bang",
  subtitle: "The Genesis of Spacetime",
  category: "Origin",
  description: "Our universe was born 13.8 billion years ago from an infinitely dense singularity. Over billions of years, it expanded and cooled, forming the first stars, galaxies, and eventually, the building blocks of life.",
  simpleExplanation: "Imagine everything in the universe—every star, planet, and galaxy—squished into a point smaller than a grain of sand. Then, it suddenly exploded outward, creating space and time as it grew.",
  metrics: [
    { label: "AGE", value: "13.8 Billion Years" },
    { label: "EXPANSION", value: "73.3 km/s/Mpc" }
  ],
  imagePath: "/assets/images/big_bang.png",
  timeline: [
    { year: "0.00s", event: "The Planck Epoch. The laws of physics break down." },
    { year: "10^-32s", event: "Cosmic Inflation expands the universe exponentially." },
    { year: "380,000 Yrs", event: "Recombination. Light is finally free to travel (CMB)." },
    { year: "400 Million Yrs", event: "The first stars ignite, ending the Dark Ages." }
  ],
  physics: [
    { concept: "Cosmic Microwave Background (CMB)", detail: "The afterglow of the Big Bang, visible in all directions as faint microwave radiation." },
    { concept: "Redshift", detail: "As space expands, light from distant galaxies is stretched into longer, redder wavelengths." }
  ],
  deepLore: "The Big Bang is not an explosion IN space; it is the explosion OF space. Before the Big Bang, there was no space, no time, and no matter. The singularity contained the entire mass-energy of the universe in a state of infinite density and temperature. As it expanded, energy condensed into matter, forming the first subatomic particles, then atoms, then stars, and finally, us.",
  subModules: [
    {
      id: "planck-epoch",
      title: "The Planck Epoch",
      description: "The absolute beginning of time. A period so extreme that our current understanding of physics completely breaks down.",
      components: [
        { label: "Timeframe", value: "Zero to 10^-43 Seconds" },
        { label: "Size", value: "Infinitesimally Small" },
        { label: "Temperature", value: "Infinite" },
        { label: "Forces", value: "Unified Superforce" }
      ],
      imagePath: "/assets/images/big_bang.png",
      past: "Prior to the Planck Epoch, the concepts of space and time simply do not apply. This is the absolute, chronological beginning of the known universe. At the moment of the Big Bang, all the matter and energy that currently exists in the observable universe was compressed into an infinitely dense, infinitely hot point known as a singularity. During the Planck Epoch—which lasted from zero to 10^-43 seconds—the four fundamental forces of nature (gravity, electromagnetism, the strong nuclear force, and the weak nuclear force) were entirely indistinguishable from one another, merged into a single, symmetrical 'Superforce'. The universe was so incredibly hot and dense that the fabric of spacetime itself was violently turbulent and quantum in nature.",
      present: "Currently, the Planck Epoch represents an absolute, impenetrable wall for modern theoretical physics. We cannot 'see' or mathematically describe what happened during this time because our two most successful and heavily tested scientific theories—General Relativity (which describes massive objects and gravity) and Quantum Mechanics (which describes subatomic particles)—fundamentally contradict each other when applied to the extreme conditions of a singularity. General Relativity predicts infinite density, while Quantum Mechanics demands probability and uncertainty. Because we lack a unified theory of quantum gravity, the physics of the Planck Epoch remains the greatest unsolved mystery in science.",
      future: "The ultimate goal of modern theoretical physics is to formulate a 'Theory of Everything'—a single, elegant mathematical framework that perfectly unites General Relativity and Quantum Mechanics. String Theory and Loop Quantum Gravity are currently the leading candidates for this grand unification. If humanity ever succeeds in proving a Theory of Everything, we will finally be able to 'peer' mathematically into the Planck Epoch, definitively proving the exact conditions of the Big Bang and perhaps even answering whether our universe is just one of many in a vast multiverse.",
      citations: [
        { title: "The Planck Epoch", url: "https://en.wikipedia.org/wiki/Planck_epoch", source: "Wikipedia" },
        { title: "Brief History of the Universe", url: "https://science.nasa.gov/astrophysics/focus-areas/what-powered-the-big-bang", source: "NASA Astrophysics" },
        { title: "Theory of Everything", url: "https://en.wikipedia.org/wiki/Theory_of_everything", source: "Wikipedia" }
      ]
    },
    {
      id: "recombination",
      title: "Recombination & The CMB",
      description: "The moment the universe cooled enough for light to travel freely, creating the first flash of light.",
      components: [
        { label: "Timeframe", value: "380,000 Years Later" },
        { label: "Event", value: "First Atoms Form" },
        { label: "Result", value: "Universe Becomes Transparent" },
        { label: "Remnant", value: "Cosmic Microwave Background" }
      ],
      imagePath: "/assets/images/stellar_nebula.png",
      past: "For the first 380,000 years after the Big Bang, the universe was an incredibly hot, dense, and opaque plasma composed of free-floating electrons and protons. It was so hot that neutral atoms could not form; any time an electron tried to bind to a proton, a high-energy photon would immediately blast it apart. Because light (photons) was constantly ricocheting off the free electrons, the universe was essentially a glowing, impenetrable fog. Light could not travel freely. However, as the universe continued to expand, it eventually cooled down to a critical threshold of about 3,000 Kelvin. At this moment, known as the Epoch of Recombination, the energy dropped enough for protons and electrons to permanently bind together, forming the very first neutral hydrogen atoms. With the electrons suddenly locked up in atoms, the photons were finally free to travel unimpeded. The universe instantly became transparent, releasing a massive, blinding flash of light that filled all of space simultaneously.",
      present: "The 'afterglow' of that monumental event is still visible everywhere in the universe today, but it has been stretched significantly by the expansion of spacetime over the last 13.8 billion years. What was originally a blinding flash of visible and ultraviolet light has been stretched into the invisible microwave spectrum. We call this the Cosmic Microwave Background (CMB) radiation. If you tune an old analog television to a dead channel, a small percentage of the static on the screen is actually the CMB—the dying echoes of the Big Bang hitting your antenna. The CMB is the oldest light we can ever possibly see, and it serves as the ultimate baby picture of the universe.",
      future: "The Cosmic Microwave Background is the most important cosmological tool we have. Dedicated space observatories like the Planck satellite have mapped the CMB in incredible detail, revealing microscopic temperature fluctuations across the sky. These minute temperature differences represent the very first seeds of structure in the universe—regions that were slightly denser and eventually collapsed under gravity to form the first galaxies. Future, highly advanced radio telescopes will continue to study the polarization of the CMB to definitively prove the theory of Cosmic Inflation (the rapid exponential expansion immediately following the Big Bang) and to precisely measure the exact amounts of mysterious Dark Matter and Dark Energy shaping the cosmos.",
      citations: [
        { title: "Cosmic Microwave Background", url: "https://science.nasa.gov/astrophysics/focus-areas/what-is-the-universe-made-of", source: "NASA Science" },
        { title: "Recombination (Cosmology)", url: "https://en.wikipedia.org/wiki/Recombination_(cosmology)", source: "Wikipedia" },
        { title: "Planck Satellite", url: "https://en.wikipedia.org/wiki/Planck_(spacecraft)", source: "Wikipedia" }
      ]
    }
  ]
};

export const nebulasExhibit: MuseumExhibit = {
  id: "nebulas",
  title: "Stellar Nebulas",
  subtitle: "The Cosmic Nurseries",
  category: "Structure",
  description: "Vast, glowing clouds of interstellar gas and dust. Some are the fiery remnants of dead stars, while others are the stellar nurseries where new solar systems are currently being born.",
  simpleExplanation: "Nebulas are like massive clouds in space. Some are graves where old stars blew up, and others are cribs where baby stars are slowly coming together.",
  metrics: [
    { label: "COMPOSITION", value: "90% Hydrogen, 10% Helium" },
    { label: "SIZE", value: "Up to Hundreds of Light-Years" }
  ],
  imagePath: "/assets/images/stellar_nebula.png",
  timeline: [
    { year: "1054 CE", event: "Chinese astronomers record the supernova that created the Crab Nebula." },
    { year: "1610 CE", event: "The Orion Nebula is discovered using early telescopes." },
    { year: "1995 CE", event: "Hubble captures the iconic 'Pillars of Creation'." },
    { year: "2022 CE", event: "James Webb Telescope reveals new details in the Carina Nebula." }
  ],
  physics: [
    { concept: "Jeans Mass", detail: "The critical mass a cloud of gas must reach before gravity overcomes internal gas pressure, causing it to collapse and form a star." },
    { concept: "Emission", detail: "Ultraviolet light from young, hot stars ionizes the surrounding gas, causing it to glow in vibrant, distinct colors." }
  ],
  deepLore: "Nebulas represent the grand recycling program of the cosmos. When a massive star dies in a supernova, it violently scatters heavy elements—carbon, oxygen, iron—across the galaxy. These elements mix with pristine hydrogen clouds, eventually collapsing under gravity to form new stars and rocky planets. The iron in your blood and the calcium in your bones were forged in the hearts of dead stars and scattered through ancient nebulas.",
  subModules: [
    {
      id: "orion",
      title: "The Orion Nebula",
      description: "A massive stellar nursery located just 1,344 light-years away. One of the brightest nebulas in the night sky.",
      components: [
        { label: "Distance", value: "1,344 Light-Years" },
        { label: "Constellation", value: "Orion's Sword" },
        { label: "Diameter", value: "24 Light-Years" },
        { label: "Age", value: "Approx. 3 Million Years" }
      ],
      imagePath: "/assets/images/stellar_nebula.png",
      past: "The Orion Nebula (Messier 42) has been observed by ancient human civilizations for millennia, visible to the naked eye as a 'fuzzy star' in the middle of Orion's Sword. However, its true nature as an immense, glowing cloud of interstellar gas was only confirmed after the invention of the telescope in the early 17th century. For billions of years, the space that the nebula currently occupies was just a cold, dark, and unimaginably vast molecular cloud. Roughly 3 million years ago, an unknown trigger—perhaps a shockwave from a nearby supernova—caused a dense pocket of this hydrogen gas to collapse under its own gravity. As the gas condensed, it ignited, birthing a massive cluster of incredibly hot, young stars known as the Trapezium Cluster, whose intense radiation illuminated the surrounding cloud.",
      present: "Today, the Orion Nebula is the closest region of massive star formation to Earth, making it one of the most intensely studied objects in astronomy. It serves as our primary laboratory for understanding how stars and planetary systems form. The fierce ultraviolet radiation pouring out of the massive young stars in the Trapezium Cluster is actively ionizing the surrounding hydrogen gas, causing it to glow brilliantly and carving massive cavities into the cloud. The James Webb Space Telescope recently captured breathtaking, unprecedented images of the nebula, revealing hundreds of 'proplyds'—protoplanetary disks. These are thick, spinning disks of dust and gas surrounding baby stars, which are actively coalescing into new planets, moons, and solar systems right before our eyes.",
      future: "The Orion Nebula is a fleeting, ephemeral structure on a cosmic timescale. Star formation is an incredibly violent and destructive process. Over the next few million years, the intense stellar winds and torrential ultraviolet radiation from the massive newly-formed stars will continue to carve out the nebula, eventually blowing the vast majority of the remaining hydrogen gas completely away. Once the gas is dispersed, star formation will permanently cease. What will be left behind is a tightly bound 'open star cluster'—a group of young, bright stars and their newly minted planetary systems, drifting together through the spiral arms of the Milky Way, similar to the Pleiades cluster we see today.",
      citations: [
        { title: "The Orion Nebula", url: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-42/", source: "NASA Hubble" },
        { title: "Webb Observations of Orion", url: "https://webbtelescope.org/contents/news-releases/2023/news-2023-112", source: "STScI" },
        { title: "Orion Nebula", url: "https://en.wikipedia.org/wiki/Orion_Nebula", source: "Wikipedia" }
      ]
    }
  ]
};
