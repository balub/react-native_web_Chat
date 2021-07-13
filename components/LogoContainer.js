import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { MessageContext } from "../utils/MessageContext";

export default function LogoContainer({ isUser2 = false }) {
  const { state } = useContext(MessageContext);

  return (
    <View style={styles.LogoContainer}>
      <Image
        style={styles.logo}
        source={"https://img.icons8.com/cotton/2x/4a90e2/chat.png"}
      />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 25,
          marginLeft: 25,
        }}
      >
        Chat App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  LogoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 24,
  },
});
