import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function MetricButton({ label, value, isPressed, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.metric, isPressed && styles.metricPressed]}
      onPress={onPress}
    >
      <AppText
        style={[styles.metricValue, isPressed && { color: colors.white }]}
      >
        {value}
      </AppText>
      <AppText
        style={[styles.metricLabel, isPressed && { color: colors.white }]}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  metric: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
    width: 120,
    height: 100,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  metricLabel: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
  metricPressed: {
    backgroundColor: colors.primary,
  },
});
export default MetricButton;
