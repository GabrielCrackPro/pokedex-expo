import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface CarouselDotsProps {
  slides: number;
  activeSlide: number;
  activeDotColor: string;
  onDotPress: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  slides,
  activeSlide,
  activeDotColor,
  onDotPress,
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.dotsContainer}>
      {[...Array(slides).keys()].map((index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dot,
            { borderColor: colors.text },
            activeSlide === index
              ? { backgroundColor: activeDotColor || "#ffffff" }
              : null,
          ]}
          onPress={() => onDotPress(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
  },
});

export default CarouselDots;
