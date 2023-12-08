import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "../atoms/IconButton";
import Text from "../atoms/Text";
import { capitalize } from "../utils/text";
import { useAppContext } from "../AppContext";
import { showErrorAlert, showSuccessAlert } from "../utils/alerts";

const NavigationHeader: React.FC = () => {
  const { params } = useRoute();
  const { canGoBack, goBack } = useNavigation();
  const { colors } = useTheme();

  const { favorites, toggleFavorite } = useAppContext();

  const handleGoBack = () => {
    if (canGoBack()) goBack();
  };

  const defaultStyles: StyleProp<ViewStyle> = {
    backgroundColor: params.pokemonColor,
  };

  const defaultTextStyles: StyleProp<TextStyle> = {
    color: colors.text,
  };

  const handleFavorite = () => {
    toggleFavorite(params.pokemonId);
    const isFavorite = favorites.includes(params.pokemonId);
    if (!isFavorite) {
      showSuccessAlert(`${capitalize(params.pokemonName)} added to favorites`);
    } else {
      showErrorAlert(
        `${capitalize(params.pokemonName)} removed from favorites`,
      );
    }
  };

  return (
    <View style={[styles.header, defaultStyles]}>
      <IconButton iconName="angle-left" size={24} onPress={handleGoBack} />
      <Text style={[styles.text, defaultTextStyles]}>
        {capitalize(params.pokemonName)}
      </Text>
      <TouchableOpacity onPress={handleFavorite}>
        <MaterialCommunityIcons
          name={
            favorites.includes(params.pokemonId) ? "heart" : "heart-outline"
          }
          color={colors.text}
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 75,
    paddingTop: 40,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
