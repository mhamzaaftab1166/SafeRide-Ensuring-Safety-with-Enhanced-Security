import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { verification, resend } from "../services/userService";
import { AuthContext } from "../contexts/contexts";
import jwtDecode from "jwt-decode";
import authService from "../services/authService";

const EmailVerificationInput = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const authContext = useContext(AuthContext);

  const handleSendCode = async () => {
    try {
      await resend();
    } catch (error) {}
    // Simulate sending verification code to the email
    // You can replace this with your actual API call to send verification code
    console.log("Sending verification code...");
    setIsCodeSent(true);
  };

  const handleVerifyCode = async () => {
    const code = verificationCode.join(""); // Join the array elements
    console.log("Verifying code:", code);

    try {
      const response = await verification(code);
      const data = response.headers["x-auth-token"];
      const user = jwtDecode(data);
      authContext.setUser(user);
      authService.storeToken(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendCode = async () => {
    // Resend verification code to the email
    // You can replace this with your actual API call to resend verification code
    try {
      await resend();
    } catch (error) {}
    setIsCodeSent(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <View style={styles.inputContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder="-"
            value={verificationCode[index] || ""}
            onChangeText={(text) => {
              const newCode = [...verificationCode];
              newCode[index] = text;
              setVerificationCode(newCode);
            }}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.resendButton}
          onPress={handleResendCode}
        >
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
        <Button title="Verify Code" onPress={handleVerifyCode} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    textAlign: "center",
    width: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resendButton: {
    marginRight: 10,
  },
  resendText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default EmailVerificationInput;
