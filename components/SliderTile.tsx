import React from "react";
import { View, StyleSheet } from "react-native";
import Slider from "../atoms/Slider";
import Text from "../atoms/Text";

interface SliderTileProps {
  leadingText?: string;
  trailingText?: string | number;
  color?: string;
  value?: number;
}

const SliderTile: React.FC<SliderTileProps> = ({
  leadingText,
  trailingText,
  color,
  value,
}) => {
  return (
    <View style={styles.sliderTile}>
      <Text capital>{leadingText}</Text>
      <Slider current={value} outRangeColor={color} knobColor={color} />
      <Text>{trailingText}</Text>
    </View>
  );
};

export default SliderTile;

const styles = StyleSheet.create({
  sliderTile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: -28,
  },
});
