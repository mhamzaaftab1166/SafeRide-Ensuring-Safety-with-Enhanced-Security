import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import authService from "./app/services/authService";
import AdminNavigator from "./app/navigation/owner/AdminNavigator";
import DashboardNavigator from "./app/navigation/owner/DashboardNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigatior";
import PassengerRootNavigator from "./app/navigation/passenger/PassengerRootNavigator";
import * as SplashScreen from "expo-splash-screen";

import {
  OriginContextProvider,
  DestinationContextProvider,
  AuthContext,
} from "./app/contexts/contexts";

function App(props) {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authService.getUser();
    if (user) setUser(user);
  };
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (error) {
        console.log("Error loading app", error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onNavigationContainerReady = useCallback(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
    // <NavigationContainer theme={navigationTheme}>
    //   <AdminNavigator />
    // </NavigationContainer>
    // <RideRequestScreen />
    // <DestinationContextProvider>
    //   <OriginContextProvider>
    //     <PassengerRootNavigator />
    //   </OriginContextProvider>
    // </DestinationContextProvider>

    <DestinationContextProvider>
      <OriginContextProvider>
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer
            onReady={onNavigationContainerReady}
            theme={navigationTheme}
          >
            {user && user.role === "admin" ? (
              <AdminNavigator />
            ) : (
              <AuthNavigator />
            )}
          </NavigationContainer>
        </AuthContext.Provider>
      </OriginContextProvider>
    </DestinationContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
