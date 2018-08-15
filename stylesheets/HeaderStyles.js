import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: 145,
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: "#FFF",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40
  },
  logo: {
    marginLeft: 20,
  },
  logoImg: {
    width: 120,
    height: 30
  },
  title: {
    color: "#00AA00",
    fontSize: 24,
    textAlign: "center",
    marginTop: 5
  },
  description: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  }
});