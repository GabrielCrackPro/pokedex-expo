import { createContext, useContext } from "react";
import { HomeCard } from "./constants/homeCards";

interface AppContextType {
  isDark: boolean;
  favorites: string[];
  showFavorites: boolean;
  sortPokemonBy?: "default" | "type" | "name";
  filterByName?: string
  homeCards: HomeCard[];
  listLimit: number
  toggleVisible: (homeCard: HomeCard) => void;
  toggleFavorite: (pokemonId: string) => void;
  toggleShowFavorites: () => void;
  toggleDark: () => void;
  setSortPokemonBy: (value: any) => void;
  setFilterByName: (value: any) => void;
  updateListLimit: (limit: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContext;
