import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

function SuccessFailureRate({ successRate, failureRate, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.bar}>
        <View
          style={[styles.successBar, { width: `${successRate}%`, left: 0 }]}
        ></View>
        <View
          style={[styles.failureBar, { width: `${failureRate}%`, right: 0 }]}
        ></View>
      </View>
      <View style={styles.labelsContainer}>
        <Text style={styles.successLabel}>{successRate}% Success</Text>
        <Text style={styles.dangerLabel}>{failureRate}% Failure</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  bar: {
    width: "100%",
    height: 20,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    overflow: "hidden",
  },
  successBar: {
    height: "100%",
    backgroundColor: colors.secondary,
    position: "absolute",
  },
  failureBar: {
    height: "100%",
    backgroundColor: colors.danger,
    position: "absolute",
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  successLabel: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  dangerLabel: {
    color: colors.danger,
    fontWeight: "bold",
  },
});

export default SuccessFailureRate;
