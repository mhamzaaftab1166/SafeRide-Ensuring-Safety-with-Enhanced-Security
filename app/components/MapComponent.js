import {
  Platform,
  PixelRatio,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from "react-native";
import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../config/mapStyle";
import colors from "../config/colors";

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._map = React.createRef();
    this.intervalId = null; // Initialize intervalId
  }

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

        this._map.current?.fitToCoordinates(
          [this.props.userOrigin, this.props.userDestination],
          {
            edgePadding: edgePadding,
            animated: true,
          }
        );
      }
    }, 500);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
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
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
