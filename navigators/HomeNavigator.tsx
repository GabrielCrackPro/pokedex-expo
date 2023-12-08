import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import MainHeader from "../components/MainHeader";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Pokemons from "../screens/Pokemons";
import { Screens } from "../constants/screens";

const HomeNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        header: () => <MainHeader />,
      }}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={Screens.POKEMON_LIST}
        component={Pokemons}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="pokeball"
                color={color}
                size={size}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={Screens.SETTINGS}
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <EvilIcons name="gear" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
