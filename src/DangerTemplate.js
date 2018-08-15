import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../stylesheets/DangerTemplateStyles";
import SMS from 'react-native-communications';

export default DangerTemplate = ({
  deviceName,
  dangerMessage,
  current,
  convention,
  techPhoneNumber,
  dangerMessageForTech
}) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{deviceName}</Text>
      <Text style={styles.message}>{dangerMessage}</Text>
      <Button
        title={"Alert The Tech Now!"}
        onPress={() => SMS.textWithoutEncoding(techPhoneNumber, dangerMessageForTech)}
        color={"#000"}
      />
    </View>
    <View style={styles.sensorBox}>
      <Text style={styles.convention}>{convention}</Text>
      <Text style={styles.sensorReading}>{current}</Text>
    </View>
  </View>
);