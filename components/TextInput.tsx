import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
  StyleSheet,
} from "react-native";

interface TextInputProps extends RNTextInputProps {
  placeholder?: string;
  onlyNumbers?: boolean;
  style?: StyleProp<TextStyle>;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  onlyNumbers,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const inputStyles: StyleProp<TextStyle> = {
    borderColor: colors.primary,
    color: colors.text,
  };

  return (
    <RNTextInput
      {...props}
      style={[styles.input, inputStyles, style]}
      placeholder={placeholder}
      placeholderTextColor={colors.text}
      cursorColor={colors.text}
      keyboardType={onlyNumbers ? "numeric" : "default"}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 4,
    marginVertical: 10,
  },
});
