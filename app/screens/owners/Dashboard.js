import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import SafeScreen from "../../components/SafeScreen";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import MetricButton from "../../components/MetricButton";

function Dashboard(props) {
  const [isPressed, setIsPressed] = useState([false, false, false]);

  const handlePress = (index) => {
    const updatedPressedStates = [...isPressed];
    updatedPressedStates[index] = !updatedPressedStates[index]; // Toggle the state
    setIsPressed(updatedPressedStates);
  };

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
          label="Clusters"
          value="2"
          isPressed={isPressed[0]}
          onPress={() => handlePress(0)}
        />
        <MetricButton
          label="Rides"
          value="1250"
          isPressed={isPressed[1]}
          onPress={() => handlePress(1)}
        />
        <MetricButton
          label="Success"
          value="88%"
          isPressed={isPressed[2]}
          onPress={() => handlePress(2)}
        />
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
          color: colors.primary_op,
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
