import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigator from "./HomeNavigator";
import defaultStyles from "../../config/styles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Homestack"
        component={HomeNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={
                focused
                  ? defaultStyles.colors.primary
                  : defaultStyles.colors.white
              }
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
