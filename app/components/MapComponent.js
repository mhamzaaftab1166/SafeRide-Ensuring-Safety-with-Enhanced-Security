import { Text, StyleSheet, View, StatusBar } from "react-native";
import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../config/mapStyle";
import colors from "../config/colors";

export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={colors.black} />
        <MapView
          style={{ borderRadius: 20, height: "100%", width: "100%" }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        ></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
