import React from "react";
import { Text, View } from "react-native";
import styles from "../stylesheets/WarningTemplateStyles";

export default WarningTemplate = ({
  deviceName,
  warningMessage,
  current,
  convention
}) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{deviceName}</Text>
      <Text style={styles.message}>{warningMessage}</Text>
    </View>
    <View style={styles.sensorBox}>
      <Text style={styles.convention}>{convention}</Text>
      <Text style={styles.sensorReading}>{current}</Text>
    </View>
  </View>
);