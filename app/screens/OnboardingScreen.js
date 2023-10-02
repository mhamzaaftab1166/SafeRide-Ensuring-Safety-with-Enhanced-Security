import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import Onboarding from "react-native-onboarding-swiper";
import SafeScreen from "../components/SafeScreen";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const data = [
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
      title: "Group Rides Made Easy",
      subtitle: "Experience convenient and cost-effective group-ride",
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
      title: "Business with Clustering",
      subtitle:
        "Transforming Vehicle Clusters into Profitable Business Ventures",
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
    <SafeScreen style={styles.container}>
      <Onboarding containerStyles={{ paddingHorizontal: 15 }} pages={data} />
    </SafeScreen>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 0,
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
