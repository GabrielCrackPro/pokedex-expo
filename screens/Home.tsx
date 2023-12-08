import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, FavouritesList, Grid } from "../components";
import { Text } from "../atoms";
import { useAppContext } from "../AppContext";
import { useTheme } from "@react-navigation/native";
import { capitalize } from "../utils/text";

const Home: React.FC = () => {
  const { colors } = useTheme();
  const { favorites, homeCards } = useAppContext();

  return (
    <View>
      <Grid>
        {homeCards.map((card, index) => (
          <Card
            key={index}
            screen={card.screen}
            title={capitalize(card.name)}
            icon={card.icon}
            showIcon={true}
            hide={!card.visible}
          />
        ))}
      </Grid>
      {favorites.length > 0 && (
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              padding: 5,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="heart"
              size={16}
              color={colors.text}
            />
            <Text>Favourites</Text>
          </View>
          <FavouritesList />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
