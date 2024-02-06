import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import UserProfileScreen from "../../components/UserProfileScreen";
import { AuthContext } from "../../contexts/contexts";

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);

  const userData = {
    name: user.name,
    email: user.email,
    role: user.role,
    joinDate: "Joined Jan 2022",
  };

  return <UserProfileScreen user={userData} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({});
