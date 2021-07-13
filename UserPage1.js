import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import LogoContainer from "./components/LogoContainer";
import CurrentUserContainer from "./components/CurrentUserContainer";
import ContactsContainer from "./components/ContactsContainer";
import ChatContainer from "./components/ChatContainer";

import { MessageContext } from "./utils/MessageContext";

export default function UserPage1() {
  const { state } = useContext(MessageContext);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <LogoContainer />
        <CurrentUserContainer />
        <ContactsContainer />
      </View>
      <View style={styles.rightContainer}>
        <ChatContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  leftContainer: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  rightContainer: {
    maxHeight: Dimensions.get("window").height / 1.1,
    maxWidth: Dimensions.get("window").width / 1.225,
  },
});
