// REACT NATIVE
import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// ICONS
import { Entypo, Ionicons } from "@expo/vector-icons";

// COMPONENTS
import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";
import SettingsScreen from "../screens/Settings";

// GLOBAL STYLES
import { colors } from "../styles/GlobalStyles";

// JSON NOTES
import NotesList from "../components/NoteList";
import startUpNotes from "../startUpNotes.json";

// SCREENS
function Home() {
  return <HomeScreen />;
}
function About() {
  return <AboutScreen />;
}
function Settings() {
  return <SettingsScreen />;
}

const Tab = createMaterialBottomTabNavigator();

// NAB BOTTON TABS
export default function NavBotton() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.primary}
      inactiveColor={colors.headerFonts}
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: colors.background }}
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />
          ),
          tabBarBadge: startUpNotes.length,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
