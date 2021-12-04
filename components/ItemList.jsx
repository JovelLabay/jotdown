// IMPORTS FOR REACT
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";

// THIRD-PARTY UI LIBRARY
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Avatar, Card, IconButton } from "react-native-paper";

// IMPORTS FOR ICONS
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Form from "./Form";

// GLOBAL STYLES
import { colors } from "../styles/stylesGlobal";
import ListDel from "./ListDel";

function ItemList() {
  // SAMPLE DATA
  const [notes, setNotes] = useState([
    { id: 1, title: "Groccery today", description: "This is a sample Text." },
    { id: 2, title: "Groccery today", description: "This is a sample Text." },
    { id: 3, title: "Groccery today", description: "This is a sample Text." },
  ]);

  // DELETE
  const deleteItem = (id) => {
    setNotes((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  // ADD
  const submitNewItemFunc = (description) => {
    setNotes((prevTodos) => {
      return [{ id: Math.random().toString(), description }, ...prevTodos];
    });
  };

  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <ListDel item={item} deleteItem={deleteItem} />
        )}
      />
      <Form submitNewItem={submitNewItemFunc} />
    </View>
  );
}

export default ItemList;
