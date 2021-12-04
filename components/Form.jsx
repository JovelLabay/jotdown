// IMPPORTS FROM REACT
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

// IMPORTS FOR ICONS
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// THIRD-PARTY UI
import { TextInput, Button } from "react-native-paper";

// GLOBAL STYLES
import { colors, height } from "../styles/stylesGlobal";

function Form({ submitNewItem }) {
  const [textForm, setTextForm] = useState(false);

  const [newItem, setNewItem] = useState();

  const titleText = (val) => {
    setNewItem(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addIcon}>
        <AntDesign
          name="pluscircle"
          size={35}
          color="#F3F3F3"
          onPress={() => setTextForm(true)}
        />
      </View>

      {/* FORM MODAL */}
      <Modal animationType="slide" transparent={true} visible={textForm}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContainer}>
            <AntDesign
              style={styles.aboutClose}
              name="closecircle"
              size={24}
              color={colors.secondary}
              onPress={() => setTextForm(false)}
            />
            <View>
              <Text style={styles.formTitle}>Create New Jotdown</Text>
              <View>
                <TextInput
                  label="Add Your Titlte"
                  style={styles.addForm}
                  mode="outlined"
                  outlineColor={colors.secondary}
                  onChangeText={titleText}
                  keyboardType="default"
                  returnKeyType="done"
                />
                <TextInput
                  label="Add Your Description Here..."
                  style={styles.addForm}
                  mode="outlined"
                  multiline={true}
                  outlineColor={colors.secondary}
                  onChangeText={titleText}
                />
                <Button
                  style={styles.addBtn}
                  mode="contained"
                  onPress={() => submitNewItem(newItem)}
                >
                  Add Jotdown
                </Button>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F6FC8",
    height: 60,
    width: 60,
    borderRadius: 50,
    position: "absolute",
    bottom: 30,
    right: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addIcon: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  // FORM MODAL
  modalContainer: {
    backgroundColor: colors.activeColor,
    flex: 0.9,
    marginTop: Platform.OS === "android" ? 10 : 50,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  aboutClose: {
    textAlign: "right",
    marginTop: 10,
    marginRight: 10,
  },
  formTitle: {
    textAlign: "center",
    fontFamily: "UbuntuMedium",
    fontSize: 24,
    color: colors.secondary,
  },
  addForm: {
    backgroundColor: colors.activeColor,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addBtn: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default Form;
