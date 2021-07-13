import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { MessageContext } from "../utils/MessageContext";

export default function CurrentUserContainer({ isUser2 = false }) {
  const { state } = useContext(MessageContext);

  return (
    <View style={styles.currentUserContainer}>
      <Image
        style={{ width: 120, height: 120 }}
        source="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {isUser2 ? state.user_2_name : state.user_1_name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  currentUserContainer: {
    width: 280,
    height: 180,
    backgroundColor: "#f5f9fc",
    border: "2px solid #edeff7",
    borderRadius: 20,
    overflow: "hidden",
    padding: 12,
    alignItems: "center",
  },
});
