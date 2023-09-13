import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "uppercase",
  },
});

export default AppButton;
