import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAppContext } from "../AppContext";
import { useTheme } from "@react-navigation/native";
import { defaultHomeCards } from "../constants/homeCards";
import { Text } from "../atoms";
import { Collapsible, SwitchTile, TextInput } from "../components";

const Settings: React.FC = () => {
  const {
    listLimit,
    homeCards,
    isDark,
    toggleDark,
    toggleVisible,
    updateListLimit,
  } = useAppContext();

  const { colors } = useTheme();

  const [homeCardsCollapsed, setHomeCardsCollapsed] = useState(true);

  return (
    <View style={styles.settings}>
      <SwitchTile
        label="Dark mode"
        enabled={isDark}
        iconType="icon"
        icon="sun"
        onChange={toggleDark}
        style={styles.setting}
      />
      <View style={styles.setting}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.horizontal}
          onPress={() => setHomeCardsCollapsed((prev) => !prev)}
        >
          <FontAwesome name="home" size={22} color={colors.text} />
          <Text>Home cards</Text>
          <FontAwesome
            name={homeCardsCollapsed ? "angle-right" : "angle-down"}
            size={22}
            color={colors.text}
          />
        </TouchableOpacity>
        <Collapsible collapsed={homeCardsCollapsed}>
          {defaultHomeCards.map((card, index) => (
            <SwitchTile
              key={index}
              label={card.name}
              icon={card.icon}
              iconType="image"
              enabled={
                homeCards.find((homeCard) => card.name === homeCard.name)
                  ?.visible
              }
              style={styles.setting}
              onChange={() => toggleVisible(card)}
              capitalLabel
            />
          ))}
        </Collapsible>
      </View>
      <View style={[styles.setting, styles.horizontal]}>
        <FontAwesome name="list" size={22} color={colors.text} />
        <Text>List limit</Text>
        <TextInput
          onlyNumbers
          value={listLimit.toString()}
          onChangeText={(value: string) => {
            updateListLimit(Number(value));
          }}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    flex: 1,
  },
  setting: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
