import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { Pokemon } from "../models/Pokemon";
import PokemonCard from "./PokemonCard";
import { getDataList } from "../utils/fetch";
import LoadList from "./LoadList";
import { shuffleArray } from "../utils/text";
import EmptyList from "./EmptyList";
import Loader from "../atoms/Loader";
import { useAppContext } from "../AppContext";
import { Endpoints } from "../constants/endpoints";
import ScrollList from "./ScrollList";
import useScroll from "../hooks/useScroll";

interface PokemonListProps {
  limit?: number;
  shuffle?: boolean;
}

const PokemonList: React.FC<PokemonListProps> = ({ limit, shuffle }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | undefined>([]);
  const [listLimit, setListLimit] = useState(limit);

  const listRef = useRef<FlatList>(null);

  const { sortPokemonBy, filterByName } = useAppContext();

  const { scrollToTop, scrollToBottom, handleScroll, isScrolledToTop } =
    useScroll(listRef);

  const filterPokemons = (pokemons: Pokemon[]): Pokemon[] | undefined => {
    if (sortPokemonBy) {
      switch (sortPokemonBy) {
        case "name":
          return pokemons.slice().sort((a, b) => a.name.localeCompare(b.name));
        case "type":
          return pokemons.slice().sort((a, b) => {
            const typeA = a.types[0].type.name;
            const typeB = b.types[0].type.name;
            return typeA.localeCompare(typeB);
          });
        default:
          return pokemons;
      }
    }
    if (filterByName) {
      const filteredByName = pokemons.filter((p) =>
        p.name.includes(filterByName.toLowerCase()),
      );
      console.log(filteredByName);
      
      return filteredByName;
    } else {
      return pokemons;
    }
  };

  useEffect(() => {
    getDataList(Endpoints.POKEMONS, listLimit as number).then((data) => {
      const result = shuffle ? shuffleArray(data!) : data;
      setPokemonList(filterPokemons(result!));
    });
  }, [listLimit, limit, shuffle, sortPokemonBy, filterByName]);

  const loadMore = (quantity: number) => {
    setListLimit((listLimit || 10) + quantity);
    scrollToBottom();
  };

  return (
    <>
      {!pokemonList?.length && <Loader />}
      <FlatList
        ref={listRef}
        data={pokemonList}
        scrollEnabled={pokemonList?.length !== 0}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListEmptyComponent={
          <EmptyList
            title="No pokemons to show"
            description="Plase try again later"
            icon="pokeball"
          />
        }
        onScroll={handleScroll}
      />
      <LoadList onPress={() => loadMore(5)} />
      <ScrollList
        mode={isScrolledToTop ? "top" : "bottom"}
        onPress={isScrolledToTop ? scrollToBottom : scrollToTop}
      />
    </>
  );
};

export default PokemonList;
