import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import MapComponent from "../../components/MapComponent";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import { useNavigation } from "@react-navigation/native";
import { DestinationContext, OriginContext } from "../../contexts/contexts";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetSectionList,
} from "@gorhom/bottom-sheet";
import { rideData, vehicleData } from "../../config/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const RequestScreen = ({ navigation, route }) => {
  const { origin, dispatchOrigin } = useContext(OriginContext);
  const { destination, dispatchDestination } = useContext(DestinationContext);

  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const bottomsheet1 = useRef(1);
  const bottomsheet2 = useRef(2);
  const snapPoints1 = useMemo(() => ["5%", "60%"], []);
  const snapPoints2 = useMemo(() => ["5%", "50%"], []);
  const handleSheetChange1 = useCallback((index) => {}, []);

  useEffect(() => {
    setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [origin, destination]);

  const renderFlatListItems = useCallback(
    ({ item }) => (
      <View>
        <View style={styles.view10}>
          <View style={styles.view11}>
            <MaterialCommunityIcons
              name="clock-time-four"
              color={colors.white}
              size={18}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, color: colors.dark }}>
              {item.street}
            </Text>
            <Text style={{ color: colors.medium }}>{item.area}</Text>
          </View>
        </View>
      </View>
    ),
    []
  );
  const renderFlatListItems2 = useCallback(({ item }) => {
    // Assuming item contains information about cars including category
    const { title, subTitle, imageUrl, price } = item;

    return (
      <View style={styles.view10}>
        <Image source={imageUrl} style={styles.carImage} />
        <View
          style={{
            marginRight: 15,
            padding: 10,
          }}
        >
          <Text style={styles.text9}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            console.log("Selected Car Details:", item);
          }}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

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
        <TouchableOpacity style={styles.avatarContainer}>
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
              onPress={() => navigation.navigate("destination")}
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
                  <AppText style={styles.dotsText}>Destination</AppText>
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
      <MapComponent userOrigin={userOrigin} userDestination={userDestination} />
      {destination.longitude === null && (
        <BottomSheet
          ref={bottomsheet1}
          index={route.params.state}
          snapPoints={snapPoints1}
          onChange={handleSheetChange1}
        >
          <BottomSheetFlatList
            keyboardShouldPersistTaps="always"
            data={rideData}
            keyExtractor={(item) => item.id}
            renderItem={renderFlatListItems}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
              <View style={styles.view10}>
                <View style={styles.view11}>
                  <MaterialCommunityIcons
                    name="star"
                    color={colors.white}
                    size={20}
                  />
                </View>
                <View>
                  <Text style={styles.text9}>Past Places</Text>
                </View>
              </View>
            }
          />
        </BottomSheet>
      )}
      {destination.longitude !== null && (
        <BottomSheet
          ref={bottomsheet2}
          index={route.params.state}
          snapPoints={snapPoints2}
          onChange={handleSheetChange1}
        >
          <BottomSheetFlatList
            keyboardShouldPersistTaps="always"
            data={vehicleData}
            keyExtractor={(item) => item.title}
            renderItem={renderFlatListItems2}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={<View style={styles.view10}></View>}
          />
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  confirmButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  priceContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10, // Align to the right
  },
  carImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 15,
    color: colors.medium,
    marginRight: 5,
  },
  subTitleText: {
    color: colors.medium,
  },
  priceText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  view10: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  text9: { fontSize: 15, color: colors.grey1 },
  view11: {
    backgroundColor: colors.medium,
    height: 30,
    width: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },
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
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 17,
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
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 17,
  },
  plusIcon: {
    marginLeft: 10,
  },
});

export default RequestScreen;
