import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RequestScreen from "../../screens/passenger/RequestScreen";
import HomeScreen from "../../screens/passenger/HomeScreen";
import DestinationScreen from "../../screens/passenger/DestinationScreen";
import RideScreen from "../../screens/passenger/RideScreen";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="request" component={RequestScreen} />
      <Stack.Screen name="ride" component={RideScreen} />
      <Stack.Screen name="destination" component={DestinationScreen} />
    </Stack.Navigator>
  );
}
