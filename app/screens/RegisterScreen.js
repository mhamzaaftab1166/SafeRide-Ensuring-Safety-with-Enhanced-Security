import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppErrorMessage from "../components/forms/AppErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppFormPicker from "../components/forms/AppFormPicker";
import { register } from "../services/userService";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5).max(50).required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  role: Yup.object().nullable().required().label("Role"),
  password: Yup.string().required().min(8).label("Password"),
});
const Registercreen = () => {
  const [error, setError] = useState();
  const [errorVisible, setErrorVisible] = useState(false);

  const handleSubmit = async (userInfo) => {
    try {
      await register({ ...userInfo, role: userInfo.role.label });
      setErrorVisible(false);
    } catch (error) {
      if (error.response && error.response.status === 400)
        setError(error.response.data);
      setErrorVisible(true);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/hamza.jpeg")} />
        <AppForm
          initialValues={{ name: "", email: "", role: null, password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppErrorMessage error={error} visible={errorVisible} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormPicker
            items={[
              { label: "admin", value: 1 },
              { label: "passenger", value: 2 },
              { label: "rider", value: 3 },
              { label: "parent", value: 4 },
            ]}
            name={"role"}
            placeholder={"Role"}
            width={"50%"}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registercreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: "50%",
    marginBottom: 20,
    alignSelf: "center",
  },
});
