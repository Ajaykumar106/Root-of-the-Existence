export interface SubModule {
  id: string;
  title: string;
  description: string;
  components: { label: string; value: string }[];
  imagePath: string;
  past: string;
  present: string;
  future: string;
}

export interface MuseumExhibit {
  id: string;
  title: string;
  subtitle: string;
  category: "Origin" | "Structure" | "Humanity" | "Future";
  description: string;
  simpleExplanation: string;
  metrics: { label: string; value: string }[];
  imagePath: string;
  timeline: { year: string; event: string }[];
  physics: { concept: string; detail: string }[];
  deepLore: string;
  subModules?: SubModule[];
}
