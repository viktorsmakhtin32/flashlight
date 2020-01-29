import React, { Component } from "react";

import { Button, StyleSheet, Text, View } from "react-native";

import Torch from "react-native-torch";

class HomeScreen extends Component {
  state = {
    isTurnTorch: false
  };
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Turn On/Off"
          onPress={() =>
            this.setState(
              prevState => ({
                isTurnTorch: !prevState.isTurnTorch
              }),
              () => Torch.switchState(true)
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
