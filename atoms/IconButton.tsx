import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

interface IconButtonProps {
  iconName: string;
  size?: number;
  onPress?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, size, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <FontAwesome name={iconName} size={size || 24} color={colors.text} />
    </TouchableOpacity>
  );
};

export default IconButton;
