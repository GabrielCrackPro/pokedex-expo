import { useRoute, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import Text from "../atoms/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Screens } from "../constants/screens";
import { useAppContext } from "../AppContext";
import { Pokedex } from "../constants/icons/Custom";
import Filter from "./Filter";

const MainHeader: React.FC = () => {
  const { colors } = useTheme();
  const { name } = useRoute();
  const { showFavorites, sortPokemonBy, toggleShowFavorites } = useAppContext();

  const [showFilter, setShowFilter] = useState(false);

  const defaultHeaderStyles: StyleProp<ViewStyle> = {
    backgroundColor: colors.card,
  };

  const defaultTitleStyles: StyleProp<TextStyle> = {
    color: colors.text,
  };

  const getName = (routeName: string): string => {
    switch (routeName) {
      case Screens.HOME:
        return "Pokedex";
      case Screens.POKEMON_LIST:
        return showFavorites ? "Favorite pokemons" : "All pokemons";
      case Screens.SETTINGS:
        return "Settings";
      default:
        return routeName;
    }
  };

  const getSortIcon = (): string => {
    if (showFilter) {
      switch (sortPokemonBy) {
        case "name":
          return "sort-alphabetical-descending-variant";
        case "type":
          return "sort-bool-descending-variant";
        case "default":
          return "sort-variant-remove";
        default:
          return "sort-variant-remove";
      }
    } else {
      return "sort-variant";
    }
  };

  return (
    <>
      <View style={[styles.mainHeader, defaultHeaderStyles]}>
        <View style={styles.container}>
          <Image source={Pokedex} style={styles.logo} />
          <Text style={[styles.title, defaultTitleStyles]}>
            {getName(name)}
          </Text>
        </View>
        <View style={styles.container}>
          {name === Screens.POKEMON_LIST && (
            <>
              <TouchableOpacity activeOpacity={1} onPress={toggleShowFavorites}>
                <MaterialCommunityIcons
                  name={showFavorites ? "heart" : "heart-outline"}
                  color={showFavorites ? colors.primary : colors.text}
                  size={22}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setShowFilter((prev) => !prev)}
              >
                <MaterialCommunityIcons
                  name={getSortIcon()}
                  color={colors.text}
                  size={22}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <Filter opened={showFilter} />
    </>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  mainHeader: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 60,
    width: 60,
    transform: [{ scale: 0.7 }],
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  sort: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
