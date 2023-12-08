import { useTheme } from "@react-navigation/native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

interface DropdownProps {
  data: any[];
  placeholder?: string;
  selectedDefault?: string;
  onSelect: (selectedItem: any, index: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  placeholder,
  selectedDefault,
  onSelect,
}) => {
  const { colors } = useTheme();
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      statusBarTranslucent
      buttonStyle={{
        backgroundColor: colors.card,
        borderWidth: 1,
        borderRadius: 65,
        borderColor: colors.primary,
        height: 25,
      }}
      rowStyle={{ backgroundColor: colors.card, borderBottomWidth: 0 }}
      dropdownStyle={{
        borderWidth: 1,
        borderColor: colors.card,
        borderRadius: 15,
      }}
      rowTextStyle={{ color: colors.text }}
      buttonTextStyle={{ color: colors.text }}
      defaultButtonText={placeholder}
      defaultValue={selectedDefault}
      
    />
  );
};

export default Dropdown;
