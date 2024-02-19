import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import ListItem from "../../components/ListItem";
import ListItemSeprator from "../../components/ListItemSeprator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import AddButton from "../../components/AddButton";
import colors from "../../config/colors";

const ridersData = [
  // ... (other riders)
  {
    id: 10,
    name: "Asadullah",
    email: "abc@gmail.com",
    phoneNumber: "123-456-7890", // Add phone number
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 12,
    name: "Asadullah",
    email: "mhamzaaftab@gmail.com",
    phoneNumber: "123-456-7890", // Add phone number
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 18,
    name: "Asadullah",
    email: "mhamzaaftab@gmail.com",
    phoneNumber: "123-456-7890", // Add phone number
    profilePic: require("../../assets/hamza.jpeg"),
  },
];

const RiderScreen = ({ navigation }) => {
  const [riders, setRiders] = useState(ridersData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (rider) => {
    setRiders(riders.filter((r) => r.id !== rider.id));
  };
  if (!riders)
    return (
      <View>
        <Text style={{ textAlign: "center" }}>Sorry! No data available.</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={riders}
        keyExtractor={(rider) => rider.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <ListItem
              title={item.name}
              subTitle={item.email}
              phoneNumber={item.phoneNumber} // Pass phone number to ListItem
              onPress={() => navigation.navigate("RiderEdit", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          </View>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          // Simulate a network request
          setTimeout(() => {
            setRiders([
              {
                id: 3,
                name: "Babar",
                email: "abc@gmail.com",
                phoneNumber: "123-456-7890",
                profilePic: require("../../assets/hamza.jpeg"),
              },
            ]);
            setRefreshing(false);
          }, 1000);
        }}
        ItemSeparatorComponent={ListItemSeprator}
      />
      <AddButton
        onPress={() =>
          navigation.navigate("RiderEdit", { id: "new", phoneNumber: "" })
        } // Pass empty phone number
      />
    </View>
  );
};

export default RiderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  listItemContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
