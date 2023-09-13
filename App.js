import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AdminNavigator from "./app/navigation/AdminNavigator";
import DashboardNavigator from "./app/navigation/DashboardNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
function App(props) {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AdminNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
