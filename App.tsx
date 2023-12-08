import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import Navigation from "./Navigation";
import { StatusBar } from "expo-status-bar";
import { darkTheme, lightTheme } from "./constants/themes";
import AppContext from "./AppContext";
import { useDarkMode } from "./hooks/useDarkMode";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFavoritePokemon } from "./hooks/useFavouritePokwenon";
import { useHomeCards } from "./hooks/useHomeCards";
import { useState } from "react";
import { useSettings } from "./hooks/useSettings";

export default function App() {
  const { isDark, toggleDark } = useDarkMode();
  const { favorites, showFavorites, toggleFavorite, toggleShowFavorites } =
    useFavoritePokemon();
  const { homeCards, toggleVisible } = useHomeCards();
  const { listLimit, updateListLimit } = useSettings();

  const [sortPokemonBy, setSortPokemonBy] = useState<
    "default" | "type" | "name"
  >("default");
  const [filterByName, setFilterByName] = useState("")

  const globals = {
    isDark,
    toggleDark,
    favorites,
    showFavorites,
    toggleFavorite,
    toggleShowFavorites,
    homeCards,
    toggleVisible,
    sortPokemonBy,
    setSortPokemonBy,
    filterByName,
    setFilterByName,
    listLimit,
    updateListLimit
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContext.Provider value={globals}>
        <ThemeProvider value={isDark ? darkTheme : lightTheme}>
          <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
            <StatusBar style={isDark ? "light" : "dark"} />
            <Navigation />
          </NavigationContainer>
        </ThemeProvider>
      </AppContext.Provider>
    </GestureHandlerRootView>
  );
}
