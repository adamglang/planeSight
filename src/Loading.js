import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={120} color="#3679BB" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  }
});