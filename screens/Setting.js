// IMPORTS OF REACT
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

// GLOBAL STYLES IMPORT
import { colors, height } from "../styles/stylesGlobal";

// COMPONENTS
import NavTop from "../components/NavTop";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text>SETTINGS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
