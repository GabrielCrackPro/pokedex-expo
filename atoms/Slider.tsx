import { useTheme } from "@react-navigation/native";
import React from "react";
import { Slider as RNSlider } from "react-native-range-slider-expo";

interface SliderProps {
  min?: number;
  max?: number;
  current?: number;
  inRangeColor?: string;
  outRangeColor?: string;
  knobColor?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  current,
  inRangeColor,
  outRangeColor,
  knobColor,
}) => {
  const { colors } = useTheme();
  return (
    <RNSlider
      min={min}
      max={max}
      step={1}
      valueOnChange={(value) => {}}
      initialValue={current}
      knobColor={knobColor}
      showValueLabels={false}
      showRangeLabels={false}
      inRangeBarColor={inRangeColor || colors.border}
      outOfRangeBarColor={outRangeColor}
      styleSize={5}
      containerStyle={{ alignItems: "center", justifyContent: "center" }}
    />
  );
};

export default Slider;
