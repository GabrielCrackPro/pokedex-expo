import { KeenSliderOptions } from "keen-slider";
import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useKeenSliderNative } from "keen-slider/react-native";
import { CarouselConfig } from "../models/CarouselConfig";
import CarouselDots from "./CarouselDots";
import Dropdown from "../components/Dropdown";

interface SliderProps extends KeenSliderOptions {
  items: React.ReactNode[];
  config?: CarouselConfig;
}

const Carousel: React.FC<SliderProps> = ({ items, config }) => {
  const slider = useRef<any>(null);
  const slides = items.length;
  const [activeSlide, setActiveSlide] = useState(config?.initialSlide || 0);
  const { containerProps, slidesProps } = useKeenSliderNative({
    slides,
    initial: activeSlide,
    loop: config?.loop || false,
    slideChanged: (s) => {
      setActiveSlide(s.track.details.rel);
      if (config?.slideChanged) {
        config.slideChanged(s);
      }
    },
  });

  return (
    <View style={styles.carouselContainer}>
      <View {...containerProps} ref={slider}>
        {[...Array(slides).keys()].map((idx) => {
          return (
            <View key={idx} {...slidesProps[idx]}>
              {items[idx]}
            </View>
          );
        })}
      </View>
      {config?.showIndicators && (
        <CarouselDots
          slides={slides}
          activeSlide={activeSlide}
          activeDotColor={config?.activeDotColor!}
          onDotPress={(index) => slider.current?.moveToSlide(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: Dimensions.get("screen").height - 650,
    flexDirection: "column",
  },
});

export default Carousel;
