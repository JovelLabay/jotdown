// IMPORTS FOR REACT
import React from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// IMPORTS FOR EXPO
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// IMPORTS FOR COMPONENTS
import HomeScreen from "../screens/Home";
import CategoryScreen from "../screens/Category";
import SettingScreen from "../screens/Setting";
import Form from "../components/Form";

// IMPORTS FOR GLOBAL STYLES
import { colors, height } from "../styles/stylesGlobal";

// HOME SCREEN
function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// CATEGORY SCREEN
function Category() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <CategoryScreen />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// SETTING SCREEN
function Setting() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <SettingScreen />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function NavBottom() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={colors.secondary}
      inactiveColor={colors.unActiveColor}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: colors.teriary }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
