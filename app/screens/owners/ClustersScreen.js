import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../../components/AppText";

const dummyClusters = [
  {
    id: "1",
    name: "Rikshaw Cluster",
    location: "Faisalabad",
    numOfVehicles: 2,
    title: "rickshaw",
  },
  {
    id: "2",
    name: "Rikshaw Cluster",
    location: "Lahore",
    numOfVehicles: 5,
    title: "rickshaw",
  },
  {
    id: "3",
    name: "Car Cluster",
    location: "Multan",
    numOfVehicles: 3,
    title: "car-side",
  },
];

function ClustersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={dummyClusters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.clusterItem}
            // onPress={() =>
            //   navigation.navigate("ClusterDetails", { clusterData: item })
            // }
          >
            <View style={styles.clusterBox}>
              <AppText style={styles.clusterName}>{item.name}</AppText>
              <AppText style={styles.clusterLocation}>{item.location}</AppText>
              <AppText style={styles.clusterLocation}>
                {"Vehicles: "}
                {item.numOfVehicles}
              </AppText>
              <MaterialCommunityIcons
                style={styles.icon}
                name={item.title}
                size={35}
                color={colors.white}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  clusterItem: {
    width: "47%",
    margin: 5,
  },
  clusterBox: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    height: 150,
  },
  clusterName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 8,
  },
  clusterLocation: {
    fontSize: 16,
    color: colors.white,
  },
  icon: {
    top: 10,
    left: 105,
  },
});

export default ClustersScreen;
