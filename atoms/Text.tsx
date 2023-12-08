import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { capitalize } from "../utils/text";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  title?: boolean;
  bold?: boolean;
  capital?: boolean;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({
  children,
  title,
  bold,
  capital,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const defaultStyles: StyleProp<TextStyle> = {
    color: colors.text,
    fontWeight: bold ? "bold" : "normal",
    fontSize: title ? 22 : 18,
  };
  return (
    <RNText style={[defaultStyles, style]} {...props}>
      {children && capital ? capitalize(children as string) : children}
    </RNText>
  );
};

export default Text;
