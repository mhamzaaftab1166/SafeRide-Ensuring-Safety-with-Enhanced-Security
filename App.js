import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AdminNavigator from "./app/navigation/AdminNavigator";

function App(props) {
  return (
    <NavigationContainer>
      <AdminNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
