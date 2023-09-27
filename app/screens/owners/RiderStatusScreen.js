import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-gesture-handler";

const ridersData = [
  { id: "1", name: "Rider 1", status: "In Ride" },
  { id: "2", name: "Rider 2", status: "Free" },
  { id: "3", name: "Rider 3", status: "In Ride" },
];

const data = [
  { key: "2", value: "Rickshaw Cluster" },
  { key: "3", value: "Bike Cluster" },
  { key: "5", value: "Car Cluster" },
];

const RiderStatusScreen = () => {
  const [riders, setRiders] = useState(ridersData);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        <View style={styles.clusterDropdow}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="key"
            placeholder="Filter by: Cluster"
            dropdownStyles={styles.dropdownStyles}
            boxStyles={styles.boxStyles}
            inputStyles={{ color: colors.white }}
          />
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by driver name"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <FlatList
        data={riders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.riderItem}>
            <View style={styles.riderInfo}>
              <Text style={styles.riderName}>{item.name}</Text>
              <Text style={styles.riderStatus}>{item.status}</Text>
            </View>
            <View style={styles.statusIndicatorContainer}>
              <View
                style={[
                  styles.statusIndicator,
                  item.status === "In Ride"
                    ? styles.inRideIndicator
                    : styles.freeIndicator,
                ]}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  riderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: colors.light,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  riderInfo: {
    flexDirection: "column",
  },
  riderName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
  },
  riderStatus: {
    fontSize: 16,
    color: colors.medium,
  },
  statusIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  inRideIndicator: {
    backgroundColor: colors.secondary,
  },
  freeIndicator: {
    backgroundColor: colors.danger,
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
  searchInput: {
    backgroundColor: colors.light,
    height: 40,
    borderColor: colors.medium,
    borderWidth: 3,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 16,
  },
  boxStyles: {
    backgroundColor: colors.primary,
    color: colors.light,
  },
});

export default RiderStatusScreen;
