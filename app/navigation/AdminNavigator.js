import { createStackNavigator } from "@react-navigation/stack";

import ClustersScreen from "../screens/owners/ClustersScreen";
import Dashboard from "../screens/owners/Dashboard";

const Stack = createStackNavigator();

const AdminNavigator = () => {
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
    </Stack.Navigator>
  );
};

export default AdminNavigator;
