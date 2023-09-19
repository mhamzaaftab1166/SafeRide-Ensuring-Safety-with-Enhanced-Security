// UserProfileScreen.js
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Icon from "../components/Icon";

function UserProfileScreen({ user, onEditProfile }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/hamza.jpeg")}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.name}>{user.name}</AppText>
        <AppText style={styles.email}>{user.email}</AppText>
        <View style={styles.additionalInfo}>
          <MaterialCommunityIcons
            name="account-circle"
            size={18}
            color={colors.secondary}
            style={styles.icon}
          />
          <AppText style={[styles.infoValue, { color: colors.secondary }]}>
            {user.role}
          </AppText>
        </View>
        <View style={styles.additionalInfo}>
          <MaterialCommunityIcons
            name="calendar"
            size={18}
            color={colors.medium}
            style={styles.icon}
          />
          <AppText style={styles.infoValue}>{user.joinDate}</AppText>
        </View>
        <AppButton
          icon={
            <Icon
              backgroundColor={colors.primary}
              name="pencil"
              size={34}
              color={colors.white}
            />
          }
          style={{ width: 190, height: 55 }}
          title={"Edit Profile"}
          onPress={onEditProfile}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileImage: {
    width: "100%",
    height: "40%",
    resizeMode: "cover",
  },
  textContainer: {
    backgroundColor: colors.light,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  email: {
    fontSize: 16,
    color: colors.medium,
    marginBottom: 20,
  },
  additionalInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },
  infoValue: {
    fontSize: 16,
    color: colors.medium,
  },
});

export default UserProfileScreen;
