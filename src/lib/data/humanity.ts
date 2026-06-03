import { MuseumExhibit } from "../types";

export const humanityExhibit: MuseumExhibit = {
  id: "humanity",
  title: "Humanity",
  subtitle: "The Universe Experiencing Itself",
  category: "Humanity",
  description: "After 13.8 billion years of cosmic evolution, stardust organized itself into complex biological machines capable of observing the universe. We are the cosmos waking up.",
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
  deepLore: "We are the universe waking up. When an astronomer looks through a telescope, it is the universe looking at itself.",
  subModules: [
    {
      id: "evolution",
      title: "Biological Evolution",
      description: "The 3.5-billion-year unbroken chain of life on Earth, from simple single-celled organisms in the primordial soup to the highly complex, conscious mammals of today.",
      components: [
        { label: "Mechanism", value: "Natural Selection" },
        { label: "Code", value: "DNA / RNA" }
      ],
      imagePath: "/assets/images/earth.png",
      past: "Life survived five massive global extinction events, including the asteroid impact 66 million years ago that wiped out the dinosaurs and allowed mammals to rise.",
      present: "Humans (Homo sapiens) are currently the dominant apex species on Earth, possessing unique high-level intelligence and complex language.",
      future: "With the advent of genetic engineering (CRISPR) and neural interfaces, humanity is on the verge of taking control of its own biological evolution (Transhumanism)."
    },
    {
      id: "technology",
      title: "The Technological Singularity",
      description: "The exponential growth of human technology, from the mastery of fire and stone tools to the creation of artificial superintelligence.",
      components: [
        { label: "Era", value: "The Information Age" },
        { label: "Trend", value: "Moore's Law" }
      ],
      imagePath: "/assets/images/space_colony.png",
      past: "It took hundreds of thousands of years to go from stone tools to the steam engine, but only 66 years to go from the first airplane flight to landing on the Moon.",
      present: "We are living in an era of exponential technological growth, driven by the internet, global connectivity, and the rapid development of Artificial Intelligence.",
      future: "Many futurists predict a 'Technological Singularity' in the 21st century—a point where artificial intelligence surpasses human intelligence, leading to an unpredictable explosion in technological advancement."
    }
  ]
};
