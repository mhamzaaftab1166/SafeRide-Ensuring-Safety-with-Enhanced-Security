import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const RidesHistory = ({ item }) => {
  return (
    <View style={styles.rideItem}>
      <Text style={styles.rideTitle}>Ride ID: {item.id}</Text>
      <Text>Driver: {item.driver}</Text>
      <Text>Passenger: {item.passenger}</Text>
      <Text>Time: {item.time}</Text>
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
    fontSize: 18,
    fontWeight: "bold",
  },
});
