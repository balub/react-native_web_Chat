import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { MessageContext } from "../utils/MessageContext";

export default function ChatMessage({ item, isUser2 }) {
  const { state } = useContext(MessageContext);

  let currentUserID = isUser2 ? state.user_2_id : state.user_1_id;
  let isUser = item.user_id === currentUserID ? true : false;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      {!isUser ? (
        <>
          <Image
            style={{ width: 50, height: 50 }}
            source="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          />
          <View
            style={{
              backgroundColor: "white",
              height: 45,
              width: "auto",
              borderRadius: 10,
              marginLeft: 6,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                margin: 12,
                color: "#19233c",
              }}
            >
              {item.message}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: "#19233c",
              height: 45,
              width: "auto",
              borderRadius: 10,
              marginRight: 6,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                margin: 12,
                color: "white",
              }}
            >
              {item.message}
            </Text>
          </View>
          <Image
            style={{ width: 50, height: 50 }}
            source="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
