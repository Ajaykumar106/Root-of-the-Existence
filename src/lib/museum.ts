import { MuseumExhibit } from "./types";
import { originsExhibit, nebulasExhibit } from "./data/origins";
import { solarSystemExhibit } from "./data/solarSystem";
import { humanityExhibit } from "./data/humanity";
import { agenciesExhibit } from "./data/agencies";

export const MUSEUM_DATA: MuseumExhibit[] = [
  originsExhibit,
  nebulasExhibit,
  solarSystemExhibit,
  humanityExhibit,
  agenciesExhibit
];

export type { MuseumExhibit, SubModule } from "./types";
