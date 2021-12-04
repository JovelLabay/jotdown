// IMPORTS FOR REACT
import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

// THIRD-PARTY UI LIBRARY
import { Avatar, Card, IconButton } from "react-native-paper";

// GLOBAL STYLES
import { colors } from "../styles/stylesGlobal";

// IMPORTS FOR ICONS
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function ListDel({ item, deleteItem }) {
  // CONFIRMATION DIALOG
  const sure = () => {
    Alert.alert("Dialog Box", "Are you sure to delete this?", [
      { text: "Yes", onPress: () => deleteItem(item.id) },
      { text: "Not now" },
    ]);
  };

  return (
    <View>
      <Card.Title
        style={styles.card}
        title={<Text style={styles.title}>{item.title + " " + item.id}</Text>}
        subtitle={<Text style={styles.description}>{item.description}</Text>}
        left={(props) => (
          <FontAwesome
            name="sticky-note"
            size={40}
            color="#6F6FC8"
            onPress={() => {
              item.id === item.id ? alert(item.id) : alert("No Found");
            }}
          />
        )}
        right={(props) => (
          <Foundation
            style={styles.delete}
            name="trash"
            size={25}
            color="#39394B"
            onPress={() => sure()}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: colors.unActiveColor,
    borderRadius: 10,
  },
  title: {
    fontFamily: "UbuntuBold",
    fontSize: 22,
  },
  description: {
    fontFamily: "UbuntuRegular",
    fontSize: 16,
  },
  delete: {
    marginRight: 10,
  },
});
