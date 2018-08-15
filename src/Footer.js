import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../stylesheets/FooterStyles"

export default Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Made by Adam G Lang with:</Text>
    <Image
      source={require('../assets/loveAndReact.png')}
      style={styles.image}
    />
  </View>
);