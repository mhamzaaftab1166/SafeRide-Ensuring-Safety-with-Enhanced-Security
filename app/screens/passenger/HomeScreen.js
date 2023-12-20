import React from "react";
import defaultStyles from "../../config/styles";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import SafeScreen from "../../components/SafeScreen";
import AppText from "../../components/AppText";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeScreen style={{ paddingTop: 0 }}>
      <ScrollView>
        <StatusBar backgroundColor={defaultStyles.colors.primary_dark} />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => null}>
              <MaterialIcons name="menu" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <AppText style={styles.title}>SafeRide</AppText>
            <AppText style={styles.subtitle}>
              Ensuring Safety with Enhanced Security
            </AppText>
            <TouchableOpacity
              style={styles.startRideButton}
              onPress={() => navigation.navigate("RequestRide")}
            >
              <AppText style={styles.buttonText}>Start Ride</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.additionalContentContainer}>
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>Where to ?</Text>
              <View style={styles.inputContent}>
                <MaterialCommunityIcons name="clock-time-four" size={26} />
                <AppText style={styles.inputText}>Now?</AppText>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            ...styles.infoContainer,
            borderBottomWidth: 0.5,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              borderRadius: 30,
              backgroundColor: defaultStyles.colors.light,
              padding: 8,
            }}
          >
            <MaterialCommunityIcons name="map-marker" size={22} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>32 Olivia Rd2</Text>
            <Text style={styles.subText}>Any street no.</Text>
          </View>
          <MaterialCommunityIcons
            type="material-community"
            name="chevron-right"
            size={26}
          />
        </View>
        <View style={styles.infoContainer}>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: defaultStyles.colors.light,
              padding: 8,
            }}
          >
            <MaterialCommunityIcons name="map-marker" size={22} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>32 Olivia Rd</Text>
            <Text style={styles.subText}>Any street no.</Text>
          </View>
          <MaterialCommunityIcons
            type="material-community"
            name="chevron-right"
            size={26}
          />
        </View>
        <AppText style={styles.aroundYouText}>Around You</AppText>
        <View
          style={{
            marginTop: 10,
            height: 300,
            width: "90%",
            alignSelf: "center",
            overflow: "hidden",
            borderRadius: 10,
          }}
        >
          <MapView
            style={{ flex: 1, borderRadius: 20 }}
            provider={PROVIDER_GOOGLE}
          ></MapView>
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%",
  },
  headerContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  contentContainer: {
    flex: 4,
    backgroundColor: defaultStyles.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 8,
  },
  startRideButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "tomato",
    fontWeight: "bold",
    textAlign: "center",
  },
  additionalContentContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 8,
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 10,
  },
  inputText: {
    marginLeft: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1, // Take the remaining space
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
  },
  aroundYouText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
});

export default HomeScreen;
