import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MessageContext } from "../utils/MessageContext";

export default function ChatMessage({ item, isUser2 }) {
  const { state } = useContext(MessageContext);

  let currentUserID = isUser2 ? state.user_2_id : state.user_1_id;
  let isUser = item.user_id === currentUserID ? true : false;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 12,
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      {!item.isFile ? (
        !isUser ? (
          <>
            <Image
              style={{ width: 50, height: 50 }}
              source={
                item.user_id === 1
                  ? state.user_1_profile_pic
                  : state.user_2_profile_pic
              }
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
              source={
                item.user_id === 1
                  ? state.user_1_profile_pic
                  : state.user_2_profile_pic
              }
            />
          </>
        )
      ) : !isUser ? (
        <>
          <Image
            style={{ width: 50, height: 50 }}
            source={
              item.user_id === 1
                ? state.user_1_profile_pic
                : state.user_2_profile_pic
            }
          />
          {item.fileType.includes("image") ? (
            <Image
              source={item.fileURL}
              style={{
                width: 350,
                height: 300,
                objectFit: "scale-down",
                marginLeft: 6,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: "white",
                height: 45,
                width: "auto",
                borderRadius: 10,
                marginLeft: 6,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  height: 60,
                  width: "auto",
                  borderRadius: 10,
                  marginRight: 6,
                  padding: 12,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Ionicons name="document-text" size={32} color="#19233c" />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    margin: 12,
                    color: "#19233c",
                  }}
                >
                  {item.fileName}
                </Text>
                <Ionicons
                  name="arrow-down-circle-outline"
                  size={40}
                  color="#19233c"
                  onPress={() => Linking.openURL(item.fileURL)}
                />
              </View>
            </View>
          )}
        </>
      ) : (
        <>
          {item.fileType.includes("image") ? (
            <Image
              source={item.fileURL}
              style={{
                width: 350,
                height: 300,
                objectFit: "scale-down",
                marginRight: 6,
              }}
            />
          ) : (
            <View
              style={{
                backgroundColor: "#19233c",
                height: 60,
                width: "auto",
                borderRadius: 10,
                marginRight: 6,
                padding: 12,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Ionicons name="document-text" size={32} color="white" />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  margin: 12,
                  color: "white",
                }}
              >
                {item.fileName}
              </Text>
              <Ionicons
                name="arrow-down-circle-outline"
                size={40}
                color="white"
                onPress={() => Linking.openURL(item.fileURL)}
              />
            </View>
          )}
          <Image
            style={{ width: 50, height: 50 }}
            source={
              item.user_id === 1
                ? state.user_1_profile_pic
                : state.user_2_profile_pic
            }
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
