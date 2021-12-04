// IMPORTS OF REACT
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

// IMPORTS FOR EXPO
import { StatusBar } from "expo-status-bar";

// GLOBAL STYLES IMPORT
import { colors, height } from "../styles/stylesGlobal";

// COMPONENTS
import NavTop from "../components/NavTop";
import ItemList from "../components/ItemList";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor={colors.primary} style="light" />
        <NavTop />
        <ItemList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
