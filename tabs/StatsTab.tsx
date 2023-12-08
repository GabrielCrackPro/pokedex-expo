import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Pokemon } from "../models/Pokemon";
import { Swipeable } from "react-native-gesture-handler";
import SliderTile from "../components/SliderTile";

interface TabProps {
  pokemon?: Pokemon;
  pokemonColor: string;
  swipeable?: boolean;
  onSwipe?: (event: any) => void;
}

const StatsTab: React.FC<TabProps> = ({
  pokemon,
  pokemonColor,
  swipeable,
  onSwipe,
}) => {
  const speciesStats = Object.entries(pokemon?.species)
    .filter(
      ([key, value]) =>
        typeof value === "number" &&
        key !== "id" &&
        key !== "order" &&
        key !== "gender_rate",
    )
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  return (
    <Swipeable enabled={swipeable} onActivated={onSwipe}>
      <ScrollView style={styles.tabContent}>
        {pokemon?.stats.map((stat, index) => (
          <SliderTile
            key={index}
            color={pokemonColor}
            leadingText={stat.stat.name.replaceAll("-", " ")}
            trailingText={stat.base_stat}
            value={stat.base_stat}
          />
        ))}
        {Object.entries(speciesStats).map(([key, value], index) => (
          <SliderTile
            key={index}
            color={pokemonColor}
            value={value as number}
            leadingText={key.replaceAll("_", " ")}
            trailingText={value as string}
          />
        ))}
      </ScrollView>
    </Swipeable>
  );
};

export default StatsTab;

const styles = StyleSheet.create({
  tabContent: {
    height: Dimensions.get("screen").height,
  },
});
