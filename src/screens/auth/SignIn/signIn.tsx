import Header from "@/src/components/authHeader";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Checkbox, Text, useTheme } from "react-native-paper";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const theme = useTheme(); // Get theme colors from react-native-paper

  return (
    <View style={styles.mainContainer}>
      <Header title="Sign In" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <Input label="E-mail" placeholder="Enter your E-mail" />
          <Input
            label="Password"
            placeholder="Enter your Password"
            secureTextEntry={!showPassword}
            rightIcon={{
              name: showPassword ? "visibility-off" : "visibility",
              onPress: () => setShowPassword(!showPassword),
              color: "#808080",
              size: 20,
            }}
          />

          <Button
            style={styles.button}
            buttonText="Sign In"
            onPress={() => console.log("Pressed")}
          ></Button>
          <TouchableOpacity
            style={styles.signInContainer}
            onPress={() => console.log("Navigate to Sign Up")}
          >
            <Text style={styles.signInText}>
              Don't have an account?{" "}
              <Text style={styles.signInLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    justifyContent: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  termsContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f9f9f9",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  agreeText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
  },
  termsLinkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: 32, // Align with checkbox text
  },
  termsLink: {
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  andText: {
    fontSize: 14,
    color: "#333",
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: "#1a237e", // Dark blue
    borderWidth: 1,
    borderColor: "#1a237e",
    marginTop: 15,
  },
  signInContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  signInText: {
    fontSize: 14,
    color: "#333",
  },
  signInLink: {
    color: "#1a237e",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default SignIn;
