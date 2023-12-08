import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LoaderKit from "react-native-loader-kit";

const Loader: React.FC = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.loaderContainer}>
      <LoaderKit
        style={styles.loader}
        name="BallClipRotate"
        size={50}
        color={colors.primary}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("screen").height,
  },
  loader: {
    width: 50,
    height: 50,
  },
});
