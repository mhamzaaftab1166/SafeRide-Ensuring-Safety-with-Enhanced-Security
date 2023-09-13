import { createStackNavigator } from "@react-navigation/stack";

import ClustersScreen from "../screens/owners/ClustersScreen";
import Dashboard from "../screens/owners/Dashboard";
import RiderScreen from "../screens/owners/RiderScreen";

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen name="Clusters" component={ClustersScreen} />
      <Stack.Screen name="Riders" component={RiderScreen} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
