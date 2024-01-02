import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import React from "react";

import AccountScreen from "../../screens/owners/AccountScreen";
import MessagesScreen from "../../screens/MessagesScreen";
import ProfileScreen from "../../screens/owners/ProfileScreen";
import RiderStatusScreen from "../../screens/owners/RiderStatusScreen";

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="AccountNavigator"
        component={AccountScreen}
        options={{ title: "My Account" }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Status" component={RiderStatusScreen} />
      <Stack.Screen
        options={{ title: "Reports" }}
        name="Messages"
        component={MessagesScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
