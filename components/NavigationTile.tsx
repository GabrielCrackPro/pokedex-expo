import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../atoms/Text";
import IconButton from "../atoms/IconButton";
import { useNavigation } from "@react-navigation/native";
import { capitalize } from "../utils/text";
import { Screens } from "../constants/screens";

interface NavigationTileProps {
  route?: Screens;
  label: string;
  params?: object;
  capitalLabel?: boolean;
  replaceSymbol: "-" | "_";
}

const NavigationTile: React.FC<NavigationTileProps> = ({
  route,
  label,
  params,
  capitalLabel,
  replaceSymbol,
}) => {
  const { navigate } = useNavigation();

  const navigateTo = (routeName: Screens, params?: object) =>
    navigate(routeName, params);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={route ? () => navigateTo(route, params) : undefined}
      style={styles.navigationTile}
    >
      <Text>
        {capitalLabel
          ? capitalize(label.replaceAll(replaceSymbol, " "))
          : label.replaceAll(replaceSymbol, " ")}
      </Text>
      <IconButton iconName="angle-right" size={25} />
    </TouchableOpacity>
  );
};

export default NavigationTile;

const styles = StyleSheet.create({
  navigationTile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
