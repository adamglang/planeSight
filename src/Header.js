import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../stylesheets/HeaderStyles"

export default Header = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.title}>PlaneSite</Text>
      </View>
      <View style={styles.logo}>
        <Image source={require('../assets/logo.png')} style={styles.logoImg}/>
      </View>
    </View>
    <Text style={styles.description}>Real time onboard diagnostics</Text>
  </View>
);