import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "../navigationTheme";
import DrawerNavigator from "./DrawerNavigator";

export default function PassengerRootNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
