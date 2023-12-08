import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import Text from "../atoms/Text";
import { Pokemon } from "../models/Pokemon";
import IconButton from "../atoms/IconButton";
import { useNavigation, useTheme } from "@react-navigation/native";
import { usePokemonStyle } from "../hooks/usePokemonStyle";
import { Screens } from "../constants/screens";
import { capitalize } from "../utils/text";
import { useAppContext } from "../AppContext";
import { showErrorAlert, showSuccessAlert } from "../utils/alerts";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const { favorites, toggleFavorite } = useAppContext();

  const [pokemonColor, setPokemonColor] = useState("#000000");

  useEffect(() => {
    const { primaryColor } = usePokemonStyle(pokemon, colors.primary);
    setPokemonColor(primaryColor);
  }, [pokemon]);

  const viewPokemon = (pokemonId: number) => {
    navigate(Screens.POKEMON_DETAILS, {
      pokemonId,
      pokemonName: pokemon.name,
      pokemonFav: pokemon.favourite,
      pokemonColor: pokemonColor,
    });
  };

  const handleFavorite = () => {
    toggleFavorite(pokemon.id);
    const isFavorite = favorites.includes(pokemon.id);
    if (!isFavorite) {
      showSuccessAlert(`${capitalize(pokemon.name)} added to favorites`);
    } else {
      showErrorAlert(`${capitalize(pokemon.name)} removed from favorites`);
    }
  };

  return (
    <Pressable
      style={styles.pokemonCard}
      onPress={() => viewPokemon(pokemon.id)}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text bold>#{pokemon.id}</Text>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          width={100}
          height={100}
        />
      </View>
      <Text>{capitalize(pokemon.name)}</Text>

      <IconButton
        iconName={favorites.includes(pokemon.id) ? "heart" : "heart-o"}
        size={16}
        onPress={handleFavorite}
      />
      <IconButton iconName="angle-right" size={30} />
    </Pressable>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  pokemonCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
