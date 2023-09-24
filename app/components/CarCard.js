import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const CarCard = ({ item }) => {
  return (
    <View style={styles.vehicleCard}>
      <Image source={item.image} style={styles.vehicleImage} />
      <View style={styles.vehicleDetails}>
        <AppText style={styles.vehicleName}>{item.name}</AppText>
        <AppText style={styles.numberPlate}>
          Number Plate: {item.numberPlate}
        </AppText>
      </View>
    </View>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  vehicleCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  vehicleImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  vehicleDetails: {
    marginLeft: 16,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  numberPlate: {
    fontSize: 14,
    color: colors.medium,
  },
});
