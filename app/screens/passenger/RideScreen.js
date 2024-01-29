import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapComponent from "../../components/MapComponent";
import { DestinationContext, OriginContext } from "../../contexts/contexts";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import * as Location from "expo-location";

const RideScreen = ({ navigation, route }) => {
  const { origin, dispatchOrigin } = useContext(OriginContext);
  const { destination, dispatchDestination } = useContext(DestinationContext);

  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.log("Permission to access location was denied");
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          console.log(location);
          dispatchOrigin({
            type: "ADD_ORIGIN",
            payload: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              address: "",
              name: "",
            },
          });
        } catch (error) {
          console.error("Error in useEffect:", error);
          setErrorMsg("Error in useEffect");
        }
      })();
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setUserOrigin({
      latitude: origin.latitude,
      longitude: origin.longitude,
    });
  }, [origin]);

  return (
    <>
      <View style={{ flex: 1 }}>
        <MapComponent
          userOrigin={userOrigin}
          userDestination={userDestination}
          // pickupLocation={userOrigin}
          // driverLocation={{
          //   latitude: 31.460783566384293,
          //   longitude: 73.13855325347546,
          // }}
        />
      </View>
      <View style={styles.driverContainer}>
        <View style={styles.registrationContainer}>
          <View style={styles.vehicleInfoContainer}>
            <View>
              <AppText style={styles.heading}>Vehicle Reg:</AppText>
              <AppText style={styles.vehicleReg}>LPC 1022</AppText>
              <AppText style={styles.vehicleTitle}>
                {`Package: ${route.params.item.title}`}
              </AppText>
            </View>
            <View style={styles.driverInfoContainer}>
              <Image
                source={require("../../assets/hamza.jpeg")}
                style={styles.driverImage}
              />
              <AppText style={styles.driverName}>
                Driver: Muhammad Hamza
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  driverContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  registrationContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    width: "100%",
  },
  vehicleInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  vehicleReg: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  vehicleTitle: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 10,
  },
  driverInfoContainer: {
    alignItems: "flex-end",
  },
  driverImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 5,
  },
  driverName: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default RideScreen;
