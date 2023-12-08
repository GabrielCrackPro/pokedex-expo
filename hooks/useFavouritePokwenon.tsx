import { useEffect, useState } from "react";
import { getValue, setValue } from "../utils/storage";

export const useFavoritePokemon = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (pokemonId: string) => {
    const isFavorite = favorites.includes(pokemonId);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== pokemonId);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, pokemonId];
      setFavorites(updatedFavorites);
    }
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await getValue("favorites");
        setFavorites(JSON.parse(storedFavorites!) || []);
      } catch (error) {
        console.log("Error loading favorites", error);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    setValue("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, toggleFavorite, showFavorites, toggleShowFavorites };
};
