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
    startTime: "2023-09-25 09:30 AM",
    endTime: "2023-09-25 10:15 AM",
    passenger: ["Alice"],
  },
  {
    id: "2",
    driver: "Jane Smith",
    startTime: "2023-09-24 02:15 PM",
    endTime: "2023-09-24 02:45 PM",
    passenger: ["Ella"],
  },
  {
    id: "3",
    driver: "Ella Johnson",
    startTime: "2023-09-23 11:45 AM",
    endTime: "2023-09-23 12:30 PM",
    passenger: ["Frank"],
  },
  {
    id: "5",
    driver: "Ella Johnson",
    startTime: "2023-09-23 11:45 AM",
    endTime: "2023-09-23 12:30 PM",
    passenger: ["Frank"],
  },
  {
    id: "4",
    driver: "Ella Johnson",
    startTime: "2023-09-23 11:45 AM",
    endTime: "2023-09-23 12:30 PM",
    passenger: ["Frank"],
  },
  // ... other data
];

function HistoryScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(dummyRideHistory.length);
  const [selected, setSelected] = React.useState("");

  const duration = [
    { key: "2", value: "Today" },
    { key: "3", value: "Last Week" },
    { key: "5", value: "Last 6 Month" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
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
  },
  clusterDropdow: {
    width: "100%",
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

export default HistoryScreen;
