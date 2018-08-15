import {StyleSheet} from "react-native";

const green = "#00AA00";

export default StyleSheet.create({
  container: {
    backgroundColor: green,
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row"
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#FFF",
    marginBottom: 20
  },
  info: {
    flex: 4,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25
  },
  sensorBox: {
    flex: 1,
    borderLeftWidth: 3,
    borderLeftColor: "#FFF",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  convention: {
    color: green,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15
  },
  sensorReading: {
    color: green,
    textAlign: "center",
    fontSize: 30
  },
  message: {
    fontSize: 15,
    color: "#FFF"
  }
});