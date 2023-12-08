import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";

const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000000",
  },
};

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#ffffff",
  },
};

export { lightTheme, darkTheme };
