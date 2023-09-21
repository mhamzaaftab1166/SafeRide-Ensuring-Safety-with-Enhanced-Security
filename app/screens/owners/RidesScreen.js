import React, { useState } from "react";
import { View, FlatList, StyleSheet, TextInput, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import RidesHistory from "../../components/RidesHistory";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const dummyRideHistory = [
  {
    id: "1",
    driver: "John Doe",
    time: "2023-09-25 09:30 AM",
    cluster: "Rickshaw Cluster",
    passengers: ["Alice", "Bob", "Charlie", "David"],
  },
  {
    id: "2",
    driver: "Jane Smith",
    time: "2023-09-24 02:15 PM",
    cluster: "Bike Cluster",
    passengers: ["Ella"],
  },
  {
    id: "3",
    driver: "Ella Johnson",
    time: "2023-09-23 11:45 AM",
    cluster: "Rickshaw Cluster",
    passengers: ["Frank", "Grace", "Henry", "Isabella"],
  },
  {
    id: "4",
    driver: "David Lee",
    time: "2023-09-22 04:20 PM",
    cluster: "Car Cluster",
    passengers: ["James", "Kate", "Liam", "Mia"],
  },
  {
    id: "5",
    driver: "Olivia Wilson",
    time: "2023-09-21 07:55 AM",
    cluster: "Rickshaw Cluster",
    passengers: ["Noah", "Olivia", "Sophia", "Thomas"],
  },
  {
    id: "6",
    driver: "Sophia Anderson",
    time: "2023-09-20 01:30 PM",
    cluster: "Bike Cluster",
    passengers: ["William"],
  },
  {
    id: "7",
    driver: "Lucas Harris",
    time: "2023-09-19 06:10 AM",
    cluster: "Car Cluster",
    passengers: ["Zoe", "Aaron", "Bella", "Caleb"],
  },
];

function RidesScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(dummyRideHistory.length);
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "2", value: "Rickshaw Cluster" },
    { key: "3", value: "Bike Cluster" },
    { key: "5", value: "Car Cluster" },
  ];
  const duration = [
    { key: "2", value: "Today" },
    { key: "3", value: "Last Week" },
    { key: "5", value: "Last 6 Month" },
  ];

  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>Ride History</AppText>
      <View style={styles.dropDown}>
        <View style={styles.clusterDropdow}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="key"
            placeholder="Select by Cluster"
            dropdownStyles={styles.dropdownStyles}
            boxStyles={styles.boxStyles}
            inputStyles={{ color: colors.white }}
          />
        </View>
        <View style={styles.clusterDropdow}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={duration}
            save="key"
            placeholder="Filter by: Duration"
            dropdownStyles={styles.dropdownStyles}
            boxStyles={styles.boxStyles}
            inputStyles={{ color: colors.white }}
          />
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by driver or passenger"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      {totalResults === 0 ? (
        <AppText>No results found.</AppText>
      ) : (
        <AppText>Total results: {totalResults}</AppText>
      )}
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
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: colors.light,
    height: 40,
    borderColor: colors.medium,
    borderWidth: 3,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 16,
  },
  dropDown: {
    marginVertical: 10,
    flexDirection: "row",
  },
  clusterDropdow: {
    width: "50%",
    borderRadius: 12,
    marginHorizontal: 1,
  },
  dropdownStyles: {
    backgroundColor: colors.light,
    borderColor: colors.medium,
    borderWidth: 2,
  },
  boxStyles: {
    backgroundColor: colors.primary,
    color: colors.light,
  },
});

export default RidesScreen;
