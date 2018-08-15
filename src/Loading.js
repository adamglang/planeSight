import React from "react";
import { View, Image } from "react-native";
import styles from "../stylesheets/LoadingStyles";

export default Loading = () => (
  <View style={styles.container}>
    <Image source={require('../assets/splash.png')} resizeMode="center" />
  </View>
);