import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Pokemon } from "../models/Pokemon";
import { Swipeable } from "react-native-gesture-handler";
import NavigationTile from "../components/NavigationTile";
import { Screens } from "../constants/screens";
import { getIdFromUrl } from "../utils/text";
import Loader from "../atoms/Loader";

interface TabProps {
  pokemon?: Pokemon;
  pokemonColor: string;
  swipeable?: boolean;
  onSwipe?: (event: any) => void;
}

const MovesTab: React.FC<TabProps> = ({
  pokemon,
  pokemonColor,
  swipeable,
  onSwipe,
}) => {
  return (
    <>
      {!pokemon?.moves.length && <Loader />}
      <Swipeable enabled={swipeable} onActivated={onSwipe}>
        <View style={styles.tabContent}>
          <ScrollView>
            {pokemon?.moves.map((move, index) => {
              const moveId = getIdFromUrl(move.move.url);
              return (
                <NavigationTile
                  key={index}
                  label={move.move.name.replaceAll("-", " ")}
                  replaceSymbol="-"
                  route={Screens.POKEMON_LOCATIONS}
                  params={{ moveId }}
                />
              );
            })}
          </ScrollView>
        </View>
      </Swipeable>
    </>
  );
};

export default MovesTab;

const styles = StyleSheet.create({
  tabContent: {
    padding: 10,
    height: Dimensions.get("screen").height,
  },
});
