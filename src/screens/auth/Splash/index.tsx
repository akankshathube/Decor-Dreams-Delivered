import Button from "@/src/components/Button";
import React, { useState } from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";

const Splash = () => {
  const [activeButton, setActiveButton] = useState("signUp");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assessts/splash_image.jpg")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Discover Everything You Need</Text>
      <Text style={styles.subtitle}>One place for all your requirements</Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setActiveButton("signUp")}
          buttonText="Sign Up"
          style={[
            styles.button,
            activeButton === "signUp"
              ? styles.activeButton
              : styles.inactiveButton,
          ]}
          textStyle={
            activeButton === "signUp" ? styles.activeText : styles.inactiveText
          }
        />
        <Button
          onPress={() => setActiveButton("signIn")}
          buttonText="Sign In"
          style={[
            styles.button,
            activeButton === "signIn"
              ? styles.activeButton
              : styles.inactiveButton,
          ]}
          textStyle={
            activeButton === "signIn" ? styles.activeText : styles.inactiveText
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.4,
    marginBottom: 30,
  },
  title: {
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    marginBottom: 15,
    borderRadius: 8,
    paddingVertical: 12,
  },
  activeButton: {
    backgroundColor: "#1a237e", // Dark blue
    borderWidth: 1,
    borderColor: "#1a237e",
  },
  inactiveButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1a237e",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#1a237e",
    fontWeight: "bold",
  },
});

export default Splash;
