import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../../components/AppText";
import AddButton from "../../components/AddButton";

const window = Dimensions.get("window");

const dummyClusters = [
  {
    id: "1",
    name: "Rickshaw Cluster",
    location: "Faisalabad",
    numOfVehicles: 2,
    title: "rickshaw",
  },
  {
    id: "2",
    name: "Rickshaw Cluster",
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
          <TouchableOpacity style={styles.clusterItem}>
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
                size={window.width * 0.15}
                color={colors.white}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
  },
  clusterItem: {
    width: window.width / 2 - 15,
    margin: 5,
  },
  clusterBox: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  clusterName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  clusterLocation: {
    fontSize: 16,
    color: colors.white,
  },
  icon: {
    alignSelf: "flex-end",
  },
});

export default ClustersScreen;
