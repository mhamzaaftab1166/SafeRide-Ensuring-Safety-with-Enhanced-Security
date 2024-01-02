import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DashboardNavigator from "./DashboardNavigator";
import AccountScreen from "../../screens/owners/AccountScreen";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();
const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          bottom: 3,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
            />
          ),
        }}
        name="DashboardNavigator"
        component={DashboardNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Account"
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};
export default AdminNavigator;
