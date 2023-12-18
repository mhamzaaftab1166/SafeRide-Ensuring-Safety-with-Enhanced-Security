import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../../screens/owners/Dashboard";
import RiderScreen from "../../screens/owners/RiderScreen";
import RidersEditScreen from "../../screens/owners/RidersEditScreen";
import AssignmentForm from "../../screens/owners/AssignmentForm";
import RidesScreen from "../../screens/owners/RidesScreen";
import VehicleScreen from "../../screens/owners/VehiclesScreen";

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
      <Stack.Screen name="Riders" component={RiderScreen} />
      <Stack.Screen name="Rides" component={RidesScreen} />
      <Stack.Screen name="Vehicles" component={VehicleScreen} />
      <Stack.Screen
        options={{ title: "Success Rate" }}
        name="Success"
        component={AssignmentForm}
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
