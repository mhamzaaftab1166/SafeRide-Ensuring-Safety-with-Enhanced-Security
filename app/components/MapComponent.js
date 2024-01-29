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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
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
          <AppText>{`Distance: ${distance} km`}</AppText>
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
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.black} />
        <MapView
          style={{ borderRadius: 20, flex: 1 }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          ref={this._map}
          // showsUserLocation={true}
          // followsUserLocation={true}
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
          {this.props.pickupLocation && (
            <Marker
              coordinate={this.props.pickupLocation}
              anchor={{ x: 0.5, y: 0.5 }}
              title="Pickup Location"
            ></Marker>
          )}
          {this.props.driverLocation && (
            <Marker
              style={{ zIndex: 100 }}
              coordinate={this.props.driverLocation}
              anchor={{ x: 0.5, y: 0.5 }}
              title="Driver Location"
            >
              <Image
                resizeMode="center"
                style={{
                  width: 25,
                  height: 25,

                  zIndex: 10,
                  transform: [
                    { rotate: `${this.props.userOrigin.heading}deg` || 0 },
                  ],
                }}
                source={require("../assets/carMarker.png")}
              ></Image>
            </Marker>
          )}
        </MapView>
        {this.state.distance !== null && (
          <this.DistanceMarker distance={this.state.distance / 1000} />
        )}
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
});
