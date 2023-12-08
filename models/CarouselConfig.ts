import { KeenSliderOptions } from "keen-slider";

export interface CarouselConfig extends KeenSliderOptions {
  initialSlide?: number;
  loop?: boolean;
  activeDotColor?: string;
  showIndicators?: boolean;
}
