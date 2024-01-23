import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/hamza.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.username}>M Hamza Aftab</Text>
        </View>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label="Request Ride"
          onPress={() => props.navigation.navigate("RequestRide")}
        />
        <DrawerItem
          label="History"
          onPress={() => props.navigation.navigate("History")}
        />
        <DrawerItem
          label="Log Out"
          onPress={() => props.navigation.navigate("LogOut")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: colors.white,
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: windowHeight * 0.1,
    backgroundColor: colors.primary,
    height: "50%", // Adjust the paddingTop as needed
    top: -5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: colors.white,
  },
  drawerItemContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: windowHeight * 0.04,
    backgroundColor: colors.white, // Adjust the paddingTop as needed
  },
});
