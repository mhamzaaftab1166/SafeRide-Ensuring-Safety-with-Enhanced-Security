import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../../config/colors";
import ListItem from "../../components/ListItem";
import Icon from "../../components/Icon";
import ListItemSeprator from "../../components/ListItemSeprator";
import { AuthContext } from "../../contexts/contexts";

const menuItems = [
  {
    title: "Rider Status",
    icon: {
      name: "check-circle",
      backgroundColor: colors.primary,
    },
    targetScreen: "Status",
  },
  {
    title: "Reports",
    icon: {
      name: "comment-alert-outline",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <GestureHandlerRootView>
      <View style={styles.screen}>
        <View style={[styles.container, { marginVertical: 0 }]}>
          <ListItem
            onPress={() => navigation.navigate("Profile")}
            title={user.name}
            subTitle={user.email}
            image={require("../../assets/hamza.jpeg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  ></Icon>
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              ></ListItem>
            )}
            ItemSeparatorComponent={ListItemSeprator}
          ></FlatList>
        </View>
        <ListItem
          // onPress={}
          title={"Log Out"}
          IconComponent={
            <Icon name="logout" backgroundColor={colors.warning}></Icon>
          }
        ></ListItem>
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    height: "100%",
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
