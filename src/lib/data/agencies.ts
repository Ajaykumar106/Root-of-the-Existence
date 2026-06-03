import { MuseumExhibit } from "../types";

export const agenciesExhibit: MuseumExhibit = {
  id: "agencies",
  title: "Space Agencies",
  subtitle: "The Vanguard of Exploration",
  category: "Humanity",
  description: "The organizations—both governmental and private—that design the rockets, train the astronauts, and build the probes that push the boundaries of human knowledge.",
  simpleExplanation: "Think of these as the ultimate exploration clubs. Instead of building ships to sail the ocean, they build rockets to sail across the stars.",
  metrics: [
    { label: "ORBITAL LAUNCHES", value: "200+ Annually" },
    { label: "ACTIVE PROBES", value: "80+ Deep Space" }
  ],
  imagePath: "/assets/images/isro.png",
  timeline: [
    { year: "1957", event: "Sputnik 1 launched by the USSR." },
    { year: "1958", event: "NASA is founded." },
    { year: "1969", event: "Apollo 11 lands humans on the Moon." },
    { year: "2002", event: "SpaceX is founded by Elon Musk." }
  ],
  physics: [
    { concept: "Delta-V", detail: "The measure of the impulse needed to perform a maneuver in space. It dictates how large a rocket must be." },
    { concept: "Escape Velocity", detail: "The speed needed to break free from a planet's gravity (11.2 km/s for Earth)." }
  ],
  deepLore: "The story of space agencies is the story of human ambition. It began as a tense, militaristic Cold War race between superpowers, driven by the fear of orbital supremacy. Today, it has evolved into a complex web of international cooperation (like the ISS) and fierce commercial competition. We are transitioning from a world where only governments could afford spaceflight, to an era where private companies are building the infrastructure for a multi-planetary economy.",
  subModules: [
    {
      id: "nasa",
      title: "NASA",
      description: "The National Aeronautics and Space Administration. The gold standard of space exploration.",
      components: [
        { label: "Budget", value: "$25+ Billion" },
        { label: "Flagship Rocket", value: "Space Launch System (SLS)" },
        { label: "Headquarters", value: "Washington, D.C." },
        { label: "Focus", value: "Deep Space & Artemis" }
      ],
      imagePath: "/assets/images/space_colony.png",
      past: "Born out of the sheer panic of the Soviet Union's successful launch of Sputnik 1 in 1957, NASA was established in 1958 by President Dwight D. Eisenhower to consolidate the United States' scattered civilian and military space efforts. The agency's defining moment came during the intense pressure of the Apollo Program. On July 20, 1969, NASA achieved the greatest technological and organizational feat in human history: landing Neil Armstrong and Buzz Aldrin on the Moon and returning them safely to Earth. Following Apollo, NASA developed the Space Shuttle program, which flew 135 missions to build the International Space Station (ISS) and launch iconic payloads like the Hubble Space Telescope. Furthermore, NASA's Jet Propulsion Laboratory (JPL) launched the legendary Voyager probes, which became the first human-made objects to ever leave the Solar System.",
      present: "Today, NASA is the undisputed global leader in scientific space exploration. Its robotic emissaries are active across the entire solar system. The Perseverance and Curiosity rovers are actively drilling for signs of ancient life on Mars, while the Ingenuity helicopter proved that powered flight on another planet is possible. In deep space, NASA is operating the James Webb Space Telescope (JWST), an engineering marvel stationed a million miles from Earth that is actively photographing the very first galaxies formed after the Big Bang, fundamentally rewriting the laws of astrophysics and cosmology. On the human spaceflight front, NASA maintains continuous human presence on the ISS, relying on commercial partners like SpaceX to ferry astronauts to and from Low Earth Orbit.",
      future: "NASA's primary objective for the coming decades is the Artemis Program—the highly ambitious initiative to return humans to the Moon, and eventually, to Mars. Unlike Apollo, Artemis is designed for long-term sustainability. It involves the deployment of the Lunar Gateway station in orbit around the Moon, and the construction of the Artemis Base Camp near the lunar South Pole, where astronauts will harvest water ice to produce rocket fuel. Concurrently, NASA is planning flagships missions to the outer solar system, including the Europa Clipper, which will investigate Jupiter's icy moon for signs of a subsurface alien ocean, and the Mars Sample Return mission, which aims to bring pristine Martian rocks back to Earth for laboratory analysis.",
      citations: [
        { title: "NASA Artemis Program", url: "https://www.nasa.gov/specials/artemis/", source: "NASA" },
        { title: "James Webb Space Telescope", url: "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope", source: "Wikipedia" },
        { title: "History of NASA", url: "https://en.wikipedia.org/wiki/NASA", source: "Wikipedia" }
      ]
    },
    {
      id: "isro",
      title: "ISRO",
      description: "The Indian Space Research Organisation. Masters of high-efficiency, low-cost space exploration.",
      components: [
        { label: "Flagship Rocket", value: "LVM3 / PSLV" },
        { label: "Headquarters", value: "Bengaluru, India" },
        { label: "Notable Feat", value: "Mangalyaan (Mars)" },
        { label: "Focus", value: "Gaganyaan (Human Spaceflight)" }
      ],
      imagePath: "/assets/images/isro.png",
      past: "Founded in 1969 by Dr. Vikram Sarabhai, the Indian Space Research Organisation (ISRO) was built on the philosophy that space technology should be used for the direct benefit of society, initially focusing on communication and weather satellites for agriculture and education. For decades, ISRO operated on a shoestring budget compared to its Western counterparts, forcing its engineers to innovate and develop remarkably cost-effective and highly reliable launch vehicles like the PSLV (Polar Satellite Launch Vehicle). ISRO shocked the world in 2014 with the Mangalyaan (Mars Orbiter Mission). India became the very first nation in history to successfully place a spacecraft into Martian orbit on its absolute first attempt, and it did so at a cost of just $74 million—less than the budget of the Hollywood movie 'Gravity'.",
      present: "ISRO has rapidly ascended to the top tier of global space agencies. In August 2023, ISRO made global history with the Chandrayaan-3 mission. The Vikram lander successfully touched down near the rugged, heavily cratered, and extremely hazardous Lunar South Pole—becoming the first nation ever to do so. The Pragyan rover deployed from the lander and conducted crucial in-situ chemical analyses of the lunar soil, confirming the presence of sulfur and oxygen in the region where massive water ice deposits are suspected to exist. Concurrently, ISRO successfully launched Aditya-L1, India's first dedicated solar observatory, which is currently stationed at the Lagrange 1 point to continuously study the Sun's violent coronal mass ejections.",
      future: "The future of ISRO is focused on the highly anticipated Gaganyaan program, which will fundamentally elevate India's status to a major space superpower. Gaganyaan aims to launch a crew of three Indian astronauts (Vyomanauts) into a 400 km Low Earth Orbit for a three-day mission using an indigenously developed orbital module and a human-rated LVM3 rocket. Beyond human spaceflight, ISRO is developing the Shukrayaan-1 orbiter to study the toxic atmosphere and surface topography of Venus. Furthermore, ISRO is collaborating heavily with NASA on the NISAR (NASA-ISRO Synthetic Aperture Radar) mission, a massive, highly advanced Earth-observing satellite that will map the entire globe every 12 days to track climate change, ice-sheet collapses, and tectonic shifts.",
      citations: [
        { title: "ISRO Official History", url: "https://en.wikipedia.org/wiki/Indian_Space_Research_Organisation", source: "Wikipedia" },
        { title: "Chandrayaan-3 Mission", url: "https://en.wikipedia.org/wiki/Chandrayaan-3", source: "Wikipedia" },
        { title: "Gaganyaan Program", url: "https://www.isro.gov.in/Gaganyaan.html", source: "ISRO" }
      ]
    },
    {
      id: "spacex",
      title: "SpaceX",
      description: "The private aerospace manufacturer that revolutionized the industry with reusable rockets.",
      components: [
        { label: "Founder", value: "Elon Musk" },
        { label: "Flagship Rocket", value: "Falcon 9 & Starship" },
        { label: "Valuation", value: "$180+ Billion" },
        { label: "Ultimate Goal", value: "Mars Colonization" }
      ],
      imagePath: "/assets/images/human_exploration.png",
      past: "Founded in 2002 by Elon Musk, Space Exploration Technologies Corp. (SpaceX) was born from the realization that the cost of spaceflight was too high due to expendable, single-use rockets. The company nearly went bankrupt in 2008 after three consecutive failures of its small Falcon 1 rocket. However, the successful fourth launch secured a massive NASA cargo contract, saving the company. SpaceX systematically disrupted the stagnant aerospace industry by achieving the holy grail of rocketry: orbital-class reusability. In 2015, they successfully landed a Falcon 9 first-stage booster vertically on a drone ship in the ocean. In 2020, they shattered the government monopoly on human spaceflight when their Crew Dragon spacecraft successfully carried NASA astronauts to the International Space Station, restoring America's independent access to space.",
      present: "Today, SpaceX completely dominates the global commercial launch market. The Falcon 9 is the most reliable and frequently launched rocket in human history, often launching multiple times a week. The company routinely lands and reuses boosters well over 15 times, drastically driving down the cost per kilogram to orbit. Leveraging this cheap access to space, SpaceX is aggressively deploying Starlink, a mega-constellation of thousands of low Earth orbit satellites designed to provide high-speed, low-latency internet to anywhere on the planet. Simultaneously, at their Starbase facility in South Texas, SpaceX is conducting rapid, iterative, explosive test flights of Starship—a fully reusable, stainless-steel super-heavy launch vehicle that is the largest and most powerful rocket ever built by humanity.",
      future: "The singular, unwavering goal of SpaceX is to make human life multi-planetary by building a self-sustaining city of one million people on Mars. Starship is the architecture designed to achieve this. NASA has selected a modified version of Starship to act as the Human Landing System (HLS) for the Artemis moon missions. Once Starship is fully operational and capable of orbital refueling, SpaceX plans to mass-produce the vehicles, launching fleets of them during the Earth-Mars transfer windows. The company aims to establish basic propellant production plants on Mars using local ice and atmospheric CO2, eventually paving the way for massive colonization efforts that could ensure the long-term survival of human consciousness.",
      citations: [
        { title: "SpaceX Starship", url: "https://www.spacex.com/vehicles/starship/", source: "SpaceX" },
        { title: "SpaceX History", url: "https://en.wikipedia.org/wiki/SpaceX", source: "Wikipedia" },
        { title: "Mars Architecture", url: "https://www.spacex.com/human-spaceflight/mars/", source: "SpaceX" }
      ]
    },
    {
      id: "esa",
      title: "ESA",
      description: "The European Space Agency. A powerful 22-nation collaborative space organization.",
      components: [
        { label: "Members", value: "22 European Nations" },
        { label: "Flagship Rocket", value: "Ariane 6" },
        { label: "Headquarters", value: "Paris, France" },
        { label: "Spaceport", value: "French Guiana" }
      ],
      imagePath: "/assets/images/earth.png",
      past: "Established in 1975, the European Space Agency (ESA) was created to pool the financial and intellectual resources of multiple European nations to compete on a global scale. Unlike NASA, which is a single government agency, ESA is an intergovernmental organization that requires complex diplomatic coordination among its 22 member states. ESA became a powerhouse in commercial satellite launching through its highly successful Ariane rocket family, launched from the Guiana Space Centre near the equator. ESA has a rich history of deep space science. In 2014, ESA achieved the seemingly impossible with the Rosetta mission. After a 10-year journey, the Rosetta spacecraft caught up with Comet 67P/Churyumov-Gerasimenko, and successfully deployed the Philae lander, which bounced and secured itself onto the surface of the speeding comet—a first in human history.",
      present: "ESA is currently a massive contributor to global space science and infrastructure. It provides crucial components for the International Space Station, including the Columbus science laboratory and the automated transfer vehicles. ESA is also the primary partner for NASA's Artemis program, manufacturing the European Service Module (ESM) that provides critical power, propulsion, water, and oxygen to the Orion crew capsule. In the realm of science, ESA recently launched the incredibly complex Jupiter Icy Moons Explorer (JUICE) in 2023. This spacecraft is currently executing a multi-year cruise through the inner solar system using gravitational slingshots, and will eventually arrive at Jupiter to conduct detailed, close-up observations of Europa, Callisto, and Ganymede.",
      future: "ESA's future is heavily focused on next-generation space observatories and climate monitoring. The agency is developing the LISA (Laser Interferometer Space Antenna) mission, a constellation of three spacecraft flying in a massive triangular formation millions of kilometers apart. LISA will act as a gargantuan observatory to detect gravitational waves from merging supermassive black holes across the universe. Additionally, ESA is a major partner in the upcoming Mars Sample Return campaign, responsible for building the Earth Return Orbiter that will capture the canister of Martian rocks in orbit and bring it safely home. However, ESA is also facing severe challenges in securing independent access to space due to massive delays in the development of its new Ariane 6 heavy-lift rocket, forcing Europe to rely temporarily on SpaceX for critical launches.",
      citations: [
        { title: "ESA Official Website", url: "https://www.esa.int/", source: "ESA" },
        { title: "JUICE Mission", url: "https://en.wikipedia.org/wiki/Jupiter_Icy_Moons_Explorer", source: "Wikipedia" },
        { title: "Ariane 6", url: "https://en.wikipedia.org/wiki/Ariane_6", source: "Wikipedia" }
      ]
    }
  ]
};
