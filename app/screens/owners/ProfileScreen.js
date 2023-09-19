import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserProfileScreen from "../../components/UserProfileScreen";

const ProfileScreen = () => {
  const user = {
    name: "Muhammad Hamza Aftab",
    email: "mhamzaaftab1166@gmail.com",
    role: "Admin",
    joinDate: "Joined Jan 2022",
  };

  return <UserProfileScreen user={user} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({});
