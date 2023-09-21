import { Image, StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

import AppForm from "..//../components/forms/AppForm";
import AppFormPicker from "../../components/forms/AppFormPicker";
import AppFormField from "..//../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import SafeScreen from "../../components/SafeScreen";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().max(40).label("Name"),
  category: Yup.object().nullable().required().label("Category"),
  contact: Yup.string().required().min(11).label("Phone no"),
});

const RidersEditScreen = ({ route }) => {
  const values = {
    email: route.params.id !== "new" ? route.params.email : "",
    name: route.params.id !== "new" ? route.params.name : "",
    category: null,
    contact: "",
  };
  return (
    <SafeScreen>
      <Image style={styles.logo} source={require("../../assets/icon.png")} />
      <AppForm
        initialValues={values}
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
        <AppFormPicker
          items={[
            { label: "Car", value: 1 },
            { label: "Bike", value: 2 },
            { label: "Rickshaw", value: 3 },
          ]}
          name={"category"}
          placeholder={"Category"}
          width={"50%"}
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
