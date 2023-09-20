import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import SafeScreen from "../../components/SafeScreen";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import SuccessFailureRate from "../../components/statistics/SuccessFailure";

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
];

function ClusterListScreen({ navigation }) {
  return (
    <FlatList
      data={dummyClusters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <AppText>{item.name}</AppText>
          <SuccessFailureRate successRate={80} failureRate={20} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
    marginBottom: 15,
  },
});

export default ClusterListScreen;
