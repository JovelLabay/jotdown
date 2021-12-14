// // REACT NATIVE
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Modal,
//   ScrollView,
//   Platform,
// } from "react-native";

// // GLOBAL STYLES
// import { colors } from "../styles/GlobalStyles";

// IMPORTS FOR EXPO
import { StatusBar } from "expo-status-bar";

// // COMPONENTS
// import { HomeTopNav, HomeTopNavForm, AboutTopNav } from "../components/NavTop";
// import NoteList from "../components/NoteList";

// // SAMPLE NOTES
// import startUpNotes from "../startUpNotes.json";
// import { TextInput } from "react-native-paper";

// EXPO
import { createStackNavigator } from "@react-navigation/stack";

// =====================================================

// REACT NATIVE
import React, { useState, useEffect } from "react";
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
  SafeAreaView,
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

// ====================================================

const Stack = createStackNavigator();

// HOME SCREEN
// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />
//       <View style={styles.top}>
//         <SafeAreaView>
//           <HomeTopNav />
//         </SafeAreaView>
//       </View>
//       <View style={styles.bottom}>
//         <ScrollView>
//           <View style={styles.two}>
//             <NoteList />
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.mainBackground,
//   },
//   top: {
//     paddingTop: Platform.OS === "android" ? 30 : 0,
//   },
//   bottom: {
//     flex: 1,
//   },
//   // one: {
//   //   flex: 0.1,
//   //   backgroundColor: colors.background,
//   //   borderBottomWidth: 1,
//   //   borderBottomColor: colors.mainBackground,
//   // },
//   two: {
//     flex: 1,
//     backgroundColor: colors.mainBackground,
//     marginVertical: 1,
//   },
// });

function TheList({ navigation }) {
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
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.top}>
        <SafeAreaView>
          <HomeTopNav />
        </SafeAreaView>
      </View>
      <View style={styles.bottom}>
        <ScrollView>
          <View style={styles.two}>
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
                    // <TouchableOpacity key={mama.id} onPress={() => readMe(mama.name)}>
                    <TouchableOpacity
                      key={mama.id}
                      onPress={() => navigation.navigate("Note Details", mama)}
                    >
                      <Card.Title
                        title={
                          <Text
                            style={{
                              color: colors.fonts,
                              fontFamily: "UbuntuMedium",
                            }}
                          >
                            {"Note No: " + mama.id}
                          </Text>
                        }
                        key={mama.id}
                        subtitle={
                          <Text
                            style={{
                              color: colors.fonts,
                              fontFamily: "UbuntuLight",
                            }}
                          >
                            {mama.name === ""
                              ? "No data to display."
                              : mama.name}
                          </Text>
                        }
                        style={styles.card}
                        left={(props) => (
                          <Avatar.Icon
                            {...props}
                            color={colors.background}
                            icon="note"
                            backgroundColor={
                              mama.id <= 100
                                ? "#3E8E7E"
                                : mama.id <= 200
                                ? "#161853"
                                : mama.id <= 300
                                ? "#FABB51"
                                : mama.id <= 400
                                ? "#009DAE"
                                : mama.id <= 500
                                ? "#D06224"
                                : mama.id <= 600
                                ? "#AE4CCF"
                                : mama.id <= 700
                                ? "#F8485E"
                                : mama.id <= 800
                                ? "#9D84B7"
                                : "#533535"
                            }
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
                            <Feather
                              name="trash"
                              size={24}
                              color={colors.primary}
                            />
                          </TouchableOpacity>
                        )}
                      />
                    </TouchableOpacity>
                  ))}
                </>
              )}
            </>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function Sample({ navigation, route }) {
  const [me, setMe] = useState("");

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
      );
      const json = await response.json();
      setMe(json.joke);
    } catch (error) {
      Alert.alert("Error Found", `${error.message}`, [
        {
          text: "Done",
        },
      ]);
    }
  };

  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  const { id, name } = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.mainBackground,
      }}
    >
      <Avatar.Icon
        style={{ marginVertical: 30 }}
        size={150}
        color={colors.background}
        icon="note"
        backgroundColor={
          id <= 100
            ? "#3E8E7E"
            : id <= 200
            ? "#161853"
            : id <= 300
            ? "#FABB51"
            : id <= 400
            ? "#009DAE"
            : id <= 500
            ? "#D06224"
            : id <= 600
            ? "#AE4CCF"
            : id <= 700
            ? "#F8485E"
            : id <= 800
            ? "#E6CCA9"
            : "#533535"
        }
      />
      <View
        style={{
          backgroundColor: colors.background,
          width: "80%",
          borderRadius: 20,
          paddingVertical: 30,
          paddingHorizontal: 10,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "UbuntuBold",
            color: colors.fonts,
          }}
        >
          Note no: {id}
        </Text>
        <Text
          style={{
            fontFamily: "UbuntuLight",
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          {name === "" ? "No data to display." : name}
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontStyle: "italic",
            // fontFamily: "UbuntuRegular",
          }}
        >
          " {me === "" ? "Loading...Pls wait." : me} "
        </Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="The Notes"
        options={{
          header: () => null,
        }}
        component={TheList}
      />
      <Stack.Screen name="Note Details" component={Sample} />
    </Stack.Navigator>
  );
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
  // ========

  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  top: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  bottom: {
    flex: 1,
  },
  // one: {
  //   flex: 0.1,
  //   backgroundColor: colors.background,
  //   borderBottomWidth: 1,
  //   borderBottomColor: colors.mainBackground,
  // },
  two: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    marginVertical: 1,
  },
});
