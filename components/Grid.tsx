import React from "react";
import { View, StyleSheet } from "react-native";

interface GridProps {
  children: React.ReactNode;
  itemsHorizontalPadding?: number;
}

const Grid: React.FC<GridProps> = ({ children, itemsHorizontalPadding }) => {
  return (
    <View
      style={[styles.grid, { paddingHorizontal: itemsHorizontalPadding ?? 10 }]}
    >
      {children}
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});
