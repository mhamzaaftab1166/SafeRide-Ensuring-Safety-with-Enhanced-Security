import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import colors from "../../config/colors";
import AppText from "../../components/AppText";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <MaterialCommunityIcons name="menu" color={colors.white} size={40} />
        </View>
        <ScrollView bounces={false}>
          <View style={styles.home}>
            <AppText style={styles.text1}>Destress your commute</AppText>
            <View style={styles.view1}>
              <View style={styles.view8}>
                <AppText style={styles.text2}>
                  Read a book.Take a nap. Stare out the window
                </AppText>
                <View style={[styles.button1, { marginVertical: 15 }]}>
                  <AppText style={styles.button1Text}>Start Ride</AppText>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar
        backgroundColor={colors.primary_dark}
        barStyle="light-content"
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.dark,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button1Text: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.white,
    paddingBottom: 30,
    paddingTop: defaultStyles.parameters.statusBarHeight,
  },
  header: {
    backgroundColor: defaultStyles.colors.primary,
    height: defaultStyles.parameters.headerHeight,
    alignItems: "flex-start",
  },
  home: {
    paddingLeft: 20,
    flex: 1,
  },
  icon1: { marginLeft: 10, marginTop: 5 },
  imageContainer: {},
  text1: {
    color: colors.white,
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
  },
  text2: {
    color: colors.white,
    fontSize: 16,
    flexWrap: "wrap",
  },
  view1: {
    flex: 1,
    paddingTop: 30,
    alignItems: "flex-start",
  },
  view8: { flex: 4 },
});

export default HomeScreen;
