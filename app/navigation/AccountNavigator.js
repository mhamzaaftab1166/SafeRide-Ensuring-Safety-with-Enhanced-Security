import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountScreen from "../screens/owners/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen
        options={{ title: "Reports" }}
        name="Messages"
        component={MessagesScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
