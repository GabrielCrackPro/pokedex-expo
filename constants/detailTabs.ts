import { TabType } from "../models/Tab";

export const tabs: TabType[] = [
  {
    name: "about",
    title: "About",
    showPredicate: false,
  },
  {
    name: "stats",
    title: "Stats",
    showPredicate: true,
  },
  {
    name: "moves",
    title: "Moves",
    showPredicate: true,
  },
  {
    name: "evolutions",
    title: "Evolutions",
  },
  {
    name: "locations",
    title: "Locations",
    showPredicate: true,
  },
];

export enum TabsNames {
  ABOUT = "about",
  STATS = "stats",
  MOVES = "moves",
  EVOLUTIONS = "evolutions",
  LOCATIONS = "locations",
}
