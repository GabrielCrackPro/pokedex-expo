import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { LocationAreaEncounter, Pokemon } from "../models/Pokemon";
import { Swipeable } from "react-native-gesture-handler";
import { getProperty } from "../utils/fetch";
import { Endpoints } from "../constants/endpoints";
import { getIdFromUrl } from "../utils/text";
import NavigationTile from "../components/NavigationTile";
import { Screens } from "../constants/screens";
import Loader from "../atoms/Loader";

interface TabProps {
  pokemon?: Pokemon;
  pokemonColor: string;
  swipeable?: boolean;
  onSwipe?: (event: any) => void;
}

const LocationsTab: React.FC<TabProps> = ({
  pokemon,
  pokemonColor,
  swipeable,
  onSwipe,
}) => {
  const [pokemonLocations, setPokemonLocations] = useState<
    LocationAreaEncounter[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const locations = await getProperty(
        pokemon?.location_area_encounters as Endpoints,
      );
      setPokemonLocations(locations);
    };
    fetchData();
  }, []);

  return (
    <>
      {!pokemonLocations.length && <Loader />}
      <Swipeable enabled={swipeable} onActivated={onSwipe}>
        <View style={styles.tabContent}>
          {pokemonLocations.map(
            (locationArea: LocationAreaEncounter, index) => {
              const locationId = getIdFromUrl(locationArea.location_area.url);
              return (
                <NavigationTile
                  key={index}
                  replaceSymbol="-"
                  label={locationArea.location_area.name}
                  route={Screens.POKEMON_LOCATIONS}
                  params={{ locationId }}
                />
              );
            },
          )}
        </View>
      </Swipeable>
    </>
  );
};

export default LocationsTab;

const styles = StyleSheet.create({
  tabContent: {
    padding: 10,
    height: Dimensions.get("screen").height,
  },
  collapsibleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width + 250,
  },
});
