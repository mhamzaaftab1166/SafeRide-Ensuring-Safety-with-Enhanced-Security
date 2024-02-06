import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import React, { useEffect, useState } from "react";

import OnboardingScreen from "../screens/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { getItem } from "../services/asyncStorage";

const AuthNavigator = () => {
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onboarded");
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };

  if (showOnboarding == null) {
    return null;
  }

  return showOnboarding ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="OnBoarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
