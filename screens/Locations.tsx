import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getDataList } from "../utils/fetch";
import { Endpoints } from "../constants/endpoints";
import { useSettings } from "../hooks/useSettings";
import { Loader, Text } from "../atoms";

const Locations: React.FC = () => {
  const { listLimit } = useSettings();
  const [locationList, setLocationsList] = useState<any[] | undefined>([]);

  useEffect(() => {
    getDataList(Endpoints.LOCATIONS, listLimit).then((data) => {
      setLocationsList(data);
    });
  }, [listLimit]);

  return (
    <>
      {!locationList?.length && <Loader />}
      <View style={styles.locations}>
        <FlatList
          data={locationList}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </>
  );
};

export default Locations;

const styles = StyleSheet.create({
  locations: {
    flex: 1,
  },
});
