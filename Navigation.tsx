import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./navigators/HomeNavigator";
import PokemonDetails from "./screens/PokemonDetails";
import NavigationHeader from "./components/NavigationHeader";
import Locations from "./screens/Locations";

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-navigator"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="details"
        component={PokemonDetails}
        options={{
          header: () => <NavigationHeader />,
        }}
      />
      <Stack.Screen
        name="locations"
        component={Locations}
        options={{
          title: "Locations"
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
