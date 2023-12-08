import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Pokemon } from "../models/Pokemon";
import {
  capitalize,
  format,
  formatFlavorText,
  getPercent,
} from "../utils/text";
import Text from "../atoms/Text";
import Tile from "../atoms/Tile";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

interface AboutTabProps {
  pokemon?: Pokemon;
  pokemonColor: string;
  swipeable?: boolean;
  onSwipe?: (event: any) => void;
}

const AboutTab: React.FC<AboutTabProps> = ({
  pokemon,
  pokemonColor,
  swipeable,
  onSwipe,
}) => {
  const { colors } = useTheme();

  const descriptions = new Set(
    pokemon?.species.flavor_text_entries
      .filter((entry) => entry.language.name === "en")
      .map((entry) => formatFlavorText(entry.flavor_text)),
  );

  return (
    <Swipeable enabled={swipeable} onActivated={onSwipe}>
      <View style={styles.tabContent}>
        <Tile
          label="species"
          value={pokemon?.species?.name}
          icon="shoe-print"
          capitalTitle
          capitalValue
        />
        <Tile
          label="type"
          value={pokemon?.types?.map((type) => type.type.name).join(", ")}
          icon="format-list-bulleted"
          capitalTitle
          capitalValue
        />
        <Tile
          label="height"
          value={format(pokemon?.height?.toString() || "0", "dm", "m")}
          icon="ruler"
          capitalTitle
        />
        <Tile
          label="weight"
          value={format(pokemon?.weight?.toString() || "0", "hg", "kg")}
          icon="weight"
          capitalTitle
        />
        <Tile
          label="abilities"
          value={pokemon?.abilities
            ?.map((ability) => capitalize(ability.ability.name))
            .join(", ")}
          icon="format-list-bulleted"
          capitalTitle
        />
        <Tile
          label="base xp"
          value={pokemon?.base_experience}
          icon="star"
          capitalTitle
        />
        <Tile
          label="default"
          value={pokemon?.is_default ? "yes" : "no"}
          icon="form-select"
          capitalTitle
          capitalValue
        />
        <View>
          <Tile
            label="gender"
            value={pokemon?.gender?.name}
            icon={
              pokemon?.gender ? `gender-${pokemon?.gender.name}` : "genderless"
            }
            iconFamily={pokemon?.gender ? "material" : "normal"}
            hide={!pokemon?.gender}
            capitalTitle
            capitalValue
          />
          <Tile
            label="gender rate"
            value={getPercent(pokemon?.species?.gender_rate! * 100)}
            icon="gender-male-female"
            capitalTitle
            hide={!pokemon?.species.has_gender_differences}
          />
          <Tile
            label="egg group"
            value={pokemon?.species.egg_groups
              .map((eggGroup) => capitalize(eggGroup.name))
              .join(", ")}
            icon="egg"
            capitalTitle
          />
        </View>
        <View style={{ marginTop: 20, flex: 1 }}>
          <Text capital bold title style={{ color: pokemonColor }}>
            Did you know?
          </Text>
          <ScrollView>
            {Array.from(descriptions).map((description, index) => (
              <View
                key={index}
                style={{ flexDirection: "row", marginRight: 10 }}
              >
                <Entypo name="dot-single" size={30} color={colors.text} />
                <Text>{description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Swipeable>
  );
};

export default AboutTab;

const styles = StyleSheet.create({
  tabContent: {
    padding: 10,
    height: Dimensions.get("screen").height,
  },
});
