import React from "react";
import { StyleSheet, Text, View } from "react-native";
import socketIOClient from "socket.io-client";

const port = 4001;
const endpointBase = "http://adamglang.com";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      "sensors": null,
      "responses": null
    };
  }

  async componentDidMount() {
    try {
      if(!this.state.sensors) {
        const retrievedSensors = await this.getSensors();
        this.setState({"sensors": retrievedSensors})
      }

      this.connectSockets(this.state.sensors);
    } catch(e) {
      console.error(`One of the remote calls failed: ${e.stack}`);
    }
  }

  connectSockets = (sensors) => {
    const responses = {};

    for(const [idx, sensor] of sensors.entries()) {
      const socket = socketIOClient(`${endpointBase}:${port + idx}`);

      socket.on(`From::${sensor}`, data => {
        responses[sensor] = data;
        this.setState({responses});
      });
    }
  };

  getSensors = async () => {
      const sensorsPromise = await fetch("http://www.adamglang.com:4000");
      return await sensorsPromise.json();
  };

  render() {
    const responses = this.state.responses;
    return (
      <View style={styles.container}>
        {
          responses
          ? <Text>Here is some live data: {JSON.stringify(responses)}</Text>
          : <Text>Loading...</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20
  }
});
