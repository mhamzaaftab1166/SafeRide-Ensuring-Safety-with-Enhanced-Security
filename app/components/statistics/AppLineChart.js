import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import colors from "../../config/colors";

function AppLineChart({ chartData }) {
  return (
    <LineChart
      data={chartData}
      width={Dimensions.get("window").width - 20}
      height={220}
      chartConfig={{
        backgroundColor: colors.white,
        backgroundGradientFrom: colors.white,
        backgroundGradientTo: colors.white,
        decimalPlaces: 0,
        color: colors.primary_op,
        labelColor: () => colors.black,
      }}
      bezier
      style={styles.chart}
    />
  );
}
const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
export default AppLineChart;
