import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SrollListProps {
  onPress?: () => void;
  mode: "top" | "bottom";
  hide?: boolean;
}

const ScrollList: React.FC<SrollListProps> = ({
  hide,
  mode,
  onPress,
}) => {
  const { colors } = useTheme();
  const scrollToTopListDefaultStyles: StyleProp<ViewStyle> = {
    backgroundColor: colors.card,
    borderColor: colors.card,
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={
        hide
          ? styles.hide
          : [styles.scrollToTopList, scrollToTopListDefaultStyles]
      }
      onPress={onPress}
    >
      <FontAwesome
        name={mode === "bottom" ? "angle-up" : "angle-down"}
        size={24}
        color={colors.text}
      />
    </TouchableOpacity>
  );
};

export default ScrollList;

const styles = StyleSheet.create({
  scrollToTopList: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    width: 60,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    top: Dimensions.get("screen").height - 250,
    left: Dimensions.get("screen").width - 100,
  },

  hide: {
    display: "none",
  },
});
