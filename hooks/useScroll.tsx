import { useState } from "react";
import { FlatList } from "react-native";

const useScroll = (listRef: React.RefObject<FlatList<any>>) => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsScrolledToTop(offsetY === 0);
  };

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollToEnd()
    }
  };

  
  return {
    isScrolledToTop,
    handleScroll,
    scrollToTop,
    scrollToBottom,
  };
};

export default useScroll;

