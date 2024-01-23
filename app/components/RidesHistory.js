import { StyleSheet, View } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "./AppText";

const RidesHistory = ({ item }) => {
  const passengersText = item.passenger.join(", ");

  return (
    <View style={styles.rideItem}>
      <AppText style={styles.rideTitle}>Cluster: {item.cluster}</AppText>
      <AppText style={styles.text}>Ride id: {item.id}</AppText>
      <AppText style={styles.text}>Driver: {item.driver}</AppText>
      <AppText style={styles.text}>Passenger: {passengersText}</AppText>
      <AppText style={styles.text}>Time: {item.time}</AppText>
    </View>
  );
};

export default RidesHistory;

const styles = StyleSheet.create({
  rideItem: {
    borderWidth: 1,
    borderColor: colors.medium,
    backgroundColor: colors.light,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  rideTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
});
