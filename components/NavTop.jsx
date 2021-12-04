// IMPORTS FOR REACT
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Modal,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

// IMPORTS FOR ICONS
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// THIRD-PARTY UI LIBRARY
import TouchableSwipe from "react-native-touchable-swipe";

// GLOBAL STYLES
import { colors, height } from "../styles/stylesGlobal";
import DetailsAbout from "./DetailsAbout";

export default function NavTop() {
  // MODAL USE STATE
  const [modalVisible, setModalVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textLogo}>Jotdown</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          onPress={() => setSearchVisible(true)}
          name="ios-search-circle-sharp"
          size={30}
          color="#6F6FC8"
        />
        <Ionicons
          onPress={() => setModalVisible(true)}
          name="information-circle"
          size={30}
          color="#6F6FC8"
        />
      </View>

      {/* ABOUT MODAL */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableSwipe
            onSwipeDown={() => setModalVisible(!modalVisible)}
            onPress={() => alert("Swipe Down to Dismiss.")}
          >
            <View style={styles.aboutClose}>
              <FontAwesome5 name="minus" size={30} color="#6F6FC8" />
            </View>
          </TouchableSwipe>
          <DetailsAbout />
        </View>
      </Modal>

      {/* SEARCH MODAL */}
      <Modal animationType="slide" transparent={true} visible={searchVisible}>
        <View style={styles.modalContainer}>
          <TouchableSwipe
            onSwipeDown={() => setSearchVisible(!searchVisible)}
            onPress={() => alert("Swipe Down to Dismiss.")}
          >
            <View style={styles.aboutClose}>
              <FontAwesome5 name="minus" size={30} color="#6F6FC8" />
            </View>
          </TouchableSwipe>
          <Text style={styles.searchTitle}>
            Search your Task and Notes here!
          </Text>
          <View style={styles.searchContainer}>
            <TextInput placeholder="Search here..." style={styles.searchBar} />
            <Button title="Search" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// STYLES FOR NAVTOP
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "#1F1D2C",
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  textLogo: {
    fontFamily: "UbuntuBold",
    fontSize: 36,
    color: "#6F6FC8",
  },
  modalContainer: {
    backgroundColor: colors.aboutColor,
    flex: 1,
    marginTop: Platform.OS === "android" ? 45 : 65,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  aboutClose: {
    alignItems: "center",
    marginVertical: 10,
  },
  // SEARCHBAR
  searchTitle: {
    textAlign: "left",
    fontFamily: "UbuntuMedium",
    fontSize: 22,
    color: colors.activeColor,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: colors.unActiveColor,
    height: 45,
    width: 300,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 50,
    paddingLeft: 10,
    color: colors.activeColor,
  },
});
