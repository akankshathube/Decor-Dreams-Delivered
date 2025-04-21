import Splash from "@/src/screens/auth/Splash/index";
import { Image, StyleSheet, Platform, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Splash />
    </View>
  );
}
