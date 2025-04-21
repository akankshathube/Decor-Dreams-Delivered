import Splash from "@/src/screens/auth/Splash/index";
import SignUp from "@/src/screens/auth/SignUp/signup";
import { Image, StyleSheet, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <SignUp />
    </SafeAreaView>
  );
}
