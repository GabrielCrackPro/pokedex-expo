import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Text from "./Text";
import { useTheme } from "@react-navigation/native";

interface TileProps {
  label: string;
  value?: string | string[] | number | number[];
  hide?: boolean;
  capitalTitle?: boolean;
  capitalValue?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  iconFamily?: "normal" | "material";
  iconSize?: number;
}

const Tile: React.FC<TileProps> = ({
  label,
  value,
  icon,
  iconPosition,
  iconFamily = "material",
  iconSize,
  hide,
  capitalTitle,
  capitalValue,
}) => {
  const { colors } = useTheme();
  return (
    <View style={hide ? styles.hide : styles.tile}>
      <View
        style={{
          flexDirection: iconPosition === "right" ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        {icon && iconFamily === "material" ? (
          <MaterialCommunityIcons
            name={icon}
            color={colors.text}
            size={(icon && iconSize) || 18}
            style={{ marginRight: 5 }}
          />
        ) : (
          <FontAwesome5
            name={icon}
            color={colors.text}
            size={(icon && iconSize) || 18}
            style={{ marginRight: 5 }}
          />
        )}
        <Text capital={capitalTitle}>{label}</Text>
      </View>
      {Array.isArray(value) ? (
        <View style={{ flexDirection: "column" }}>
          {value.map((v) => (
            <Text capital={capitalValue} key={v}>
              {v || "N/A"}
            </Text>
          ))}
        </View>
      ) : (
        <Text capital={capitalValue}>{value || "N/A"}</Text>
      )}
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  tile: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hide: {
    display: "none",
  },
});
