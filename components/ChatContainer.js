import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from "react-native";

import { MessageContext } from "../utils/MessageContext";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import { firebase } from "../utils/FirebaseConfig";

export default function ChatContainer({ isUser2 = false }) {
  const { state } = useContext(MessageContext);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const scrollViewRef = useRef();

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot(
        (querySnapshot) => {
          const newEntities = [];
          querySnapshot.forEach((doc) => {
            newEntities.push(doc.data());
          });
          setMessages(newEntities);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <View
      style={{
        marginHorizontal: 24,
        padding: 24,
        backgroundColor: "#f2f5fc",
        border: "2px solid #edeff7",
        borderRadius: 20,
        overflow: "hidden",
        width: windowWidth / 1.3,
        height: windowHeight / 1.05,
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <ScrollView
          style={{ height: 500 }}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {messages &&
            messages.map((item) => (
              <ChatMessage item={item} isUser2={isUser2} />
            ))}
        </ScrollView>
      </View>
      <ChatInput ws={socket} isUser2={isUser2} />
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: "#f2f5fc",
    border: "2px solid #edeff7",
    borderRadius: 20,
    overflow: "hidden",
    width: 500,
  },
});
