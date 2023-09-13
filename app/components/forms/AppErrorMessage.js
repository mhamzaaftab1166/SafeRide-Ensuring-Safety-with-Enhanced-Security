import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";

function AppErrorMessage({ error, visible }) {
  return error && visible ? (
    <AppText style={styles.error}>{error}</AppText>
  ) : undefined;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default AppErrorMessage;
