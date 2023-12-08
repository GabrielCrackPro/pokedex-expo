import React from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { Pokemon } from "../models/Pokemon";
import { Swipeable } from "react-native-gesture-handler";
import Text from "../atoms/Text";
import PokemonCard from "../components/PokemonCard";
import EmptyList from "../components/EmptyList";
import useEvolutions from "../hooks/useEvolutions";

interface TabProps {
  pokemon?: Pokemon;
  pokemonColor: string;
  swipeable?: boolean;
  onSwipe?: (event: any) => void;
}

const EvolutionsTab: React.FC<TabProps> = ({
  pokemon,
  pokemonColor,
  swipeable,
  onSwipe,
}) => {
  const { evolvesFrom, evolvesTo } = useEvolutions(pokemon?.id as number);

  const filteredEvolvesTo = evolvesTo.filter(
    (evolution) => evolution.id !== pokemon?.id,
  );

  const filteredEvolvesFrom = evolvesFrom.filter(
    (evolution) => evolution.id !== pokemon?.id,
  );

  return (
    <Swipeable enabled={swipeable} onActivated={onSwipe}>
      <View style={styles.tabContent}>
        <View>
          <Text bold style={{ color: pokemonColor }}>
            Evolves to
          </Text>
          <FlatList
            data={filteredEvolvesTo}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={
              <EmptyList
                title="No evolutions available"
                icon="lightning-bolt"
                iconSize={30}
                fullScreen={false}
              />
            }
          />
        </View>
        <View>
          <Text bold style={{ color: pokemonColor }}>
            Evolves from
          </Text>
          <FlatList
            data={filteredEvolvesFrom}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={
              <EmptyList
                title="No evolutions available"
                icon="lightning-bolt"
                iconSize={30}
                fullScreen={false}
              />
            }
          />
        </View>
      </View>
    </Swipeable>
  );
};

export default EvolutionsTab;

const styles = StyleSheet.create({
  tabContent: {
    padding: 10,
    height: Dimensions.get("screen").height,
  },
});
