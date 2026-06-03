import { MuseumExhibit } from "../types";

export const solarSystemExhibit: MuseumExhibit = {
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
    { year: "4.6 Billion Yrs Ago", event: "The solar nebula collapses to form the Sun." },
    { year: "4.5 Billion Yrs Ago", event: "The planets form from the accretion disk." },
    { year: "4.5 Billion Yrs Ago", event: "A Mars-sized object collides with Earth, creating our Moon." },
    { year: "3.8 Billion Yrs Ago", event: "Late Heavy Bombardment delivers water to inner planets." }
  ],
  physics: [
    { concept: "Orbital Mechanics", detail: "Planets are essentially in a state of constant free-fall toward the Sun, moving sideways fast enough to miss it." },
    { concept: "Heliopause", detail: "The boundary where the Sun's solar wind stops and interstellar space begins." }
  ],
  deepLore: "The Solar System is our island in a vast, dark ocean. From the scorching surface of Venus to the freezing methane lakes of Titan, our tiny neighborhood contains an incredible diversity of worlds. The inner planets are rocky survivors, while the outer giants are massive balls of gas and ice.",
  subModules: [
    {
      id: "mercury",
      title: "Mercury",
      description: "The smallest and innermost planet. A cratered, desolate world of extreme temperature swings.",
      components: [
        { label: "Core", value: "Massive Iron Core" },
        { label: "Atmosphere", value: "Exosphere (O, Na, H)" }
      ],
      imagePath: "/assets/images/mercury.png",
      past: "Formed 4.5 billion years ago, it likely suffered a massive impact that stripped away much of its original crust and mantle, leaving behind its unusually large iron core.",
      present: "Currently scorching at 800°F (430°C) during the day and freezing at -290°F (-180°C) at night due to its lack of atmosphere.",
      future: "The BepiColombo mission (ESA/JAXA) will arrive in orbit in late 2025 to study its magnetic field and core composition in unprecedented detail.",
      citations: [
        { title: "Mercury: Facts", url: "https://science.nasa.gov/mercury/facts/", source: "NASA Science" },
        { title: "BepiColombo Mission", url: "https://www.esa.int/Science_Exploration/Space_Science/BepiColombo", source: "ESA" }
      ]
    },
    {
      id: "venus",
      title: "Venus",
      description: "Earth's toxic twin. A hellish world crushed by a runaway greenhouse effect.",
      components: [
        { label: "Atmosphere", value: "Thick CO2 & Sulfuric Acid" },
        { label: "Surface Pressure", value: "92x Earth's" }
      ],
      imagePath: "/assets/images/venus.png",
      past: "Billions of years ago, Venus may have been a habitable world with liquid water oceans, before a runaway greenhouse effect boiled the oceans away.",
      present: "The hottest planet in the solar system. Its thick atmosphere traps heat, keeping the surface at a lead-melting 900°F (475°C).",
      future: "NASA's upcoming DAVINCI and VERITAS missions (launching ~2029) will plunge through the toxic clouds to map the surface and search for signs of past water.",
      citations: [
        { title: "Venus: Overview", url: "https://science.nasa.gov/venus/", source: "NASA Science" },
        { title: "DAVINCI Mission", url: "https://ssed.gsfc.nasa.gov/davinci/", source: "NASA GSFC" }
      ]
    },
    {
      id: "earth",
      title: "Earth",
      description: "The pale blue dot. The only known world to harbor life, perfectly positioned in the habitable zone.",
      components: [
        { label: "Surface", value: "71% Liquid Water" },
        { label: "Atmosphere", value: "Nitrogen & Oxygen" }
      ],
      imagePath: "/assets/images/earth.png",
      past: "Cooled from a molten state 4.5 billion years ago. Life emerged in the oceans roughly 3.5 billion years ago, slowly oxygenating the atmosphere.",
      present: "A thriving biosphere currently undergoing rapid climate change driven by industrial human civilization.",
      future: "Humanity is working to mitigate climate change while simultaneously building the infrastructure to become a multi-planetary species.",
      citations: [
        { title: "Earth: Facts", url: "https://science.nasa.gov/earth/facts/", source: "NASA Science" },
        { title: "History of Earth", url: "https://en.wikipedia.org/wiki/History_of_Earth", source: "Wikipedia" }
      ]
    },
    {
      id: "moon",
      title: "The Moon",
      description: "Earth's faithful companion, responsible for the tides and stabilizing our planet's wobble.",
      components: [
        { label: "Surface", value: "Regolith & Basalt" },
        { label: "Gravity", value: "16% of Earth's" }
      ],
      imagePath: "/assets/images/moon.png",
      past: "Born from a cataclysmic collision between a young Earth and a Mars-sized protoplanet named Theia.",
      present: "Tidally locked to Earth, showing us only one face. Heavily cratered and completely silent.",
      future: "NASA's Artemis Program will establish a permanent human base camp at the Lunar South Pole in the 2030s to harvest water ice.",
      citations: [
        { title: "Earth's Moon", url: "https://science.nasa.gov/moon/", source: "NASA Science" },
        { title: "Artemis Program", url: "https://www.nasa.gov/specials/artemis/", source: "NASA" }
      ]
    },
    {
      id: "mars",
      title: "Mars",
      description: "The Red Planet. A cold, dusty desert world that was once wet and warm.",
      components: [
        { label: "Surface", value: "Iron Oxide Dust" },
        { label: "Atmosphere", value: "Thin CO2" }
      ],
      imagePath: "/assets/images/mars.png",
      past: "Billions of years ago, Mars had a thick atmosphere, flowing rivers, and deep lakes. It lost its magnetic field, and the solar wind stripped its atmosphere away.",
      present: "A frozen desert populated entirely by robotic rovers (Perseverance, Curiosity) drilling into ancient lake beds to find fossilized microbial life.",
      future: "The ultimate destination for human expansion. SpaceX plans to send the first crewed Starship missions to Mars within the next two decades.",
      citations: [
        { title: "Mars Exploration Program", url: "https://mars.nasa.gov/", source: "NASA JPL" },
        { title: "SpaceX Mars Architecture", url: "https://www.spacex.com/human-spaceflight/mars/", source: "SpaceX" }
      ]
    },
    {
      id: "jupiter",
      title: "Jupiter",
      description: "The King of Planets. A massive gas giant that protects the inner planets by catching asteroids.",
      components: [
        { label: "Core", value: "Dense Rock & Ice" },
        { label: "Mantle", value: "Metallic Hydrogen" }
      ],
      imagePath: "/assets/images/jupiter.png",
      past: "The first planet to form, migrating inward and outward early in the solar system's history, shaping the orbits of the other planets (The Grand Tack hypothesis).",
      present: "Raging with massive storms, including the Great Red Spot. The Juno spacecraft is currently orbiting and mapping its chaotic magnetic field.",
      future: "Focus is shifting to its icy moons (Europa and Ganymede), which harbor massive subsurface oceans that could support alien life (Europa Clipper mission).",
      citations: [
        { title: "Jupiter: In Depth", url: "https://science.nasa.gov/jupiter/in-depth/", source: "NASA Science" },
        { title: "Europa Clipper", url: "https://europa.nasa.gov/", source: "NASA JPL" }
      ]
    },
    {
      id: "saturn",
      title: "Saturn",
      description: "The Jewel of the Solar System, famous for its massive, complex ring system.",
      components: [
        { label: "Atmosphere", value: "Hydrogen & Helium" },
        { label: "Rings", value: "Chunks of Ice and Rock" }
      ],
      imagePath: "/assets/images/saturn.png",
      past: "Formed in the outer solar nebula. Its iconic rings are relatively young—likely formed 100 million years ago when a moon was shredded by Saturn's gravity.",
      present: "A calm-looking gas giant with incredibly fast winds. Its moon Enceladus is actively shooting geysers of saltwater into space.",
      future: "NASA's Dragonfly mission (launching 2028) will send a nuclear-powered drone to fly through the thick, organic-rich atmosphere of its largest moon, Titan.",
      citations: [
        { title: "Saturn: Overview", url: "https://science.nasa.gov/saturn/", source: "NASA Science" },
        { title: "Dragonfly Mission", url: "https://dragonfly.jhuapl.edu/", source: "JHU APL" }
      ]
    },
    {
      id: "uranus",
      title: "Uranus",
      description: "The Sideways Planet. An ice giant rotating on its side, glowing a pale cyan blue.",
      components: [
        { label: "Mantle", value: "Icy Water, Ammonia, Methane" },
        { label: "Tilt", value: "97.77 Degrees" }
      ],
      imagePath: "/assets/images/uranus.png",
      past: "Likely suffered a colossal collision with an Earth-sized object early in its history, completely knocking it onto its side.",
      present: "The coldest planetary atmosphere in the solar system. It has faint, dark rings and a chaotic, off-center magnetic field.",
      future: "The scientific community has designated a flagship Uranus Orbiter and Probe as the highest-priority planetary mission for the 2030s.",
      citations: [
        { title: "Uranus: In Depth", url: "https://science.nasa.gov/uranus/in-depth/", source: "NASA Science" },
        { title: "Planetary Science Decadal Survey", url: "https://www.nationalacademies.org/our-work/planetary-science-and-astrobiology-decadal-survey-2023-2032", source: "National Academies" }
      ]
    },
    {
      id: "neptune",
      title: "Neptune",
      description: "The Windy Planet. A dark, cold, and supersonic ice giant at the edge of the solar system.",
      components: [
        { label: "Atmosphere", value: "Hydrogen, Helium, Methane" },
        { label: "Winds", value: "Up to 1,200 mph" }
      ],
      imagePath: "/assets/images/neptune.png",
      past: "Formed closer to the Sun and migrated outward, pushing a massive disk of icy debris out to form the Kuiper Belt.",
      present: "Raging with supersonic winds. Its massive moon Triton orbits backward and is slowly spiraling inward toward destruction.",
      future: "Like Uranus, Neptune is a prime target for future orbiter missions to understand how 'Ice Giants'—the most common type of exoplanet—actually work.",
      citations: [
        { title: "Neptune: Overview", url: "https://science.nasa.gov/neptune/", source: "NASA Science" },
        { title: "Triton (Moon)", url: "https://science.nasa.gov/neptune/moons/triton/", source: "NASA Science" }
      ]
    },
    {
      id: "pluto",
      title: "Pluto",
      description: "The King of the Kuiper Belt. A complex, icy dwarf planet with a giant heart-shaped glacier.",
      components: [
        { label: "Surface", value: "Nitrogen Ice" },
        { label: "Status", value: "Dwarf Planet" }
      ],
      imagePath: "/assets/images/pluto.png",
      past: "Discovered in 1930 and considered the 9th planet until 2006, when the discovery of similar icy bodies in the Kuiper Belt forced its reclassification.",
      present: "Revealed by the New Horizons probe in 2015 to be a geologically active world with towering water-ice mountains and flowing nitrogen glaciers.",
      future: "Astronomers are currently using telescopes to search for 'Planet Nine', a hypothetical massive planet far beyond Pluto shaping the orbits of distant Kuiper Belt objects.",
      citations: [
        { title: "Pluto: Facts", url: "https://science.nasa.gov/pluto/facts/", source: "NASA Science" },
        { title: "New Horizons Mission", url: "https://www.nasa.gov/mission_pages/newhorizons/main/index.html", source: "NASA" }
      ]
    }
  ]
};
