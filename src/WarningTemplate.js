import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../stylesheets/WarningTemplateStyles";
import SMS from "react-native-communications";

export default WarningTemplate = ({
  deviceName,
  warningMessage,
  current,
  convention,
  techPhoneNumber,
  warningMessageForTech
}) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{deviceName}</Text>
      <Text style={styles.message}>{warningMessage}</Text>
      <Button
        title={"Alert The Tech Now!"}
        onPress={() => SMS.textWithoutEncoding(techPhoneNumber, warningMessageForTech)}
        color={"#000"}
      />
    </View>
    <View style={styles.sensorBox}>
      <Text style={styles.convention}>{convention}</Text>
      <Text style={styles.sensorReading}>{current}</Text>
    </View>
  </View>
);