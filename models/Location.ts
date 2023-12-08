import { GameIndex, Name, PokemonEncounter } from "./Pokemon"

export interface Location {
  id: number
  name: string
  region: any
  names: Name[]
  game_indices: GameIndex[]
  areas: any
}

export interface Area {
  id: number
  name: string
  game_index: GameIndex
  encounter_method_rates: any
  Location: Location
  nams: Name[]
  pokemon_encounters: PokemonEncounter[]
}
