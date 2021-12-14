// REACT NATIVE
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Vibration,
  Platform,
  Pressable,
} from "react-native";

// GLOBAL STYLES
import { colors } from "../styles/GlobalStyles";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// ABOUT SCREEN

function Developers({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ textAlign: "center" }}>
            This screen does not contain any text. Go back to home screen...
          </Text>
          {/* <Pressable>
            <Text onPress={() => navigation.navigate("Developer1")}>
              Developer1
            </Text>
            <Text onPress={() => navigation.navigate("Developer2")}>
              Developer2
            </Text>
          </Pressable> */}
        </View>
      </SafeAreaView>
    </View>
  );
}

function Developer1({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Pressable>
            <Text onPress={() => navigation.navigate("About Developers")}>
              About Developers
            </Text>
            <Text onPress={() => navigation.navigate("Developer2")}>
              Developer2
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function Developer2({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Pressable>
            <Text onPress={() => navigation.navigate("Developer1")}>
              Developer1
            </Text>
            <Text onPress={() => navigation.navigate("About Developers")}>
              About Developers
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default function AboutScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About Developers" component={Developers} />
      {/* <Stack.Screen name="Developer1" component={Developer1} />
      <Stack.Screen name="Developer2" component={Developer2} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    justifyContent: "center",
    alignItems: "center",
  },
});
