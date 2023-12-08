import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Switch } from "react-native-switch";
import Text from "../atoms/Text";
import { useTheme } from "@react-navigation/native";
import { capitalize } from "../utils/text";

interface SwitchTileProps {
  label: string;
  icon?: string;
  iconType?: "icon" | "image";
  enabled?: boolean;
  capitalLabel?: boolean;
  style?: StyleProp<ViewStyle>;
  onChange: (value?: any) => void;
}

const SwitchTile: React.FC<SwitchTileProps> = ({
  label,
  icon,
  iconType,
  enabled,
  capitalLabel,
  style,
  onChange,
}) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.switchTile, style]}>
      {icon && iconType === "image" && (
        <Image source={{ uri: icon }} style={styles.icon} />
      )}
      {icon && iconType === "icon" && (
        <Feather name={icon} size={22} color={colors.text} />
      )}
      <Text>{capitalLabel ? capitalize(label) : label}</Text>
      <Switch
        value={enabled}
        onValueChange={onChange}
        circleSize={20}
        barHeight={4}
        circleBorderWidth={1}
        circleBorderInactiveColor={colors.border}
        backgroundActive={colors.primary}
        backgroundInactive={colors.border}
        circleActiveColor={colors.primary}
        circleInActiveColor={colors.border}
        renderActiveText={false}
        renderInActiveText={false}
        changeValueImmediately={false}
      />
    </View>
  );
};

export default SwitchTile;

const styles = StyleSheet.create({
  switchTile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
