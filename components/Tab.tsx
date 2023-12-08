import React from "react";
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { TabType } from "../models/Tab";
import Text from "../atoms/Text";
import { useTheme } from "@react-navigation/native";

interface TabProps {
  tab: TabType;
  predicate?: string | number;
  showPredicate?: boolean;
  isActive?: boolean;
  activeColor?: string;
  onTabPress?: () => void;
}

const Tab: React.FC<TabProps> = ({
  tab,
  predicate,
  showPredicate,
  isActive,
  activeColor,
  onTabPress,
}) => {
  const { colors } = useTheme();

  const activeTabStyle: StyleProp<ViewStyle> = {
    borderBottomWidth: 2,
    borderBottomColor: activeColor || colors.text,
  };

  const activeTextStyle: StyleProp<TextStyle> = {
    color: activeColor || colors.text,
    marginRight: 5,
  };

  const textStyle: StyleProp<TextStyle> = {
    color: colors.text,
    marginRight: 5,
  };

  return (
    <View style={isActive && activeTabStyle}>
      <TouchableOpacity
        onPress={onTabPress}
        activeOpacity={1}
        style={{ flexDirection: "row" }}
      >
        <Text bold={isActive} style={isActive ? activeTextStyle : textStyle}>
          {tab.title}
        </Text>
        {showPredicate && (
          <Text bold={isActive} style={isActive ? activeTextStyle : textStyle}>
            {predicate}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Tab;
