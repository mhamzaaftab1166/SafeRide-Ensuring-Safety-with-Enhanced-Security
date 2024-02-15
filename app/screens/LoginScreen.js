import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppErrorMessage from "../components/forms/AppErrorMessage";
import authService from "../services/authService";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../contexts/contexts";
import ActivityIndicator from "../components/ActivityIndicator";
import { TouchableOpacity } from "react-native";
import colors from "../config/colors";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const [error, setError] = useState();
  const [errorVisible, setErrorVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const { data } = await authService.login(email, password);
      const user = jwtDecode(data);
      authContext.setUser(user);
      authService.storeToken(data);
      setErrorVisible(false);
    } catch (error) {
      if (error.response && error.response.status === 400)
        setError(error.response.data);
      setErrorVisible(true);
    } finally {
      setIsLoading(false); // Stop showing activity indicator
    }
  };

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/hamza.jpeg")} />
        <View style={{ marginTop: "00%" }}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppErrorMessage error={error} visible={errorVisible} />
            <AppFormField
              name={"email"}
              autoCapitalize="none"
              autoCorrect={false}
              icon={"email"}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              name={"password"}
              autoCapitalize="none"
              autoCorrect={false}
              icon={"lock"}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title={"Login"} />
          </AppForm>
          <TouchableOpacity onPress={() => navigation.navigate("forgot")}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

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
  forgotPasswordText: {
    color: colors.medium,
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
