import {
  Berries,
  Evolutions,
  Items,
  Locations,
  Moves,
  Pokeball,
} from "./icons/Custom";
import { Screens } from "./screens";

export interface HomeCard {
  name: string;
  icon: string;
  screen: Screens;
  visible: boolean;
}

export const defaultHomeCards: HomeCard[] = [
  {
    name: "pokemons",
    visible: true,
    icon: Pokeball,
    screen: Screens.POKEMON_LIST,
  },
  {
    name: "moves",
    visible: true,
    icon: Moves,
    screen: Screens.POKEMON_MOVES,
  },
  {
    name: "locations",
    visible: true,
    icon: Locations,
    screen: Screens.POKEMON_LOCATIONS,
  },
  {
    name: "evolutions",
    visible: true,
    icon: Evolutions,
    screen: Screens.POKEMON_LOCATIONS,
  },
  {
    name: "items",
    visible: true,
    icon: Items,
    screen: Screens.POKEMON_LOCATIONS,
  },
  {
    name: "berries",
    visible: true,
    icon: Berries,
    screen: Screens.POKEMON_LOCATIONS,
  },
];
