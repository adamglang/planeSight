import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "../stylesheets/LoadingStyles";

export default Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={120} color="#3679BB" />
  </View>
);