// REACT NATIVE
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Platform,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

// COMPONENTS
import AboutCom from "./AboutCom";

// REACT NATIVE PAPER
import { Avatar } from "react-native-paper";

// ICONS
import { Ionicons, AntDesign, Fontisto } from "@expo/vector-icons";

// COLORS
import { colors } from "../styles/GlobalStyles";

function HomeTopNav() {
  // MODAL
  const [modalAbout, setModalAbout] = useState(false);

  // MODAL FUNCTION TO DISMISS
  const propsetModalAbout = () => {
    setModalAbout(false);
  };

  const time = new Date();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        opacity: modalAbout === true ? 0.3 : 1,
      }}
    >
      <View>
        <Text style={styles.logo}>Jotdown</Text>
        <Text style={styles.time}>
          {time.getHours() <= 11
            ? "Good Morning⛅"
            : time.getHours() === 12
            ? "Good Noon☀"
            : time.getHours() <= 17
            ? "Good Afternoon🌤"
            : "Good Evening🌙"}
        </Text>
      </View>
      <View style={styles.icons}>
        <View style={styles.search_form}>
          <TouchableOpacity onPress={() => setModalAbout(true)}>
            <AntDesign name="infocirlceo" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>
      </View>

      {/* MODAL */}
      <Modal animationType="slide" transparent={true} visible={modalAbout}>
        <AboutCom setModalAbout={propsetModalAbout} />
      </Modal>
    </View>
  );
}

function HomeTopNavForm({ postNewNotes }) {
  // BUTTON DISABLED
  const [dis, setDis] = useState(true);

  // SAMPLE
  const [input, setInput] = useState("");

  // MODAL FOR FORM
  const [open, setOpen] = useState(false);

  return (
    <View>
      <View style={styles.openForm}>
        <Avatar.Image size={40} source={require("../assets/jotdownLogo.png")} />
        <TouchableOpacity style={styles.whats} onPress={() => setOpen(true)}>
          <Text>What's your jot?</Text>
        </TouchableOpacity>
      </View>
      {/* MODAL FOR FORM */}
      <Modal transparent={true} visible={open} animationType="slide">
        <View style={styles.containerForm}>
          {/* <Avatar.Image
            size={40}
            source={require("../assets/jotdownLogo.png")}
          />
          <TextInput
            placeholder="What's your Jot?"
            onChangeText={(text) => {
              setInput(text);
              text.length <= 0 ? setDis(true) : setDis(false);
            }}
            multiline={true}
            value={input}
            autoCorrect={true}
          />
          <Button
            color={{}}
            title="Post"
            onPress={() => {
              postNewNotes(input);
              setInput("");
            }}
            disabled={dis}
          /> */}
          <View style={styles.theButtons}>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Button
              title="Post"
              onPress={() => {
                postNewNotes(input);
                setInput("");
                setOpen(false);
              }}
              disabled={dis}
              color={colors.primary}
            />
          </View>

          <View style={styles.formform}>
            <Avatar.Image
              style={styles.imgimg}
              size={40}
              source={require("../assets/jotdownLogo.png")}
            />
            <TextInput
              style={styles.formInput}
              placeholder="What's your jot?"
              onChangeText={(text) => {
                setInput(text);
                text.length <= 0 ? setDis(true) : setDis(false);
              }}
              multiline={true}
              value={input}
              autoCorrect={true}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// STYLESHEETS
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  logo: {
    fontFamily: "UbuntuBold",
    fontSize: 36,
    color: colors.primary,
  },
  time: {
    fontFamily: "UbuntuRegular",
    fontSize: 16,
    color: colors.fonts,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  icons: {
    flexDirection: "row",
  },
  search_form: {
    backgroundColor: colors.primary,
    marginHorizontal: 2,
    padding: 6,
    borderRadius: 50,
  },
  // THE FORM
  containerForm: {
    flex: 1,
    backgroundColor: colors.background,
  },
  theButtons: {
    paddingTop: Platform.OS === "ios" ? 20 : 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  formInput: {
    marginTop: 15,
    fontFamily: "UbuntuRegular",
    fontSize: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  // MODAL OPENER FORM
  openForm: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  whats: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingLeft: 10,
    flex: 1,
    marginLeft: 10,
    borderRadius: 50,
  },
  formform: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  imgimg: {
    marginLeft: 5,
    marginTop: 10,
  },
});

// EXPORTS
module.exports = { HomeTopNav, HomeTopNavForm };
