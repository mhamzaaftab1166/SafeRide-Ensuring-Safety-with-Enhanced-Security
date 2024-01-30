import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppErrorMessage from "../components/forms/AppErrorMessage";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState();
  // const { login } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    // const result = await authApi.login(email, password);
    // if (!result.ok) return setLoginFailed(true);
    // setLoginFailed(false);
    // login(result.data);
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/hamza.jpeg")} />
      <View style={{ marginTop: "00%" }}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppErrorMessage
            error="Invalid email or password."
            visible={loginFailed}
          />
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
      </View>
    </View>
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
});
export default LoginScreen;
