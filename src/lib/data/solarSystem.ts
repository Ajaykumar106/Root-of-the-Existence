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
        { label: "Atmosphere", value: "Exosphere (O, Na, H)" },
        { label: "Day Length", value: "176 Earth Days" },
        { label: "Gravity", value: "3.7 m/s²" }
      ],
      imagePath: "/assets/images/mercury.png",
      past: "Mercury formed roughly 4.5 billion years ago in the hottest, most violent region of the early solar nebula. According to the Giant Impact Hypothesis, the young proto-Mercury was originally much larger, similar to Earth or Venus. However, it suffered a catastrophic collision with a massive planetesimal. This apocalyptic impact blasted away the majority of its original rocky mantle and crust, which were then either absorbed by the Sun or blown outward. What remained was essentially the planetary core—a massive, dense sphere of metallic iron that makes up nearly 85% of the planet's radius today. Following this impact, the planet rapidly cooled, causing its iron core to shrink and literally crumpling the rocky surface, forming massive fault scarps (cliffs) that run for hundreds of miles across the landscape.",
      present: "Today, Mercury is a geologically dead, heavily cratered world that bears a striking resemblance to Earth's Moon. Because it lacks a substantial atmosphere to trap heat, it experiences the most extreme temperature fluctuations in the entire Solar System. During the long, brutal day, surface temperatures soar to 800°F (430°C), hot enough to melt lead. But as night falls, the heat instantly radiates away into space, plunging temperatures down to a bone-chilling -290°F (-180°C). Despite these extremes, NASA's MESSENGER spacecraft made a shocking discovery in 2012: deep inside permanently shadowed craters at Mercury's north and south poles, there are massive deposits of pure water ice. This ice was likely delivered by comet impacts billions of years ago and has remained frozen in the perpetual darkness.",
      future: "The future of Mercury exploration relies on the BepiColombo mission, a joint venture between the European Space Agency (ESA) and the Japan Aerospace Exploration Agency (JAXA). Launched in 2018, the dual-spacecraft mission will finally enter Mercury's orbit in late 2025 after a complex seven-year journey involving multiple planetary flybys. BepiColombo will deploy two separate orbiters: the Mercury Planetary Orbiter (MPO) and the Mercury Magnetospheric Orbiter (MMO). Together, they will map the planet's surface in unprecedented multi-wavelength detail, probe the mysterious dynamics of its weak but persistent magnetic field, and investigate the exact composition of the polar ice deposits. This mission aims to definitively answer how a planet so close to its star could form and evolve.",
      citations: [
        { title: "Mercury: In Depth", url: "https://science.nasa.gov/mercury/facts/", source: "NASA Science" },
        { title: "BepiColombo (ESA)", url: "https://www.esa.int/Science_Exploration/Space_Science/BepiColombo", source: "ESA Official" },
        { title: "Mercury (Planet)", url: "https://en.wikipedia.org/wiki/Mercury_(planet)", source: "Wikipedia" }
      ]
    },
    {
      id: "venus",
      title: "Venus",
      description: "Earth's toxic twin. A hellish world crushed by a runaway greenhouse effect.",
      components: [
        { label: "Atmosphere", value: "Thick CO2 & Sulfuric Acid" },
        { label: "Surface Pressure", value: "92x Earth's" },
        { label: "Surface Temp", value: "900°F / 475°C" },
        { label: "Rotation", value: "Retrograde (Backwards)" }
      ],
      imagePath: "/assets/images/venus.png",
      past: "Venus is often called Earth's 'twin' because the two planets are almost identical in size, mass, and composition. For the first two billion years of its existence, Venus was likely a very Earth-like world. Climate models suggest it harbored shallow liquid water oceans, a stable climate, and potentially even the conditions necessary for microbial life to arise. However, as the young Sun slowly grew hotter and more luminous over billions of years, the delicate balance of the Venusian climate was shattered. The increased solar radiation caused the oceans to evaporate into the atmosphere. Because water vapor is a potent greenhouse gas, this trapped even more heat, triggering a catastrophic 'runaway greenhouse effect'. The intense heat baked carbon dioxide out of the planet's rocks, creating a suffocating, hyper-dense atmosphere that permanently transformed Venus into a planetary oven.",
      present: "Venus today is the most hostile environment in the inner Solar System. Its atmosphere is composed of 96.5% carbon dioxide, with thick, opaque clouds made of highly corrosive sulfuric acid. This atmospheric blanket is so incredibly dense that the surface pressure is 92 times greater than on Earth—equivalent to being 3,000 feet (900 meters) underwater. The greenhouse effect is absolute, keeping the surface at a uniform, lead-melting temperature of 900°F (475°C) day and night, from the equator to the poles. The Soviet Venera landers in the 1970s and 80s are the only spacecraft to have successfully transmitted images from the surface, showing a fractured, basaltic landscape under an eerie, dim orange sky. Every lander succumbed to the extreme heat and pressure within a maximum of two hours.",
      future: "After decades of neglect, Venus is undergoing a renaissance of scientific interest. In the late 2020s and early 2030s, NASA and the ESA are launching a highly coordinated fleet of next-generation spacecraft. NASA's DAVINCI mission will drop a heavily armored titanium descent sphere through the toxic clouds, sampling atmospheric chemistry foot-by-foot before crashing into the Alpha Regio highlands. Simultaneously, NASA's VERITAS orbiter and ESA's EnVision orbiter will use advanced synthetic aperture radar to penetrate the dense clouds, mapping the entire surface in ultra-high resolution. These missions will search for active volcanoes, tectonic fault lines, and chemical signatures of past water, finally answering whether Earth's twin was once a living world before it fell to ruin.",
      citations: [
        { title: "Venus: Overview", url: "https://science.nasa.gov/venus/", source: "NASA Science" },
        { title: "NASA DAVINCI Mission", url: "https://en.wikipedia.org/wiki/DAVINCI", source: "Wikipedia" },
        { title: "Venus Runaway Greenhouse", url: "https://en.wikipedia.org/wiki/Runaway_greenhouse_effect", source: "Wikipedia" }
      ]
    },
    {
      id: "earth",
      title: "Earth",
      description: "The pale blue dot. The only known world to harbor life, perfectly positioned in the habitable zone.",
      components: [
        { label: "Surface", value: "71% Liquid Water" },
        { label: "Atmosphere", value: "Nitrogen & Oxygen" },
        { label: "Magnetic Field", value: "Active Dynamo" },
        { label: "Biosphere", value: "8.7 Million Species" }
      ],
      imagePath: "/assets/images/earth.png",
      past: "Earth coalesced from the solar nebula 4.54 billion years ago as a molten sphere of rock. During the Hadean Eon, the surface was a hellscape of active volcanism and frequent asteroid bombardments. As the planet cooled, water vapor condensed into vast oceans. Around 3.5 to 3.8 billion years ago, deep within the hydrothermal vents of these primordial oceans, simple single-celled life arose. Over billions of years, cyanobacteria developed photosynthesis, triggering the Great Oxidation Event, which fundamentally altered the atmosphere by filling it with oxygen. This paved the way for complex multicellular life. The planet has survived five major mass extinctions, the most famous being the Chicxulub asteroid impact 66 million years ago, which annihilated the non-avian dinosaurs and allowed mammals to ascend to dominance.",
      present: "Earth is the ultimate anomaly in the known universe—a pale blue dot teeming with life. It possesses a powerful magnetic field generated by a spinning liquid iron core, which acts as an invisible shield against deadly solar radiation and cosmic rays. Its atmosphere is a perfect, breathable mixture of 78% nitrogen and 21% oxygen. The surface is continuously recycled by the slow, grinding movement of tectonic plates, which regulates the long-term carbon cycle and stabilizes the climate. Currently, the dominant species—Homo sapiens—has established a globally connected, highly technological civilization. However, this rapid industrialization has triggered severe anthropogenic climate change, rapidly increasing greenhouse gas concentrations and pushing the biosphere toward a potential sixth mass extinction.",
      future: "The future of Earth is entirely dependent on humanity's ability to navigate the critical bottleneck of the 21st century. In the short term, massive global efforts are required to transition to renewable energy (solar, wind, fusion) to stabilize the climate and prevent catastrophic ecological collapse. In the long term, over hundreds of millions of years, the Sun will slowly increase in luminosity. Roughly 1 billion years from now, the Sun will be so hot that Earth's oceans will begin to boil, triggering a runaway greenhouse effect similar to Venus. To survive this inevitable cosmic destiny, humanity must become a multi-planetary species, establishing self-sustaining colonies on Mars and perhaps the moons of the outer gas giants, ensuring the light of consciousness survives the death of our homeworld.",
      citations: [
        { title: "Earth: Facts", url: "https://science.nasa.gov/earth/facts/", source: "NASA Science" },
        { title: "History of Earth", url: "https://en.wikipedia.org/wiki/History_of_Earth", source: "Wikipedia" },
        { title: "Future of Earth", url: "https://en.wikipedia.org/wiki/Future_of_Earth", source: "Wikipedia" }
      ]
    },
    {
      id: "moon",
      title: "The Moon",
      description: "Earth's faithful companion, responsible for the tides and stabilizing our planet's wobble.",
      components: [
        { label: "Surface", value: "Regolith & Basalt" },
        { label: "Gravity", value: "16% of Earth's" },
        { label: "Distance", value: "238,900 Miles" },
        { label: "Orbit", value: "Tidally Locked" }
      ],
      imagePath: "/assets/images/moon.png",
      past: "According to the most widely accepted scientific model, the Giant Impact Hypothesis, the Moon was forged in violence roughly 4.5 billion years ago. A protoplanet the size of Mars, named Theia, collided obliquely with the early Earth. The catastrophic impact obliterated Theia and blasted massive amounts of Earth's crust and mantle into orbit. Over millions of years, this super-heated debris ring coalesced under its own gravity to form the Moon. Because it was born so close to Earth, Earth's immense gravity forced the Moon into a tidally locked orbit, ensuring that the same side (the 'near side') always faces our planet. For billions of years, the Moon was heavily bombarded by asteroids, creating the vast dark plains of solidified basaltic lava known as 'maria' that we see as the 'Man in the Moon'.",
      present: "Today, the Moon is a geologically dead, silent world. It has no atmosphere, no liquid water, no active volcanoes, and no magnetic field. The surface is covered in a thick layer of fine, razor-sharp gray dust called lunar regolith, created by billions of years of micrometeorite impacts pulverizing the rock. In 1969, NASA's Apollo 11 mission made history when Neil Armstrong and Buzz Aldrin became the first humans to walk on its surface. Six Apollo missions landed a total of 12 men on the Moon, returning 842 pounds of lunar rocks that fundamentally changed our understanding of planetary formation. Recently, orbiters have confirmed the presence of millions of tons of water ice hidden deep within the permanently shadowed craters of the lunar South Pole.",
      future: "The Moon is about to become humanity's first deep-space outpost. NASA's Artemis Program is actively working to return humans to the lunar surface before the end of the 2020s. Unlike the brief 'flags and footprints' missions of the Apollo era, Artemis aims to establish a permanent, sustainable human presence. The plan involves building the Lunar Gateway—a small space station in orbit around the Moon—and a permanent Base Camp at the Lunar South Pole. This location was chosen because the massive deposits of water ice can be mined and split into hydrogen and oxygen to create breathable air, drinking water, and, crucially, rocket fuel. The Moon will serve as the ultimate proving ground for the technologies required to send humans to Mars.",
      citations: [
        { title: "Earth's Moon", url: "https://science.nasa.gov/moon/", source: "NASA Science" },
        { title: "Artemis Program Overview", url: "https://www.nasa.gov/specials/artemis/", source: "NASA" },
        { title: "Giant Impact Hypothesis", url: "https://en.wikipedia.org/wiki/Giant-impact_hypothesis", source: "Wikipedia" }
      ]
    },
    {
      id: "mars",
      title: "Mars",
      description: "The Red Planet. A cold, dusty desert world that was once wet and warm.",
      components: [
        { label: "Surface", value: "Iron Oxide Dust" },
        { label: "Atmosphere", value: "Thin CO2 (1% of Earth)" },
        { label: "Moons", value: "Phobos & Deimos" },
        { label: "Gravity", value: "38% of Earth's" }
      ],
      imagePath: "/assets/images/mars.png",
      past: "Billions of years ago, Mars was a vibrant, dynamic world that looked remarkably similar to early Earth. It possessed a thick, protective atmosphere, a strong global magnetic field, and a relatively warm climate. Geological evidence gathered by orbiters and rovers proves beyond a doubt that vast networks of rivers flowed across its surface, emptying into deep, long-standing lakes and potentially a massive ocean covering its northern hemisphere. The conditions were perfect for the emergence of microbial life. However, roughly 4 billion years ago, the Martian core cooled, shutting down the planetary dynamo. Without a magnetic field to deflect the solar wind, the Sun systematically stripped away the Martian atmosphere. The oceans boiled away or froze underground, transforming the planet into the frozen desert we see today.",
      present: "Modern Mars is a freezing, irradiated wasteland covered in toxic, rust-colored iron oxide dust. The atmosphere is 100 times thinner than Earth's and composed almost entirely of carbon dioxide. Despite its desolation, Mars is the most explored planet in the Solar System. It is currently inhabited by a fleet of robotic explorers. NASA's Perseverance and Curiosity rovers are actively driving through ancient, dried-up river deltas, drilling into the sedimentary rock to search for fossilized chemical signatures of ancient alien microbes. High above, orbiters from NASA, the ESA, India (ISRO), and China (CNSA) are mapping the surface in high resolution, discovering massive subsurface glaciers of pure water ice hidden just beneath the dirt at the mid-latitudes.",
      future: "Mars represents the ultimate frontier and the key to humanity's long-term survival. SpaceX, founded by Elon Musk, is dedicating its entire existence to building a self-sustaining city of one million people on Mars within our lifetimes. They are currently testing Starship, a fully reusable, massive launch vehicle designed to carry 100 colonists at a time. The first crewed missions, expected in the late 2030s or 2040s, will focus on establishing a basic propellant plant to generate methane rocket fuel from the Martian atmosphere and ice. Decades later, humanity may attempt terraforming—the theoretical process of intentionally releasing greenhouse gases to warm the planet, melt the polar ice caps, and thicken the atmosphere to make the surface habitable once again.",
      citations: [
        { title: "Mars Exploration Program", url: "https://mars.nasa.gov/", source: "NASA JPL" },
        { title: "SpaceX Mars Architecture", url: "https://www.spacex.com/human-spaceflight/mars/", source: "SpaceX" },
        { title: "Terraforming of Mars", url: "https://en.wikipedia.org/wiki/Terraforming_of_Mars", source: "Wikipedia" }
      ]
    },
    {
      id: "jupiter",
      title: "Jupiter",
      description: "The King of Planets. A massive gas giant that protects the inner planets by catching asteroids.",
      components: [
        { label: "Core", value: "Dense Rock & Ice" },
        { label: "Mantle", value: "Metallic Hydrogen" },
        { label: "Moons", value: "95 Known Moons" },
        { label: "Mass", value: "318x Earth's" }
      ],
      imagePath: "/assets/images/jupiter.png",
      past: "Jupiter was the first planet to form in our Solar System, coalescing from the leftover gas and dust shortly after the Sun ignited. It acts as the gravity anchor of the entire system. According to the Grand Tack Hypothesis, the young Jupiter migrated inward toward the Sun, sweeping up debris and shaping the formation of the inner rocky planets, before being pulled back to its current orbit by the gravitational influence of Saturn. Jupiter is so massive—more than twice as massive as all the other planets combined—that it fundamentally dictated the architecture of the Solar System. If it had been about 80 times more massive, the immense pressure and heat in its core would have triggered nuclear fusion, turning it into a second star.",
      present: "Jupiter is a swirling, chaotic sphere of hydrogen and helium gas with no solid surface. Its atmosphere is a violent painting of turbulent cloud bands driven by incredibly fast jet streams and intense Coriolis forces. The most famous feature is the Great Red Spot, a gargantuan anticyclonic storm larger than Earth that has been raging for over 300 years. Deep beneath the crushing atmosphere, the pressure is so intense that hydrogen gas is squeezed into a liquid metallic state, conducting electricity and generating the most powerful planetary magnetic field in the solar system. NASA's Juno spacecraft is currently executing highly elliptical orbits, diving dangerously close to the cloud tops to map this magnetic field and measure the amount of water in the deep atmosphere.",
      future: "The future of Jovian exploration is entirely focused on its massive Galilean moons, specifically Europa and Ganymede. Beneath the miles-thick, radiation-blasted ice crust of Europa lies a global, liquid saltwater ocean containing more than twice the amount of water found on Earth. Hydrothermal vents at the bottom of this alien ocean could provide the energy and chemical nutrients necessary to support extraterrestrial life. NASA's Europa Clipper mission, launching soon, will conduct dozens of low-altitude flybys to scan the ice shell and search for plumes of water erupting into space. Following it, the ESA's JUICE (Jupiter Icy Moons Explorer) mission will arrive in 2031 to study Ganymede, the only moon in the solar system with its own magnetic field.",
      citations: [
        { title: "Jupiter: In Depth", url: "https://science.nasa.gov/jupiter/in-depth/", source: "NASA Science" },
        { title: "Europa Clipper Mission", url: "https://europa.nasa.gov/", source: "NASA JPL" },
        { title: "ESA JUICE Mission", url: "https://en.wikipedia.org/wiki/Jupiter_Icy_Moons_Explorer", source: "Wikipedia" }
      ]
    },
    {
      id: "saturn",
      title: "Saturn",
      description: "The Jewel of the Solar System, famous for its massive, complex ring system.",
      components: [
        { label: "Atmosphere", value: "Hydrogen & Helium" },
        { label: "Rings", value: "Chunks of Ice and Rock" },
        { label: "Moons", value: "146 Known Moons" },
        { label: "Density", value: "Less than Water" }
      ],
      imagePath: "/assets/images/saturn.png",
      past: "Saturn formed in the cold, outer regions of the solar nebula roughly 4.5 billion years ago. Like Jupiter, it is a massive ball of gas and liquid metallic hydrogen, but it is much less dense. In fact, Saturn is the only planet in the Solar System that is less dense than liquid water; if you could find a bathtub large enough, Saturn would literally float. For decades, scientists debated the age of Saturn's iconic ring system. Data from the incredible Cassini mission finally revealed that the rings are likely very young in astronomical terms—perhaps only 10 to 100 million years old. They were likely created when a small, icy moon wandered too close to Saturn and was violently ripped to shreds by the planet's immense tidal forces.",
      present: "Saturn is a calm-looking, pale yellow gas giant, but its atmosphere hides incredibly fast winds that can reach 1,100 mph (1,800 km/h) at the equator. The Cassini spacecraft, which orbited Saturn for 13 years before intentionally plunging into its atmosphere in 2017, completely revolutionized our understanding of the system. Cassini discovered that Saturn's tiny, icy moon Enceladus is geologically active. Massive geysers at Enceladus's south pole are continuously erupting jets of saltwater, organic molecules, and silica into space, feeding Saturn's E-ring. This discovery instantly made Enceladus one of the most promising places in the entire universe to search for alien microbial life.",
      future: "The next great leap in exploring the Saturnian system is NASA's incredibly ambitious Dragonfly mission. Scheduled to launch in 2028, Dragonfly is a nuclear-powered, dual-quadcopter drone. It will fly through the thick, hazy, nitrogen-rich atmosphere of Saturn's largest moon, Titan. Titan is a bizarre, deeply frozen version of early Earth; it is the only moon with a thick atmosphere, and it has an active weather cycle of rain, rivers, and lakes. However, the liquid is not water—it is liquid methane and ethane. Dragonfly will fly from location to location, landing on the organic sand dunes and icy plains to sample the complex chemistry, searching for the building blocks of life in a deeply alien environment.",
      citations: [
        { title: "Saturn: Overview", url: "https://science.nasa.gov/saturn/", source: "NASA Science" },
        { title: "Dragonfly Rotorcraft Mission", url: "https://en.wikipedia.org/wiki/Dragonfly_(spacecraft)", source: "Wikipedia" },
        { title: "Cassini-Huygens Mission", url: "https://science.nasa.gov/mission/cassini/", source: "NASA" }
      ]
    },
    {
      id: "uranus",
      title: "Uranus",
      description: "The Sideways Planet. An ice giant rotating on its side, glowing a pale cyan blue.",
      components: [
        { label: "Mantle", value: "Icy Water, Ammonia, Methane" },
        { label: "Tilt", value: "97.77 Degrees" },
        { label: "Atmosphere", value: "Hydrogen, Helium, Methane" },
        { label: "Rings", value: "13 Faint Rings" }
      ],
      imagePath: "/assets/images/uranus.png",
      past: "Uranus was the first planet to be discovered using a telescope, spotted by astronomer William Herschel in 1781. Unlike the gas giants Jupiter and Saturn, Uranus is classified as an 'Ice Giant'. Its interior is composed of a dense fluid 'icy' mantle of water, ammonia, and methane, surrounding a small rocky core. The most defining characteristic of Uranus is its extreme axial tilt of 97.77 degrees. It literally rotates on its side, rolling around the Sun like a bowling ball. Scientists theorize that early in the formation of the solar system, a colossal collision with an Earth-sized protoplanet struck Uranus with unimaginable force, completely knocking the entire planet onto its side and creating its chaotic, off-center magnetic field.",
      present: "Uranus appears as a featureless, pale cyan-blue sphere, owing its color to the methane gas in its upper atmosphere absorbing red light. It holds the record for the coldest planetary atmosphere in the Solar System, with temperatures dropping to an astonishing -371°F (-224°C). Because of its extreme tilt, Uranus experiences the most extreme seasons of any planet. Each pole gets 42 years of continuous, unbroken sunlight, followed by 42 years of absolute, freezing darkness. The planet has only been visited once in human history, by the Voyager 2 spacecraft during a brief flyby in 1986. Voyager revealed a complex system of 13 faint, dark rings and a collection of icy moons that show signs of deep impact craters and massive, ancient geological fractures.",
      future: "For decades, Uranus has been completely ignored in favor of missions to Mars and Jupiter. However, this is about to change. The prestigious Planetary Science Decadal Survey, released by the National Academies of Sciences, officially designated a flagship 'Uranus Orbiter and Probe' (UOP) as the highest priority new planetary mission for the 2030s. This multi-billion dollar mission would finally return a dedicated spacecraft to the ice giant. It would spend years orbiting Uranus, dropping an atmospheric probe into the cyan clouds to measure wind speeds and chemistry, and conducting deep-dive flybys of its strange, heavily fractured moons like Miranda, which features the tallest cliff face in the known solar system.",
      citations: [
        { title: "Uranus: In Depth", url: "https://science.nasa.gov/uranus/in-depth/", source: "NASA Science" },
        { title: "Uranus Orbiter and Probe", url: "https://en.wikipedia.org/wiki/Uranus_Orbiter_and_Probe", source: "Wikipedia" },
        { title: "Planetary Science Decadal Survey", url: "https://www.nationalacademies.org/our-work/planetary-science-and-astrobiology-decadal-survey-2023-2032", source: "National Academies" }
      ]
    },
    {
      id: "neptune",
      title: "Neptune",
      description: "The Windy Planet. A dark, cold, and supersonic ice giant at the edge of the solar system.",
      components: [
        { label: "Atmosphere", value: "Hydrogen, Helium, Methane" },
        { label: "Winds", value: "Up to 1,200 mph (2,000 km/h)" },
        { label: "Distance", value: "2.8 Billion Miles" },
        { label: "Core", value: "Rock & Iron" }
      ],
      imagePath: "/assets/images/neptune.png",
      past: "Neptune is unique in that it was the first planet located through mathematical prediction rather than empirical observation. In the 1840s, astronomers noticed that the orbit of Uranus was deviating from the laws of Newtonian gravity, suggesting a massive, unseen object was pulling on it. Urbain Le Verrier calculated the exact position of this ghost planet, and it was discovered via telescope precisely where he predicted. Early in the solar system's history, Neptune likely formed much closer to the Sun. Over millions of years, it migrated outward. As it pushed its way into the outer darkness, its massive gravity scattered a colossal disk of icy debris, throwing comets and dwarf planets outward to create the vast, ring-shaped region known today as the Kuiper Belt.",
      present: "Neptune is a deep, vivid azure blue world located 30 times further from the Sun than Earth. Despite being incredibly cold and far from any solar heat, it possesses the most dynamic and violent weather in the Solar System. Supersonic winds whip through the upper atmosphere at speeds exceeding 1,200 mph (2,000 km/h)—faster than the speed of sound on Earth. Like Uranus, Neptune has only been visited once, by Voyager 2 in 1989. Voyager discovered the 'Great Dark Spot', a massive, spinning storm the size of Earth that has since vanished and reappeared in different locations. Neptune's largest moon, Triton, is a bizarre world covered in 'cantaloupe terrain'. It orbits Neptune backwards (retrograde), proving that it is actually a massive Kuiper Belt object that Neptune's gravity captured billions of years ago.",
      future: "Because Kepler telescope data reveals that 'Ice Giants' like Neptune and Uranus are the most common type of exoplanet in the galaxy, scientists are desperate to understand how they work. While a Uranus orbiter is currently the top priority, a Neptune flagship mission is highly desired for the 2040s. A dedicated Neptune orbiter would study the internal heat source driving its supersonic winds. Furthermore, it would extensively study Triton. Because Triton is slowly spiraling inward due to tidal friction, it will eventually be torn apart by Neptune's gravity, forming a magnificent ring system that will rival Saturn's. A future mission could determine if Triton, like Europa, harbors a liquid ocean beneath its frozen nitrogen surface.",
      citations: [
        { title: "Neptune: Overview", url: "https://science.nasa.gov/neptune/", source: "NASA Science" },
        { title: "Triton (Moon)", url: "https://en.wikipedia.org/wiki/Triton_(moon)", source: "Wikipedia" },
        { title: "Ice Giants", url: "https://en.wikipedia.org/wiki/Ice_giant", source: "Wikipedia" }
      ]
    },
    {
      id: "pluto",
      title: "Pluto",
      description: "The King of the Kuiper Belt. A complex, icy dwarf planet with a giant heart-shaped glacier.",
      components: [
        { label: "Surface", value: "Nitrogen Ice & Mountains" },
        { label: "Status", value: "Dwarf Planet" },
        { label: "Orbit", value: "Highly Elliptical" },
        { label: "Moons", value: "5 (Charon is the largest)" }
      ],
      imagePath: "/assets/images/pluto.png",
      past: "Discovered in 1930 by Clyde Tombaugh, Pluto was considered the 9th planet of the Solar System for 76 years. It was the absolute edge of the known map. However, in the 1990s and early 2000s, improved telescopes began discovering thousands of other icy bodies in the same orbital region, culminating in the discovery of Eris, an object nearly as massive as Pluto. This forced the International Astronomical Union (IAU) to controversially redefine what a planet is in 2006. Because Pluto has not 'cleared its neighborhood' of other debris, it was reclassified as a 'Dwarf Planet' and recognized as the largest and most famous member of the Kuiper Belt—a massive, donut-shaped ring of icy ancient debris left over from the formation of the solar system.",
      present: "For decades, Pluto was just a blurry pixel in our most powerful telescopes. That changed forever in July 2015 when NASA's New Horizons probe finally flew past Pluto after a 9.5-year journey. The high-resolution images returned by New Horizons shocked the scientific community. Instead of a dead, cratered rock, Pluto was revealed to be a geologically active, breathtakingly beautiful world. It features towering mountains made of solid, rock-hard water ice, and a massive, iconic heart-shaped basin called 'Tombaugh Regio'. The western half of this heart is a sprawling, completely crater-free glacier made of frozen nitrogen that slowly flows and convects, proving that Pluto possesses an internal heat source driving active geology.",
      future: "The New Horizons data is so rich that scientists will be analyzing it for decades. Pluto has fundamentally changed our understanding of small icy worlds. The focus of deep-outer-solar-system astronomy has now shifted. First, astronomers are using the James Webb Space Telescope to analyze the chemical composition of other massive Kuiper Belt Objects (KBOs). Second, a massive hunt is underway for 'Planet Nine'—a hypothetical, undiscovered Neptune-sized planet lurking far beyond Pluto in the Oort Cloud. The gravitational signature of Planet Nine is believed to be responsible for the strange, highly elliptical clustering of distant KBOs. Discovering it would rewrite the textbooks once again.",
      citations: [
        { title: "Pluto: Facts", url: "https://science.nasa.gov/pluto/facts/", source: "NASA Science" },
        { title: "NASA New Horizons", url: "https://en.wikipedia.org/wiki/New_Horizons", source: "Wikipedia" },
        { title: "Planet Nine Hypothesis", url: "https://en.wikipedia.org/wiki/Planet_Nine", source: "Wikipedia" }
      ]
    }
  ]
};
