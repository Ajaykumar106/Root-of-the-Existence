import { MuseumExhibit } from "../types";

export const agenciesExhibit: MuseumExhibit = {
  id: "future-of-space",
  title: "The Future of Space",
  subtitle: "Agencies & Exoplanets",
  category: "Future",
  description: "Humanity's next great leap involves mapping Earth-like planets beyond our solar system and establishing permanent multi-planetary colonies. The modern space race is not between two nations, but a massive global coalition of government agencies and private aerospace companies.",
  simpleExplanation: "We are no longer just looking at the stars; we are planning how to travel to them and live among them. Governments and private billionaires are building massive rockets right now to make humanity a multi-planet species.",
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
    { concept: "Terraforming", detail: "The theoretical process of modifying a planet's atmosphere, temperature, and ecology to make it Earth-like." }
  ],
  deepLore: "The survival of humanity depends on becoming a multi-planetary species. The Earth is a fragile ecosystem vulnerable to asteroid impacts, supervolcanoes, and climate collapse. Thousands of exoplanets have been found, some resting in the 'Goldilocks Zone' where liquid water could exist. The next century will define our legacy in the cosmos.",
  subModules: [
    {
      id: "nasa",
      title: "NASA (United States)",
      description: "The National Aeronautics and Space Administration. The pioneer of human spaceflight and deep space robotic exploration.",
      components: [
        { label: "Focus", value: "Lunar Base & Deep Space" },
        { label: "Flagship", value: "Artemis Program & JWST" }
      ],
      imagePath: "/assets/images/space_colony.png",
      past: "Achieved the greatest technological feat in human history in 1969 by landing Apollo 11 on the Moon. Launched Voyager 1, the first human object to leave the solar system.",
      present: "Operating the James Webb Space Telescope, redefining our view of the early universe, and flying the Ingenuity helicopter on Mars.",
      future: "The Artemis Program aims to establish the Lunar Gateway station and a permanent human base camp on the Moon's South Pole to prepare for the leap to Mars in the late 2030s.",
      citations: [
        { title: "NASA Artemis Program", url: "https://www.nasa.gov/specials/artemis/", source: "NASA" },
        { title: "James Webb Space Telescope", url: "https://webbtelescope.org/", source: "STScI" }
      ]
    },
    {
      id: "isro",
      title: "ISRO (India)",
      description: "The Indian Space Research Organisation. Renowned for achieving massive technological success with incredibly efficient, low-cost engineering.",
      components: [
        { label: "Focus", value: "Lunar & Solar Orbits" },
        { label: "Flagship", value: "Chandrayaan & Gaganyaan" }
      ],
      imagePath: "/assets/images/isro.png",
      past: "Successfully put the Mangalyaan orbiter into Mars orbit on its very first attempt in 2014, for a fraction of the cost of a Hollywood movie.",
      present: "Made global history with Chandrayaan-3 in 2023 by becoming the first nation to successfully land a rover near the Moon's rugged, water-rich South Pole.",
      future: "Developing the Gaganyaan mission to launch Indian astronauts into space autonomously, and planning Shukrayaan to orbit and study Venus.",
      citations: [
        { title: "ISRO Official Website", url: "https://www.isro.gov.in/", source: "ISRO" },
        { title: "Chandrayaan-3 Mission", url: "https://www.isro.gov.in/Chandrayaan3.html", source: "ISRO" }
      ]
    },
    {
      id: "spacex",
      title: "SpaceX",
      description: "The private aerospace giant founded by Elon Musk that revolutionized spaceflight by mastering reusable rocket technology.",
      components: [
        { label: "Focus", value: "Mars Colonization" },
        { label: "Flagship", value: "Starship Super Heavy" }
      ],
      imagePath: "/assets/images/human_exploration.png",
      past: "Broke the government monopoly on spaceflight. Became the first private company to land a booster rocket vertically and send humans to the ISS via Crew Dragon.",
      present: "Dominating global launch markets with the Falcon 9. Currently rapidly prototyping and test-launching Starship, the largest and most powerful rocket ever built.",
      future: "The singular goal of SpaceX is to make life multi-planetary by building a self-sustaining city of one million people on Mars within our lifetimes.",
      citations: [
        { title: "SpaceX Starship", url: "https://www.spacex.com/vehicles/starship/", source: "SpaceX" },
        { title: "Mars Architecture", url: "https://www.spacex.com/human-spaceflight/mars/", source: "SpaceX" }
      ]
    },
    {
      id: "esa",
      title: "ESA (Europe)",
      description: "The European Space Agency. A coalition of 22 member states focused on advanced science missions and Earth observation.",
      components: [
        { label: "Focus", value: "Icy Moons & Science" },
        { label: "Flagship", value: "JUICE Mission" }
      ],
      imagePath: "/assets/images/earth.png",
      past: "Achieved the impossible in 2014 by landing the Philae probe directly onto a speeding comet (Comet 67P) during the Rosetta mission.",
      present: "Launched the Jupiter Icy Moons Explorer (JUICE) in 2023 to spend years traveling to the Jovian system to investigate Europa, Callisto, and Ganymede.",
      future: "Collaborating with NASA on the Mars Sample Return mission to bring Martian soil back to Earth, and developing the LISA observatory to detect gravitational waves from space.",
      citations: [
        { title: "ESA Official Website", url: "https://www.esa.int/", source: "ESA" },
        { title: "JUICE Mission", url: "https://www.esa.int/Science_Exploration/Space_Science/Juice", source: "ESA" }
      ]
    }
  ]
};
