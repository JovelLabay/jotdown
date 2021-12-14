// REACT NATIVE
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
  TouchableOpacity,
  Vibration,
  Pressable,
  TouchableHighlight,
  TouchableNativeFeedbackBase,
  ToastAndroid,
  Platform,
} from "react-native";

// REACT NATIVE PAPER
import { Avatar, Card, IconButton } from "react-native-paper";

// ICONS
import { Feather, AntDesign } from "@expo/vector-icons";

// GLOBAL STYLES
import { colors } from "../styles/GlobalStyles";

// COMPONENTS
import { HomeTopNav, HomeTopNavForm, AboutTopNav } from "../components/NavTop";

// JSON NOTES
import startUpNotes from "../startUpNotes.json";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function TheList() {
  // NOTES
  const [notes, setNotes] = useState(startUpNotes);

  // ALERTDEL
  const alertDel = (id) => {
    Alert.alert(
      `Delete Note No. ${id}`,
      "Are you sure you want to delete this?",
      [
        {
          text: "Yes",
          onPress: () =>
            setNotes(notes.filter((theNotes) => theNotes.id !== id)),
        },
        {
          text: "No",
        },
      ]
    );
  };

  // POST NEW NOTES
  const postNewNotesFunc = (name) => {
    const theIds = Math.floor(Math.random() * 900);
    setNotes((prevNotes) => {
      return [{ id: theIds, name }, ...prevNotes];
    });
  };

  // README
  const readMe = (name) => {
    Alert.alert(`Read Note`, `${name}`, [
      {
        text: "Done",
      },
    ]);
  };

  return (
    <>
      <HomeTopNavForm postNewNotes={postNewNotesFunc} />
      {notes.length === 0 ? (
        <View style={styles.noData}>
          <Text style={styles.noDataText}>You Have No Notes!</Text>
          <Text style={styles.createText}>Create your First Note.</Text>
          <Avatar.Icon
            size={150}
            icon="folder"
            color={colors.primary}
            backgroundColor={colors.fonts}
          />
        </View>
      ) : (
        <>
          {notes.map((mama) => (
            <TouchableOpacity key={mama.id} onPress={() => readMe(mama.name)}>
              <Card.Title
                title={
                  <Text
                    style={{ color: colors.fonts, fontFamily: "UbuntuMedium" }}
                  >
                    {"Note No: " + mama.id}
                  </Text>
                }
                key={mama.id}
                subtitle={
                  <Text
                    style={{ color: colors.fonts, fontFamily: "UbuntuLight" }}
                  >
                    {mama.name}
                  </Text>
                }
                style={styles.card}
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    color={
                      mama.id <= 100
                        ? "pink"
                        : mama.id <= 200
                        ? "purple"
                        : mama.id <= 300
                        ? "blue"
                        : mama.id <= 400
                        ? "green"
                        : mama.id <= 500
                        ? "yellow"
                        : mama.id <= 600
                        ? "orange"
                        : mama.id <= 700
                        ? "red"
                        : mama.id <= 800
                        ? "white"
                        : "black"
                    }
                    icon="folder"
                    backgroundColor={colors.mainBackground}
                  />
                )}
                right={(props) => (
                  <TouchableOpacity
                    onLongPress={() => alertDel(mama.id)}
                    onPress={() => {
                      Vibration.vibrate();
                      Platform.OS === "ios"
                        ? alert("Long Press To Delete")
                        : ToastAndroid.show(
                            "Long Press To Delete",
                            ToastAndroid.SHORT
                          );
                    }}
                  >
                    <Feather name="trash" size={24} color={colors.primary} />
                  </TouchableOpacity>
                )}
              />
            </TouchableOpacity>
          ))}
        </>
      )}
    </>
  );
}

function Lala() {
  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text>sdfsdf</Text>
    </View>
  );
}

export default function NoteList() {
  return <TheList />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingRight: 10,
  },
  noData: {
    marginTop: 100,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  noDataText: {
    fontFamily: "UbuntuMedium",
    fontSize: 28,
    color: colors.fonts,
    marginBottom: 20,
  },
  createText: {
    fontFamily: "UbuntuRegular",
    fontSize: 20,
    color: colors.primary,
    marginBottom: 10,
  },
});
