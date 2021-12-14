// REACT NATIVE
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// ICONS
import { Ionicons, AntDesign, Fontisto } from "@expo/vector-icons";

// COLORS
import { colors } from "../styles/GlobalStyles";

// THIRD-PARTY
import TouchableSwipe from "react-native-touchable-swipe";
import { Avatar } from "react-native-paper";

import app from "../app.json";

export default function SearchCom({ setModalAbout }) {
  return (
    <View style={styles.modal}>
      <TouchableSwipe onSwipeDown={() => setModalAbout()}>
        <Fontisto
          style={{ textAlign: "center" }}
          name="minus-a"
          size={40}
          color={colors.mainBackground}
        />
      </TouchableSwipe>
      {/* <View style={styles.titleLogo}>
        <Avatar.Text style={styles.logo} label="JD" size={100} />
        <Text style={styles.title}>Jotdown</Text>
      </View> */}
      <View style={styles.aboutContent}>
        <ScrollView>
          <View style={styles.App}>
            <Text style={styles.abouTitle}>About the App</Text>
            <View>
              <Text style={styles.description}>
                Jotdown is an app designed for note taking and organizing. It
                gives you a quick and simple notepad editing experience when you
                write notes, memo, email, message, shopping list and to do list.
                It makes to take a note easier than any other notepad and memo
                apps.
              </Text>
            </View>
          </View>
          <View style={styles.App}>
            <Text style={styles.abouTitle}>Use of App</Text>
            <View>
              <Text style={styles.description}>
                No data to display or available... Contact the developer of this
                app to know more.
              </Text>
            </View>
          </View>
          <View style={styles.App}>
            <Text style={styles.abouTitle}>Licence the App</Text>
            <View style={{ alignItems: "center" }}>
              <Avatar.Image
                style={{ marginVertical: 20 }}
                size={100}
                source={require("../assets/jotdownLogo.png")}
              />
              <Text style={{ fontFamily: "UbuntuMedium", marginVertical: 20 }}>
                Version:
                <Text style={{ fontFamily: "UbuntuRegular" }}>
                  {app.expo.version}
                </Text>
              </Text>
              <Text style={{ fontFamily: "UbuntuRegular" }}>
                ® 2016 - 2022 Eluvent Softwares Corp.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // MODAL
  modal: {
    backgroundColor: colors.background,
    flex: 1,
    marginTop: 58,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: colors.icons,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  titleLogo: {
    alignItems: "center",
  },
  title: {
    fontFamily: "UbuntuBold",
    fontSize: 40,
    color: colors.primary,
    marginVertical: 5,
  },
  aboutContent: {
    flex: 1,
  },
  App: {
    height: 400,
    backgroundColor: colors.background,
    marginVertical: 20,
    marginHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20,
  },
  abouTitle: {
    fontFamily: "UbuntuMedium",
    fontSize: 18,
    margin: 15,
    color: colors.fonts,
  },
  description: {
    fontFamily: "UbuntuLight",
    fontSize: 16,
    marginHorizontal: 10,
    marginHorizontal: 30,
    lineHeight: 25,
  },
});
