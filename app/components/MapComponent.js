import { Text, StyleSheet, View, StatusBar, Image } from "react-native";
import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
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
        >
          {this.props.userOrigin.latitude && (
            <Marker
              coordinate={this.props.userOrigin}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                resizeMode="cover"
                style={{ width: 20, height: 20, borderRadius: 10 }}
                source={require("../assets/location.png")}
              />
            </Marker>
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
