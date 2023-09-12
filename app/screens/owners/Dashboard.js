import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import SafeScreen from "../../components/SafeScreen";
import colors from "../../config/colors";
import AppText from "../../components/AppText";

function Dashboard(props) {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 110, 43],
        color: () => colors.primary,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <SafeScreen style={styles.container}>
      <AppText style={styles.heading}>Owner Dashboard</AppText>
      <View style={styles.metricContainer}>
        <View style={styles.metric}>
          <AppText style={styles.metricValue}>2</AppText>
          <Text style={styles.metricLabel}>Clusters</Text>
        </View>
        <View style={styles.metric}>
          <AppText style={styles.metricValue}>1200</AppText>
          <AppText style={styles.metricLabel}>Rides</AppText>
        </View>
        <View style={styles.metric}>
          <AppText style={styles.metricValue}>89%</AppText>
          <AppText style={styles.metricLabel}>Success</AppText>
        </View>
      </View>
      <AppText style={styles.chartTitle}>Rides Over Time</AppText>
      <LineChart
        data={chartData}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
          backgroundColor: colors.white,
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(252, 92, 101, ${opacity})`,
          labelColor: () => colors.black,
        }}
        bezier
        style={styles.chart}
      />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  metricContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
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
  chartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default Dashboard;
