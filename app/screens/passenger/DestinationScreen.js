import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useContext, useRef } from "react";
import colors from "../../config/colors";
import { TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import AppText from "../../components/AppText";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { OriginContext } from "../../contexts/contexts";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const DestinationScreen = ({ navigation }) => {
  const { dispatchOrigin } = useContext(OriginContext);

  const textInputRef1 = useRef(4);
  const textInputRef2 = useRef(5);

  return (
    <>
      <View
        style={{
          height: "5%",
          alignItems: "center",
          zIndex: 5,
          backgroundColor: colors.white,
        }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="arrow-back"
            type="material"
            size={30}
            color={colors.medium}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarContainer}>
          <Avatar
            rounded
            avatarStyle={styles.avatar}
            size={30}
            source={require("../../assets/blankProfilePic.jpg")}
          />
          <AppText style={styles.usernameText}>M HAMZA AFTAB</AppText>
        </TouchableOpacity>
      </View>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        placeholder="Going to.."
        listViewDisplayed="auto"
        debounce={400}
        // currentLocation={true}
        ref={textInputRef1}
        minLength={2}
        enablePoweredByContainer={false}
        fetchDetails={true}
        autoFocus={true}
        styles={autoComplete}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        onError={(error) => console.log("Autocomplete Error:", error)}
        onPress={(data, details = null) => {
          dispatchOrigin({
            type: "ADD_ORIGIN",
            payload: {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              address: details.formatted_address,
              name: details.name,
            },
          });
          navigation.goBack();
        }}
      />
    </>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 10,
  },
  usernameText: {
    fontSize: 16,
    color: colors.medium,
  },
  backButton: {
    position: "absolute",
    top: 3,
    left: 10,
    zIndex: 10,
  },
  view1: {
    position: "absolute",
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 10,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    height: 30,
    zIndex: 10,
  },

  view2: { backgroundColor: colors.white, zIndex: 4, paddingBottom: 10 },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8,
  },
});

const autoComplete = {
  textInput: {
    backgroundColor: colors.light,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
    width: "90%",
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.white,
  },

  textInputContainer: {
    flexDirection: "row",
  },
};
