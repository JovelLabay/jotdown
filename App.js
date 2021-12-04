// IMPORTS OF REACT
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// IMPORTS FOR EXPO
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// COMPONENTS AND SCREENS
import NavBottom from "./components/NavBottom";

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
      </NavigationContainer>
    );
  }
}
