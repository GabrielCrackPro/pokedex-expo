import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../atoms";
import { useAppContext } from "../AppContext";
import { useTheme } from "@react-navigation/native";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";

interface FilterProps {
  opened: boolean;
}

const Filter: React.FC<FilterProps> = ({ opened }) => {
  const { sortPokemonBy, filterByName, setFilterByName, setSortPokemonBy } =
    useAppContext();
  const { colors } = useTheme();
  return (
    <>
      {opened && (
        <View style={{ backgroundColor: colors.card }}>
          <View style={styles.filter}>
            <Text>Sort by</Text>
            <Dropdown
              data={["default", "name", "type"]}
              onSelect={(value: string) => setSortPokemonBy(value)}
              placeholder={sortPokemonBy}
            />
          </View>
          <View style={styles.filter}>
            <Text>Name</Text>
            <TextInput
              placeholder={filterByName}
              style={styles.name}
              onChangeText={(value: string) => setFilterByName(value)}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  name: {
    width: 190,
    height: 25,
    borderRadius: 15,
  },
});
