import { MuseumExhibit } from "../types";

export const humanityExhibit: MuseumExhibit = {
  id: "humanity",
  title: "Humanity",
  subtitle: "The Conscious Observers",
  category: "Humanity",
  description: "The story of how a species of primate on an unremarkable rocky planet evolved the intelligence to look up at the stars, understand the universe, and leave their home world.",
  simpleExplanation: "We are the universe's way of thinking about itself. We started out making stone tools, and now we are building rockets to travel to other planets.",
  metrics: [
    { label: "POPULATION", value: "8+ Billion" },
    { label: "TECH LEVEL", value: "Type 0 (Kardashev)" }
  ],
  imagePath: "/assets/images/human_exploration.png",
  timeline: [
    { year: "2.5 Million Yrs Ago", event: "Homo genus emerges in Africa." },
    { year: "300,000 Yrs Ago", event: "Homo sapiens evolve." },
    { year: "12,000 Yrs Ago", event: "The Agricultural Revolution begins." },
    { year: "1969 CE", event: "Humans walk on the Moon." }
  ],
  physics: [
    { concept: "Consciousness", detail: "The emergent property of complex neural networks processing information, still one of the greatest mysteries in science." },
    { concept: "Information Theory", detail: "The mathematical quantification of data, which underpins the digital age and artificial intelligence." }
  ],
  deepLore: "For 13.8 billion years, the universe expanded in silence. Then, on a pale blue dot, a complex arrangement of carbon atoms gained the ability to ask 'Why?'. Humanity is the universe experiencing itself. We are a deeply flawed, violent, yet incredibly cooperative and brilliant species. In the blink of a cosmic eye, we went from hunting on the savannah to splitting the atom and manipulating the genetic code of life itself. We are currently at a critical bottleneck: we possess the technology to either destroy ourselves or ascend to the stars.",
  subModules: [
    {
      id: "biology",
      title: "Biological Evolution",
      description: "The 3.5 billion year journey from single-celled organisms to conscious, intelligent primates.",
      components: [
        { label: "Species", value: "Homo sapiens" },
        { label: "Origin", value: "Africa" },
        { label: "DNA Match", value: "98.8% Chimpanzee" },
        { label: "Brain Size", value: "1,300 - 1,400 cc" }
      ],
      imagePath: "/assets/images/earth.png",
      past: "Life on Earth has survived five major global mass extinction events, the most famous of which occurred 66 million years ago when a massive asteroid struck the Yucatan Peninsula. This cataclysm wiped out the non-avian dinosaurs, permanently altering the global ecosystem. However, it created a massive ecological void that allowed small, surviving mammals to emerge from the shadows and rapidly diversify. Over tens of millions of years, early primates evolved in the forests of Africa. Changes in the climate forced these primates out of the shrinking forests and onto the open savannah. This environmental pressure selected for bipedalism—walking upright on two legs—which freed the hands for tool use and carrying food. Around 2.5 million years ago, the genus Homo emerged, characterized by significantly larger brain volumes and the ability to manufacture complex stone tools.",
      present: "Today, Homo sapiens are the dominant apex species on the planet, possessing unique high-level intelligence, complex symbolic language, and the ability to engage in mass, flexible cooperation. Biologically, we are incredibly similar to our closest living relatives, chimpanzees and bonobos, sharing over 98% of our DNA. Our massive brains consume roughly 20% of our body's energy despite accounting for only 2% of our body weight. This neurological complexity allows us to form intricate social structures, pass down knowledge across generations (culture), and manipulate our environment to a degree unseen by any other species in Earth's history. However, our rapid population growth and technological power have triggered the Anthropocene—a new geological epoch defined by humanity's profound, often destructive, impact on the Earth's ecosystems and climate.",
      future: "Humanity is currently on the verge of taking direct control over its own biological evolution, a concept often referred to as Transhumanism. With the advent of advanced genetic engineering technologies like CRISPR-Cas9, scientists are gaining the ability to edit the human genome precisely, potentially eliminating hereditary diseases and extending the human lifespan significantly. Concurrently, the rapid development of Brain-Computer Interfaces (BCIs), such as Neuralink, promises to seamlessly merge the human biological brain with digital artificial intelligence. In the distant future, if humanity becomes a multi-planetary species, the different gravitational and radiation environments of Mars or the Moon will likely induce divergent evolutionary paths, potentially leading to speciation.",
      citations: [
        { title: "Human Evolution", url: "https://humanorigins.si.edu/", source: "Smithsonian" },
        { title: "Evolution of Life on Earth", url: "https://en.wikipedia.org/wiki/Evolutionary_history_of_life", source: "Wikipedia" },
        { title: "Transhumanism", url: "https://en.wikipedia.org/wiki/Transhumanism", source: "Wikipedia" }
      ]
    },
    {
      id: "technology",
      title: "Technological Singularity",
      description: "The exponential growth of human technology, culminating in the creation of Artificial Superintelligence.",
      components: [
        { label: "Current Era", value: "Information Age" },
        { label: "Computing", value: "Exascale / Quantum" },
        { label: "Energy", value: "Fossil / Renewables" },
        { label: "Trajectory", value: "Exponential Growth" }
      ],
      imagePath: "/assets/images/space_colony.png",
      past: "For hundreds of thousands of years, human technological progress was incredibly slow, limited to the refinement of stone tools and the mastery of fire. The Agricultural Revolution around 12,000 years ago allowed for the creation of permanent settlements and the accumulation of knowledge. However, the true explosion of progress began with the Industrial Revolution in the 18th and 19th centuries, driven by the harnessing of fossil fuels and the invention of the steam engine. This set the stage for the 20th century, arguably the most transformative period in human history. It took humanity hundreds of thousands of years to go from stone tools to the first airplane flight in 1903. Yet, it took only 66 years to go from that first flight to landing astronauts on the Moon in 1969. This acceleration laid the foundation for the Information Age, defined by the invention of the transistor and the internet.",
      present: "We are currently living in an era of exponential technological growth, primarily driven by Moore's Law and the rapid development of Artificial Intelligence. Global society is entirely dependent on complex, interconnected digital networks and satellite infrastructure. We are witnessing the birth of advanced AI models that can understand natural language, generate photorealistic images, and write complex code, fundamentally altering the nature of work and creativity. Concurrently, advancements in renewable energy, battery storage, and the pursuit of nuclear fusion are attempting to transition our civilization away from fossil fuels before catastrophic climate change becomes irreversible. We are a 'Type 0' civilization on the Kardashev scale, meaning we still harness energy from dead plants (coal/oil) rather than directly harnessing the full energy output of our star.",
      future: "Many prominent futurists and computer scientists predict that humanity is rapidly approaching a 'Technological Singularity' sometime in the 21st century. The Singularity is a hypothetical point in time when artificial intelligence surpasses human intelligence, leading to an unpredictable, runaway explosion in technological advancement. If a superintelligent AI can iteratively improve its own design faster than humans can comprehend, the resulting intelligence explosion could solve humanity's greatest challenges—such as aging, disease, and interstellar travel—or it could pose an existential threat if the AI's goals are misaligned with human survival. Regardless of the outcome, the creation of Artificial General Intelligence (AGI) will likely be the last invention humanity ever needs to make.",
      citations: [
        { title: "Technological Singularity", url: "https://en.wikipedia.org/wiki/Technological_singularity", source: "Wikipedia" },
        { title: "Moore's Law", url: "https://en.wikipedia.org/wiki/Moore%27s_law", source: "Wikipedia" },
        { title: "Kardashev Scale", url: "https://en.wikipedia.org/wiki/Kardashev_scale", source: "Wikipedia" }
      ]
    }
  ]
};
