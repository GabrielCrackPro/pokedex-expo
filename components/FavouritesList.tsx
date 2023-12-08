import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Pokemon } from "../models/Pokemon";
import { getPokemon } from "../utils/fetch";
import PokemonCard from "./PokemonCard";
import { useAppContext } from "../AppContext";
import EmptyList from "./EmptyList";
import Loader from "../atoms/Loader";

const FavouritesList: React.FC = () => {
  const { favorites } = useAppContext();
  const [favoritesPokemon, setFavoritesPokemon] = useState<
    (Pokemon | undefined)[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await Promise.all(
        favorites.map(async (pokemonId) => {
          return getPokemon(Number(pokemonId));
        }),
      );
      setFavoritesPokemon(pokemonData);
    };

    fetchData();
  }, [favorites]);

  return (
    <>
      {favorites.length !== 0 && !favoritesPokemon.length && <Loader />}
      <FlatList
        data={favoritesPokemon}
        scrollEnabled={favoritesPokemon.length !== 0}
        ListEmptyComponent={
          <EmptyList
            title="No favorites to show"
            description="Add favorites to see them here"
            icon="heart-outline"
          />
        }
        renderItem={({ item }) => {
          return <PokemonCard pokemon={item!} />;
        }}
      />
    </>
  );
};

export default FavouritesList;
