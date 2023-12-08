export interface PokemonResponse {
  name: string;
  url: string;
}

export interface PokemonResponseWithoutName {
  url: string;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: PokemonResponse[];
  game_indices: GameIndex[];
  gender: Gender;
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Spieces;
  sprites: PokemonResponse;
  stats: Stat[];
  types: Type[];
  weight: number;
  favourite?: boolean;
}

export interface PokemonEncounter {
  pokemon: Pokemon
  version_details: VersionDetail[]
}

export interface EncounterDetail {
  min_level: number;
  max_level: number;
  condition_values: PokemonResponse;
  chance: number;
  method: PokemonResponse;
}

export interface LocationVersionDetails {
  max_chance: number;
  encounter_details: EncounterDetail[];
}

export interface LocationAreaEncounter {
  location_area: PokemonResponse;
  version_details: LocationVersionDetails;
}

export interface PokemonSpeciesDetail {
  pokemon_species: PokemonResponse;
  rate: number;
}

export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesDetail[];
  required_for_evolution: PokemonResponse[];
}

export interface Ability {
  ability: PokemonResponse;
  is_hidden: boolean;
  slot: number;
}

export interface Spieces {
  base_happiness: number;
  capture_rate: number;
  color: PokemonResponse;
  egg_groups: PokemonResponse[];
  evolution_chain: PokemonResponseWithoutName;
  evolves_from_species: PokemonResponse;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: PokemonResponse;
  growth_rate: PokemonResponse;
  habitat: PokemonResponse;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: PokemonResponse;
  varieties: Variety[];
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: PokemonResponse;
}

export interface Variety {
  is_default: boolean;
  pokemon: PokemonResponse;
}

export interface PalParkEncounter {
  area: PokemonResponse;
  base_score: number;
  rate: number;
}

export interface Name {
  language: PokemonResponse;
  name: string;
}

export interface Genus {
  genus: string;
  language: PokemonResponse;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: PokemonResponse;
  version: PokemonResponse;
}

export interface GameIndex {
  game_index: number;
  version: Spieces;
}

export interface HeldItem {
  item: Spieces;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Spieces;
}

export interface Move {
  move: PokemonResponse;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokemonResponse;
  version_group: PokemonResponse;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: PokemonResponse;
}

export interface Type {
  slot: number;
  type: PokemonResponse;
}
