// REACT NATIVE
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

// EXPO
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// COMPONENTS
import NavBottom from "./components/NavBottom";

// EXPORT DEFAULT MAIN APP
export default function App() {
  // FOR THE CUSTOM FONT
  let [fontsLoaded] = useFonts({
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    UbuntuLight: require("./assets/fonts/Ubuntu-Light.ttf"),
    UbuntuMedium: require("./assets/fonts/Ubuntu-Medium.ttf"),
    UbuntuRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  // CONDITION IF NOT LOADED TO RETURN THE DEFAULT FONT
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <NavBottom />
        {/* {alert("PLS NOTE THAT IS APP IS ON DEVELOPMET PERIOD.")} */}
      </NavigationContainer>
    );
  }
}
