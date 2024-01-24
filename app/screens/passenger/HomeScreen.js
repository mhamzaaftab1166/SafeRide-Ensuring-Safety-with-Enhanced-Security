import React, { useEffect, useRef, useState } from "react";
import defaultStyles from "../../config/styles";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import SafeScreen from "../../components/SafeScreen";
import AppText from "../../components/AppText";
import { mapStyle } from "../../config/mapStyle";
import * as Location from "expo-location";
import { carsAround } from "../../config/data";

const HomeScreen = ({ navigation }) => {
  const mapRef = useRef(null);
  const [latlng, setLatLng] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("You need to give location permission for using live location!");
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;
      setLatLng({ latitude, longitude });
    })();
  }, []);

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <SafeScreen style={{ paddingTop: 0 }}>
      <ScrollView>
        <StatusBar backgroundColor={defaultStyles.colors.primary_dark} />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => {
                handleMenuPress();
              }}
            >
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
              onPress={() => navigation.navigate("request", { state: 0 })}
            >
              <AppText style={styles.buttonText}>Start Ride</AppText>
            </TouchableOpacity>
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
            height: 400,
            width: "90%",
            alignSelf: "center",
            overflow: "hidden",
            // borderRadius: 10,
          }}
        >
          <MapView
            ref={mapRef}
            style={{ flex: 1, borderRadius: 20 }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            {carsAround.map((car, index) => (
              <Marker key={index.toString()} coordinate={car}>
                <Image
                  source={require("../../assets/carMarker.png")}
                  style={{ width: 28, height: 14 }}
                  resizeMode="cover"
                />
              </Marker>
            ))}
          </MapView>
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
    flex: 1,
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
