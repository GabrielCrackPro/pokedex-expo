import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../atoms/Text";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Screens } from "../constants/screens";

interface CardProps {
  icon: string;
  title: string;
  screen: Screens;
  iconPosition?: "left" | "right";
  hide?: boolean;
  setting?: boolean;
  showIcon?: boolean;
  onPressSetting?: () => void;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  screen,
  iconPosition,
  hide,
  setting,
  showIcon,
  onPressSetting,
}) => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const handleNavigate = () => navigate(screen);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={setting ? onPressSetting : handleNavigate}
      style={
        !hide
          ? [
              styles.card,
              {
                backgroundColor: colors.card,
                borderColor: colors.card,
                flexDirection: iconPosition === "right" ? "row-reverse" : "row",
              },
            ]
          : setting && hide
          ? styles.dim
          : styles.hide
      }
    >
      {showIcon && <Image source={{ uri: icon }} style={styles.image} />}
      <Text style={{ fontSize: 17, marginRight: 10 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    height: 90,
    width: 90,
    transform: [{ scale: 0.7 }],
  },
  hide: {
    display: "none",
  },
  dim: {
    backgroundColor: "red",
  },
});
