import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: [
          Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
          { display: "none" }, // This hides the tab bar completely
        ],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // This hides just this tab
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null, // This hides just this tab
        }}
      />
    </Tabs>
  );
}
