import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AdminNavigator from "./app/navigation/owner/AdminNavigator";
import DashboardNavigator from "./app/navigation/owner/DashboardNavigator";
import navigationTheme from "./app/navigation/owner/navigationTheme";
import OnboardingScreen from "./app/screens/OnboardingScreen";
import AuthNavigator from "./app/navigation/AuthNavigatior";
import HomeScreen from "./app/screens/passenger/HomeScreen";

function App(props) {
  return (
    // <NavigationContainer theme={navigationTheme}>
    //   <AuthNavigator />
    // </NavigationContainer>
    // <RideRequestScreen />
    <HomeScreen />
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
