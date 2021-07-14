import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ContactCard({ name, pic }) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 50, height: 50 }} source={pic} />
      <Text style={{ fontSize: 14, fontWeight: "800", marginLeft: 12 }}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    backgroundColor: "#f2f5fc",
    padding: 12,
    borderRadius: 20,
    minWidth: 280,
  },
});
