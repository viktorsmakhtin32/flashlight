import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/components/Home";

//import { StyleSheet, Text, View } from 'react-native';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
  //Profile: { screen: ProfileScreen }
});

const App = createAppContainer(MainNavigator);

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
