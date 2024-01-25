import React, { Component } from "react";
import {
  Platform,
  PixelRatio,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirection from "react-native-maps-directions";
import { mapStyle } from "../config/mapStyle";
import colors from "../config/colors";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { getDistance } from "geolib";
import AppText from "./AppText";
export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
    };
    this._map = React.createRef();
    this.intervalId = null;
  }
  DistanceMarker = ({ distance }) => {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="map-marker-distance"
          color={colors.black}
          size={24}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{`Distance: ${distance} km`}</Text>
        </View>
      </View>
    );
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.props.userDestination.latitude !== null) {
        const iosEdgePadding = { top: 100, right: 50, bottom: 300, left: 50 };
        const androidEdgePadding = {
          top: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.top),
          right: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.right),
          bottom: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.bottom),
          left: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.left),
        };
        const edgePadding =
          Platform.OS === "android" ? androidEdgePadding : iosEdgePadding;
        const distance = getDistance(
          {
            latitude: this.props.userOrigin.latitude,
            longitude: this.props.userOrigin.longitude,
          },
          {
            latitude: this.props.userDestination.latitude,
            longitude: this.props.userDestination.longitude,
          }
        );

        this.setState({ distance });
        this._map.current?.fitToCoordinates(
          [this.props.userOrigin, this.props.userDestination],
          {
            edgePadding: edgePadding,
            animated: true,
          }
        );
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={colors.black} />
        <MapView
          style={{ borderRadius: 20, height: "100%", width: "100%" }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          ref={this._map}
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
          {this.props.userDestination.latitude && (
            <Marker
              coordinate={this.props.userDestination}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                resizeMode="cover"
                style={{ width: 16, height: 16 }}
                source={require("../assets/location.png")}
              />
            </Marker>
          )}
          {this.props.userDestination.latitude !== null && (
            <MapViewDirection
              origin={this.props.userOrigin}
              destination={this.props.userDestination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor={colors.black}
            />
          )}
          {this.state.distance !== null && (
            <Marker
              coordinate={{
                latitude:
                  (this.props.userOrigin.latitude +
                    this.props.userDestination.latitude) /
                  2,
                longitude:
                  (this.props.userOrigin.longitude +
                    this.props.userDestination.longitude) /
                  2,
              }}
              anchor={{ x: 0.5, y: 0.5 }}
              title={`Distance: ${this.state.distance} meters`}
            >
              <View
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: colors.white,
                  borderRadius: 50,
                }}
              >
                <AppText>{`Distance: ${
                  this.state.distance / 1000
                } km`}</AppText>
              </View>
            </Marker>
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5,
    elevation: 3, // Android shadow
    shadowColor: colors.black, // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textContainer: {
    marginLeft: 5,
  },
  text: {
    color: colors.black,
  },
});
