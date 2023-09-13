import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";

function MetricButton({ label, value, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.metric, style]} onPress={onPress}>
      <AppText style={styles.metricValue}>{value}</AppText>
      <AppText style={styles.metricLabel}>{label}</AppText>
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
    backgroundColor: colors.primary,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  metricLabel: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    color: colors.white,
  },
  metricPressed: {
    backgroundColor: colors.primary,
  },
});
export default MetricButton;
