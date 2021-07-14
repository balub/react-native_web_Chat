import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import ContactCard from "./ContactCard";
import { MessageContext } from "../utils/MessageContext";

export default function ContactsContainer({ isUser2 = false }) {
  const { state } = useContext(MessageContext);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Active Conversations</Text>
      <View style={{ marginVertical: 24 }}>
        <ContactCard
          name={isUser2 ? state.user_1_name : state.user_2_name}
          pic={isUser2 ? state.user_1_profile_pic : state.user_2_profile_pic}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 24 },
  sectionHeading: { fontSize: 18, fontWeight: "600" },
});
