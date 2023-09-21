import { createStackNavigator } from "@react-navigation/stack";

import ClustersScreen from "../screens/owners/ClustersScreen";
import Dashboard from "../screens/owners/Dashboard";
import RiderScreen from "../screens/owners/RiderScreen";
import RidersEditScreen from "../screens/owners/RidersEditScreen";
import SuccessScreen from "../screens/owners/SuccessScreen";
import RidesScreen from "../screens/owners/RidesScreen";

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
      <Stack.Screen name="Rides" component={RidesScreen} />
      <Stack.Screen
        options={{ title: "Success Rate" }}
        name="Success"
        component={SuccessScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RiderEdit"
        component={RidersEditScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
