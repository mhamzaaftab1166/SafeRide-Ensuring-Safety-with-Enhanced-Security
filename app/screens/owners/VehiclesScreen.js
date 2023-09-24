import React, { useState } from "react";
import { View, FlatList, StyleSheet, TextInput } from "react-native";

import colors from "../../config/colors";
import AppText from "../../components/AppText";
import AddButton from "../../components/AddButton";
import { SelectList } from "react-native-dropdown-select-list";
import CarCard from "../../components/CarCard";

const dummyVehicles = [
  {
    id: "1",
    name: "Honda Civic",
    numberPlate: "ABC 123",
    image: require("../../assets/civic.jpg"),
  },
  {
    id: "2",
    name: "Vehicle 2",
    numberPlate: "XYZ 789",
    image: require("../../assets/civic.jpg"),
  },
  {
    id: "3",
    name: "Vehicle 2",
    numberPlate: "XYZ 789",
    image: require("../../assets/civic.jpg"),
  },
  {
    id: "4",
    name: "Vehicle 2",
    numberPlate: "XYZ 789",
    image: require("../../assets/civic.jpg"),
  },
  {
    id: "5",
    name: "Vehicle 2",
    numberPlate: "XYZ 789",
    image: require("../../assets/civic.jpg"),
  },
  {
    id: "6",
    name: "Vehicle 2",
    numberPlate: "XYZ 789",
    image: require("../../assets/civic.jpg"),
  },
];
const data = [
  { key: "2", value: "Car" },
  { key: "3", value: "Bike" },
  { key: "5", value: "Rickshaw" },
];
const duration = [
  { key: "2", value: "Today" },
  { key: "3", value: "Last Week" },
  { key: "5", value: "Last 6 Month" },
];
function VehicleScreen() {
  const [selected, setSelected] = React.useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        <View style={styles.clusterDropdow}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="key"
            placeholder="Select by Category"
            dropdownStyles={styles.dropdownStyles}
            boxStyles={styles.boxStyles}
            inputStyles={{ color: colors.white }}
          />
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by number plate"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <AppText style={styles.heading}>Your Vehicles</AppText>
      <FlatList
        data={dummyVehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarCard item={item} />}
      />
      <AddButton
      // onPress={() => navigation.navigate("RiderEdit", { id: "new" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.light,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
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
  searchInput: {
    backgroundColor: colors.light,
    height: 40,
    borderColor: colors.medium,
    borderWidth: 3,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 16,
  },
});

export default VehicleScreen;
