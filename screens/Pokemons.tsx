import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppContext } from "../AppContext";
import { FavouritesList, PokemonList } from "../components";

const Pokemons: React.FC = () => {
  const { showFavorites, listLimit } = useAppContext();

  return (
    <View style={styles.pokemons}>
      {showFavorites ? <FavouritesList /> : <PokemonList limit={listLimit} />}
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  pokemons: {
    flex: 1,
  },
});
