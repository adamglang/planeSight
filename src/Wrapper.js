import React from "react";
import { Text, View, FlatList } from "react-native";
import SensorDisplay from  "./SensorDisplay";
import styles from "./stylesheets/WrapperStyles"

export default Wrapper = ({responses}) => (
  <View style={styles.container}>
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator}/>}
      data={sensorsArray(responses)}
      renderItem={(data) => <SensorDisplay {...data.item}/>}
    />
  </View>
);

const sensorsArray = responses => {
  const sensors = [];

  Object.keys(responses).forEach((sensor, idx) => {
    responses[sensor].key = (idx + "");
    sensors.push(responses[sensor])
  });

  return sensors;
};