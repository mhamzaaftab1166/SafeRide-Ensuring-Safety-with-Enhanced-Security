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
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5).max(50).required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  role: Yup.object().nullable().required().label("Role"),
  password: Yup.string().required().min(8).label("Password"),
});
const Registercreen = ({ navigation }) => {
  const [error, setError] = useState();
  const [errorVisible, setErrorVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (userInfo) => {
    try {
      setIsLoading(true); // Start showing activity indicator
      const { data } = await register({
        ...userInfo,
        role: userInfo.role.label,
      });
      if (data.success) {
        setError(null);
        setErrorVisible(false); // Clear any previous errors
        navigation.navigate("verification", { email: userInfo.email });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
        setErrorVisible(true);
      }
    } finally {
      setIsLoading(false); // Stop showing activity indicator
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ActivityIndicator visible={isLoading} />
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
