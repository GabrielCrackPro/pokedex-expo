import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../atoms/Text";
import { useTheme } from "@react-navigation/native";

interface EmptyListProps {
  title?: string;
  description?: string;
  icon?: string;
  iconSize?: number;
  fullScreen?: boolean;
}

const EmptyList: React.FC<EmptyListProps> = ({
  title,
  description,
  icon,
  iconSize,
  fullScreen = true,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.emptyList,
        { height: fullScreen ? Dimensions.get("screen").height : 50, transform: fullScreen ? [{translateY: -50}]: [{translateY: 0}]  },
      ]}
    >
      <MaterialCommunityIcons
        name={icon || "format-list-bulleted"}
        size={iconSize || 100}
        color={colors.text}
      />
      <Text>{title || "This list is empty"}</Text>
      {description && <Text>{description}</Text>}
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  emptyList: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -140 }],
  },
});
