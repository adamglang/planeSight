import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import socketIOClient from "socket.io-client";

import Header from "./src/Header";
import Footer from "./src/Footer";
import Wrapper from "./src/Wrapper";
import Loading from "./src/Loading";
import styles from "./stylesheets/AppStyles";

const port = 4001;
const endpointBase = "http://adamglang.com";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "sensors": null,
      "responses": null
    };

    this.connectSockets = this.connectSockets.bind(this);
  }

  async componentDidMount() {
    try {
      if(!this.state.sensors) {
        const retrievedSensors = await App.getSensors();
        this.setState({"sensors": retrievedSensors})
      }

      this.connectSockets(this.state.sensors);
    } catch(e) {
      console.error(`Something broke with: ${e}`);
    }
  }

  connectSockets(sensors) {
    const responses = {};

    sensors.forEach((sensor, idx) => {
      const socket = socketIOClient(`${endpointBase}:${port + idx}`);

      socket.on(`From::${sensor}`, data => {
        responses[sensor] = data;
        this.setState({responses});
      });
    })
  };

  static async getSensors() {
      const sensorsPromise = await fetch("http://www.adamglang.com:4000");
      return await sensorsPromise.json();
  };

  render() {
    const responses = this.state.responses;
    return (
      <View style={styles.container}>
        {
          responses
          ? <ScrollView style={{flex: 1}}>
              <Header />
                <Wrapper responses={responses} />
              <Footer/>
            </ScrollView>
          : <Loading />
        }
      </View>
    );
  }
}