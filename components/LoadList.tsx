import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../atoms/Text";
import { useTheme } from "@react-navigation/native";

interface LoadListProps {
  hide?: boolean;
  onPress?: () => void;
}

const LoadList: React.FC<LoadListProps> = ({ hide, onPress }) => {
  const { colors } = useTheme();
  const loadListDefaultStyles: StyleProp<ViewStyle> = {
    backgroundColor: colors.card,
    borderColor: colors.card,
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={hide ? styles.hide : [styles.loadList, loadListDefaultStyles]}
      onPress={onPress}
    >
      <Text bold>Load More</Text>
      <MaterialIcons name="expand-more" size={30} color={colors.text} />
    </TouchableOpacity>
  );
};

export default LoadList;

const styles = StyleSheet.create({
  loadList: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    top: Dimensions.get("screen").height - 250,
    left: Dimensions.get("screen").width / 4,
  },
  hide: {
    display: "none",
  },
});
