import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppForm from "..//../components/forms/AppForm";
import AppFormField from "..//../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import SafeScreen from "../../components/SafeScreen";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().max(40).label("Name"),
  contact: Yup.string().required().min(11).label("Phone no"),
});

const RidersEditScreen = () => {
  return (
    <SafeScreen>
      <Image style={styles.logo} source={require("../../assets/icon.png")} />
      <AppForm
        initialValues={{ email: "", name: "", contact: "" }}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"email"}
          autoCapitalize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType="email-address"
          placeholder="Rider Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name={"name"}
          autoCapitalize="none"
          autoCorrect={false}
          icon={"account-box"}
          placeholder="Rider Name"
          textContentType="name"
        />
        <AppFormField
          keyboardType={"numeric"}
          maxLength={11}
          name={"contact"}
          icon={"file-phone"}
          placeholder={"Phone no"}
        />
        <SubmitButton title={"Login"} />
      </AppForm>
    </SafeScreen>
  );
};

export default RidersEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
});
