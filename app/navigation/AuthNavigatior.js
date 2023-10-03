import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import React from "react";

import OnboardingScreen from "../screens/OnboardingScreen";
import RoleScreen from "../screens/RoleScreen";

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
      <Stack.Screen name="Role" component={RoleScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
