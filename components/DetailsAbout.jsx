import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// REACT PAPER LIBRARY
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

// GLOBALS STYLES
import { colors } from "../styles/stylesGlobal";

// JSON
import * as aboutData from "../aboutDetails.json";

const { about, oftwareLicenceAndAggreement, privacyAndSecurity } = aboutData;

export default function DetailsAbout() {
  return (
    <View style={styles.theContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoTitle}>
            <Avatar.Text size={130} label="CP" />
            <Text style={styles.title}>Jotdown</Text>
          </View>
          <View>
            <Text style={styles.titleText}>About</Text>
            <Text style={styles.desText}>{about}</Text>
            <Text style={styles.titleText}>
              Software licence and Aggreement
            </Text>
            <Text style={styles.desText}>{oftwareLicenceAndAggreement}</Text>
            <Text style={styles.titleText}>Privacy and Security</Text>
            <Text style={styles.desText}>{privacyAndSecurity}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  theContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: 30,
  },
  logoTitle: {
    alignItems: "center",
  },
  logo: {
    borderRadius: 100,
    color: "red",
  },
  title: {
    fontFamily: "UbuntuBold",
    fontSize: 48,
    color: colors.secondary,
    marginVertical: 10,
  },
  titleText: {
    fontSize: 32,
    color: colors.activeColor,
    fontFamily: "UbuntuMedium",
    marginVertical: 10,
  },
  desText: {
    fontSize: 18,
    color: colors.unActiveColor,
    fontFamily: "UbuntuLight",
    lineHeight: 30,
  },
});
