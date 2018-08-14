import {StyleSheet} from "react-native";

const yellow = "#FFCD00";

export default StyleSheet.create({
  container: {
    backgroundColor: yellow,
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
    color: yellow,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15
  },
  sensorReading: {
    color: yellow,
    textAlign: "center",
    fontSize: 30
  },
  message: {
    fontSize: 15,
    color: "#FFF"
  }
});