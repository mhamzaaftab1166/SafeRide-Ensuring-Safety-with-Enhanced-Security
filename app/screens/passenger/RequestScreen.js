import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import MapComponent from "../../components/MapComponent";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const RequestScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
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
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={() => navigation.goBack()}
        >
          <Avatar
            rounded
            avatarStyle={styles.avatar}
            size={30}
            source={require("../../assets/blankProfilePic.jpg")}
          />
          <AppText style={styles.usernameText}>M HAMZA AFTAB</AppText>
        </TouchableOpacity>
        <View style={styles.fromWhereContainer}>
          <View>
            <Image
              style={styles.transitImage}
              source={require("../../assets/transit.png")}
            />
          </View>
          <View style={styles.fromWhereContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DestinationScreen")}
            >
              <View style={styles.fromWhereHeader}>
                <AppText style={styles.fromWhereHeaderText}>
                  From where ?
                </AppText>
              </View>
            </TouchableOpacity>
            <View style={styles.dotsContainer}>
              <TouchableOpacity>
                <View style={styles.dotsContent}>
                  <AppText style={styles.dotsText}>---</AppText>
                </View>
              </TouchableOpacity>
              <View style={styles.plusIcon}>
                <Icon
                  type="material-community"
                  name="plus-thick"
                  color={colors.black}
                  size={25}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <MapComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    height: SCREEN_HEIGHT * 0.21,
    alignItems: "center",
    zIndex: 5,
    backgroundColor: colors.white,
  },
  backButton: {
    position: "absolute",
    top: 3,
    left: 10,
    zIndex: 10,
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
  fromWhereContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10, // Adjust the marginLeft to position the "From where" container
  },
  transitImage: {
    height: 70,
    width: 30,
    marginRight: 10,
    marginTop: 10,
  },
  fromWhereContent: {
    flexDirection: "column",
  },
  fromWhereHeader: {
    backgroundColor: colors.light,
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
    paddingLeft: 0,
  },
  fromWhereHeaderText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.dark,
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotsContent: {
    backgroundColor: colors.light,
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
  },
  dotsText: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  plusIcon: {
    marginLeft: 10,
  },
});

export default RequestScreen;
