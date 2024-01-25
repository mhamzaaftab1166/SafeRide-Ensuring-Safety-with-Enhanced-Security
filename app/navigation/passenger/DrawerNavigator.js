import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigator from "./HomeNavigator";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import RequestScreen from "../../screens/passenger/RequestScreen";
import CustomDrawerContent from "./DrawerContent";
import colors from "../../config/colors";
import HistoryScreen from "../../screens/passenger/HistoryScreen";
import LogOutScreen from "../../screens/passenger/LogOutScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.primary : colors.dark}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="RequestRide"
        component={RequestScreen}
        initialParams={{ state: 0 }}
        options={{
          headerShown: false,
          title: "Request Ride",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="car"
              color={focused ? colors.primary : colors.dark}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "History",
          headerTitleAlign: "center",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="history"
              color={focused ? colors.primary : colors.dark}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Log Out"
        component={LogOutScreen}
        options={{
          title: "Log Out",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="exit-to-app"
              color={focused ? colors.primary : colors.dark}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
