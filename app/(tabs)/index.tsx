import Splash from "@/src/screens/auth/Splash/index";
import SignUp from "@/src/screens/auth/SignUp/signup";
import { Image, StyleSheet, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignIn from "@/src/screens/auth/SignIn/signIn";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <SignIn />
    </SafeAreaView>
  );
}
