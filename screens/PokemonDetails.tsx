import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { useRoute, useTheme } from "@react-navigation/native";
import { Pokemon } from "../models/Pokemon";
import { getPokemon, getPokemonProperty } from "../utils/fetch";
import { CarouselConfig } from "../models/CarouselConfig";
import { TabsNames, tabs } from "../constants/detailTabs";
import { usePokemonStyle } from "../hooks/usePokemonStyle";
import { Endpoints } from "../constants/endpoints";
import {
  EvolutionsTab,
  LocationsTab,
  StatsTab,
  AboutTab,
  MovesTab,
} from "../tabs";
import { TabType } from "../models/Tab";
import { Carousel, Loader } from "../atoms";
import { Tab } from "../components";

const PokemonDetails: React.FC = () => {
  const { params } = useRoute();
  const { colors } = useTheme();

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [pokemonColor, setPokemonColor] = useState("#000000");
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  useEffect(() => {
    const fetchData = async () => {
      const mainData = await getPokemon(params.pokemonId);
      const species = await getPokemonProperty(
        params.pokemonId,
        Endpoints.POKEMON_SPECIES,
      );
      const gender = await getPokemonProperty(
        params.pokemonId,
        Endpoints.GENDERS,
      );

      mainData.species = species;
      mainData.gender = gender;

      setPokemon(mainData);
      setLoading(false);
    };

    fetchData();
  }, [params.pokemonId]);

  useEffect(() => {
    const { primaryColor } = usePokemonStyle(pokemon, colors.primary);
    setPokemonColor(primaryColor);
  }, [pokemon]);

  const images = renderImages(pokemon, pokemonColor);

  const carouselConfig: CarouselConfig = {
    loop: true,
    initialSlide: 2,
    showIndicators: true,
  };

  const handleSwipe = (event: any) => {
    const { nativeEvent } = event;
    const currentTabIndex = tabs.findIndex((tab) => tab.name === activeTab);

    if (nativeEvent.velocityX < 0 && currentTabIndex < tabs.length - 1) {
      setActiveTab(tabs[currentTabIndex + 1].name);
    } else if (nativeEvent.velocityX > 0 && currentTabIndex > 0) {
      setActiveTab(tabs[currentTabIndex - 1].name);
    }
  };

  const getPredicate = (tab: TabType): string => {
    switch (tab.name) {
      case "stats":
        return `(${pokemon?.stats.length! + 4})`;
      case "moves":
        return `(${pokemon?.moves.length})`;
      default:
        return "";
    }
  };

  return (
    <>
      <View>
        {!pokemon && loading && <Loader />}
        {pokemon && (
          <ScrollView>
            <Carousel items={images} config={carouselConfig} />
            <ScrollView horizontal>
              <View style={styles.tab}>
                {tabs.map((tab) => {
                  return (
                    <Tab
                      tab={tab}
                      key={tab.name}
                      onTabPress={() => setActiveTab(tab.name)}
                      isActive={tab.name === activeTab}
                      activeColor={pokemonColor}
                      showPredicate={tab.showPredicate}
                      predicate={getPredicate(tab)}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </ScrollView>
        )}
        {activeTab === TabsNames.ABOUT && (
          <AboutTab
            pokemon={pokemon}
            pokemonColor={pokemonColor}
            swipeable
            onSwipe={(event: any) => handleSwipe(event)}
          />
        )}
        {activeTab === TabsNames.STATS && (
          <StatsTab
            pokemon={pokemon}
            pokemonColor={pokemonColor}
            swipeable
            onSwipe={(event: any) => handleSwipe(event)}
          />
        )}
        {activeTab === TabsNames.MOVES && (
          <MovesTab
            pokemon={pokemon}
            pokemonColor={pokemonColor}
            swipeable
            onSwipe={(event: any) => handleSwipe(event)}
          />
        )}
        {activeTab === TabsNames.LOCATIONS && (
          <LocationsTab
            pokemon={pokemon}
            pokemonColor={pokemonColor}
            swipeable
            onSwipe={(event: any) => handleSwipe(event)}
          />
        )}
        {activeTab === TabsNames.EVOLUTIONS && (
          <EvolutionsTab
            pokemon={pokemon}
            pokemonColor={pokemonColor}
            swipeable
            onSwipe={(event: any) => handleSwipe(event)}
          />
        )}
      </View>
    </>
  );
};

const renderImages = (pokemon: Pokemon | undefined, pokemonColor: string) => {
  if (!pokemon) return [];
  return Object.values(pokemon?.sprites || {})
    .filter((url) => url !== null && typeof url === "string")
    .map((url, index) => {
      if (url) {
        return (
          <Image
            source={{ uri: url }}
            key={index}
            style={[styles.image, { backgroundColor: pokemonColor }]}
            resizeMode="contain"
          />
        );
      }
      return null;
    });
};

export default PokemonDetails;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("screen").width,
    height: 200,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width + 50,
  },
  loader: {
    width: 100,
    height: 100,
  },
});
