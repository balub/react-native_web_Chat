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

import io from "socket.io-client";
const ENDPOINT = "http://192.168.1.38:3000";

export default function ChatContainer({ isUser2 = false }) {
  const { state } = useContext(MessageContext);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const scrollViewRef = useRef();

  useEffect(() => {
    socket.current = io(ENDPOINT, { transports: ["websocket"] });
    socket.current.on("messages", (data) => {
      console.log("data", data);
      setMessages(data);
    });
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
