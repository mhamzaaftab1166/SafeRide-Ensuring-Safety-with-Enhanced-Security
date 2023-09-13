import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";
import ListItemSeprator from "../../components/ListItemSeprator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

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
];

const RiderScreen = () => {
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
            onPress={() => console.log("rider tap", item)}
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
    </>
  );
};

export default RiderScreen;

const styles = StyleSheet.create({});
