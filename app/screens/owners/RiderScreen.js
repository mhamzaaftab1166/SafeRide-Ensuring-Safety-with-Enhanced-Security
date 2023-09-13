import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";
import ListItemSeprator from "../../components/ListItemSeprator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import AddButton from "../../components/AddButton";

const ridersData = [
  {
    id: 1,
    name: "Ali Ahmad",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 2,
    name: "Hamza aftab",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 3,
    name: "Babar",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 4,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 5,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 6,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 7,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 8,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 9,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
  {
    id: 10,
    name: "Asadullah",
    email: "abc@gmail.com",
    profilePic: require("../../assets/hamza.jpeg"),
  },
];

const RiderScreen = ({ navigation }) => {
  const [riders, setRiders] = useState(ridersData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (rider) => {
    setRiders(riders.filter((r) => r.id !== rider.id));
  };

  return (
    <>
      <FlatList
        data={riders}
        keyExtractor={(rider) => rider.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.email}
            image={item.profilePic}
            onPress={() => navigation.navigate("RiderEdit", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          ></ListItem>
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setRiders([
            {
              id: 3,
              name: "Babar",
              email: "abc@gmail.com",
              profilePic: require("../../assets/hamza.jpeg"),
            },
          ])
        }
        ItemSeparatorComponent={ListItemSeprator}
      />
      <AddButton
        onPress={() => navigation.navigate("RiderEdit", { id: "new" })}
      />
    </>
  );
};

export default RiderScreen;

const styles = StyleSheet.create({});
