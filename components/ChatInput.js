import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MessageContext } from "../utils/MessageContext";
import * as DocumentPicker from "expo-document-picker";
import { firebase } from "../utils/FirebaseConfig";

export default function ChatInput({ ws, isUser2 }) {
  const [value, onChangeText] = React.useState("");
  const { state } = useContext(MessageContext);

  const PickFile = async () => {
    const fileData = await DocumentPicker.getDocumentAsync().then((result) => {
      return result;
    });
    firebase
      .storage()
      .ref()
      .child("files/" + fileData.file.name)
      .putString(fileData.uri, "data_url")
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          firebase
            .firestore()
            .collection("messages")
            .doc()
            .set({
              user_id: isUser2 ? state.user_2_id : state.user_1_id,
              message: value,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              isFile: true,
              fileURL: downloadURL,
              fileType: fileData.file.type,
              fileName: fileData.file.name,
            })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              alert("Error writing document");
              console.error("Error writing document: ", error);
            });
        });
      });
  };

  const sendMessage = () => {
    if (value === "") return;
    firebase
      .firestore()
      .collection("messages")
      .doc()
      .set({
        user_id: isUser2 ? state.user_2_id : state.user_1_id,
        message: value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        isFile: false,
        fileURL: "",
        fileType: "",
        fileName: "",
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <Ionicons name="attach-sharp" size={40} onPress={PickFile} />
      <TextInput
        style={styles.textStyles}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        onSubmitEditing={sendMessage}
      />
      <Button
        onPress={sendMessage}
        title="SEND >"
        color="#014dfb"
        style={styles.btnStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 12,
  },
  textStyles: {
    width: "150%",
    height: 40,
    borderColor: "#edeff7",
    borderWidth: 3,
    marginRight: 12,
  },
  btnStyles: { width: 60, height: 40, padding: 12, borderRadius: 5 },
});
