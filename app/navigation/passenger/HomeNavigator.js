import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RequestScreen from "../../screens/passenger/RequestScreen";
import HomeScreen from "../../screens/passenger/HomeScreen";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="request" component={RequestScreen} />
    </Stack.Navigator>
  );
}
