import React from "react";
import { View, StyleSheet } from "react-native";

import SafeScreen from "../../components/SafeScreen";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import MetricButton from "../../components/statistics/MetricButton";
import AppLineChart from "../../components/statistics/AppLineChart";
import SuccessFailureRate from "../../components/statistics/SuccessFailure";

function Dashboard({ navigation }) {
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
        <MetricButton
          label="Riders"
          value="8"
          onPress={() => navigation.navigate("Riders")}
        />
        <MetricButton
          label="Vehicles"
          value="8"
          onPress={() => navigation.navigate("Vehicles")}
        />
      </View>
      <View style={styles.metricContainer}>
        <MetricButton
          label="Assigned Rider"
          value={"10"}
          onPress={() => navigation.navigate("Success")}
        />
        <MetricButton
          label="Rides"
          value="1254"
          onPress={() => navigation.navigate("Rides")}
        />
      </View>
      <SuccessFailureRate
        style={{ marginVertical: 30 }}
        successRate={60}
        failureRate={40}
      />
      <AppText style={styles.chartTitle}>Rides Over Time</AppText>
      <AppLineChart chartData={chartData} />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
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
});

export default Dashboard;
