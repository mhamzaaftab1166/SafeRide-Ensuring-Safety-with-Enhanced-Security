import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import { Image } from "react-native";
import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        blurRadius={4}
        resizeMode="cover"
        style={styles.background}
        source={require("../assets/background.webp")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/hamza.jpeg")} />
          <Text style={styles.tagline}>
            SafeRide: Ensuring Safety with Enhanced Security
          </Text>
        </View>
        <View style={styles.buttonContainner}>
          <AppButton
            onPress={() => navigation.navigate("login")}
            title={"Login"}
          ></AppButton>
          <AppButton
            onPress={() => navigation.navigate("")}
            title={"Register"}
            color="secondary"
          ></AppButton>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
    textAlign: "center",
    color: colors.white,
  },
  buttonContainner: {
    padding: 20,
    width: "100%",
  },
});
