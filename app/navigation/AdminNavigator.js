import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DashboardNavigator from "./DashboardNavigator";
import AccountScreen from "../screens/owners/AccountScreen";

const Tab = createBottomTabNavigator();
const AdminNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          bottom: 3,
        },
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
        name="Dashboard"
        component={DashboardNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};
export default AdminNavigator;
