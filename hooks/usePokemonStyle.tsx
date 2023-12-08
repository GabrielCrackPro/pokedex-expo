import { Pokemon } from "../models/Pokemon";
import { typeColors } from "../constants/colorTypes";

export const usePokemonStyle = (
  pokemon: Pokemon | undefined,
  defaultColor: string,
) => {
  if (
    !pokemon ||
    !pokemon.types ||
    !pokemon.types[0] ||
    !pokemon.types[0].type
  ) {
    return { primaryColor: defaultColor };
  }

  const type = pokemon.types[0].type.name;
  const typeColor = typeColors.find((entry) => entry.type === type);

  if (typeColor) {
    return { primaryColor: typeColor.color };
  } else {
    return { primaryColor: "#000000" };
  }
};
