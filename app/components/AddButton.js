import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

function AddButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons
            name="plus-circle"
            size={40}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: windowWidth,
  },
  subContainer: {
    width: 150,
    height: 70,
    borderRadius: 40,
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddButton;
