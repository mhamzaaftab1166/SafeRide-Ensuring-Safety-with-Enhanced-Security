import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import Onboarding from "react-native-onboarding-swiper";
import colors from "../config/colors";
import { setItem } from "../services/asyncStorage";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const handleDone = () => {
    navigation.navigate("welcome");
    setItem("onboarded", "1");
  };

  const data = [
    {
      backgroundColor: colors.purple,
      image: (
        <View style={styles.lottie}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/animations/business.json")}
          />
        </View>
      ),
      title: "Unlock business success",
      subtitle:
        "Optimize your ride-hailing business with advanced analytics for efficiency",
    },

    {
      backgroundColor: colors.yellow,
      image: (
        <View style={styles.lottie}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/animations/parental.json")}
          />
        </View>
      ),
      title: "Monitor Your Child's Rides",
      subtitle:
        "Ensure the safety and convenience of your child's transportation",
    },
    {
      backgroundColor: colors.secondary,
      image: (
        <View style={styles.lottie}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/animations/ridemate.json")}
          />
        </View>
      ),
      title: "Ride with Ease",
      subtitle: "Experience convenient and cost-effective rides",
    },
    {
      backgroundColor: colors.primary,
      image: (
        <View style={styles.lottie}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/animations/geo.json")}
          />
        </View>
      ),
      title: "Geo-Fencing & More",
      subtitle:
        "Unlock the Power of Geo-Fencing and Discover Many Other Helpful Features",
    },
  ];

  return (
    <View style={styles.container}>
      <Onboarding
        bottomBarHighlight={false}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={data}
        DoneButtonComponent={({ isLight, ...props }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("welcome");
              setItem("onboarded", "1");
            }}
            style={styles.doneButton}
          >
            <Text style={styles.text}>Get Started</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    backgroundColor: colors.white,
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 30,
    right: width * 0.3,
    bottom: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
});

export default OnboardingScreen;
