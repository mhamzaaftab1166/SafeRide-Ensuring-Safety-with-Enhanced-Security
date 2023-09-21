import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import RidesHistory from "../../components/RidesHistory";

const dummyRideHistory = [
  {
    id: "1",
    driver: "John Doe",
    passenger: "Alice",
    time: "2023-09-25 09:30 AM",
  },
  {
    id: "2",
    driver: "Jane Smith",
    passenger: "Bob",
    time: "2023-09-24 02:15 PM",
  },
];

function RidesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ride History</Text>
      <FlatList
        data={dummyRideHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RidesHistory item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default RidesScreen;
