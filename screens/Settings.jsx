// REACT NATIVE
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// GLOBAL STYLES
import { colors } from "../styles/GlobalStyles";
// ICONS
import { Ionicons } from "@expo/vector-icons";

// SETTINGS SCREEN
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Text>THIS IS THE SETTINGS SCREEN</Text>
          <Text>IT IS UNDER DEVELOPEMENT PERIOD</Text>
          <Ionicons name="construct-sharp" size={300} color="gold" />
        </View>
      </SafeAreaView>
    </View>
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
