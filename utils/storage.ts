import AsyncStorage from "@react-native-async-storage/async-storage";

const setValue = (key: string, value: any) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting ${key} to ${value}`);
  }
};

const getValue = (key: string) => {
  try {
    const value = AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(`Error getting value for ${key}`);
  }
};

export { setValue, getValue };
