import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default Wrapper = ({responses}) => {
  const sensors = [];

  Object.keys(responses).forEach((sensor, idx) => {
    sensor.key = idx;
    sensors.push(responses[sensor])
  });

  return <FlatList
      contentContainerStyle={styles.container}
      data={sensors}
      renderItem={(item) => <Text style={styles.text}>{JSON.stringify(item)}</Text>}
    />

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20
  },
  margin: {
    marginTop: 10
  }
});