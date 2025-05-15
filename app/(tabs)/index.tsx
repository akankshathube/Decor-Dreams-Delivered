import Splash from "@/src/screens/auth/Splash/index";
import SignUp from "@/src/screens/auth/SignUp/signup";
import SignIn from "@/src/screens/auth/SignIn/signIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "@/src/screens/app/Settings/settings";
import Home from "@/src/screens/app/Home/home";
import Profile from "@/src/screens/app/Profile/profile";
import Favorites from "@/src/screens/app/Favorites/favorites";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import ProductDetail from "@/src/screens/app/ProductDetails/productDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = {
          Home: "home",
          Favorites: "bookmark",
          Profile: "person",
        }[route.name];

        return (
          <View
            key={route.key}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={iconName}
              size={24}
              color={isFocused ? "#1a237e" : "gray"}
              onPress={onPress}
            />
            <Text
              style={{
                color: isFocused ? "#1a237e" : "gray",
                fontSize: 12,
                marginTop: 4,
              }}
            >
              {route.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTitleAlign: "center",
          headerTintColor: "#000000",
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
