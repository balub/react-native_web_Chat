import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import LogoContainer from "./components/LogoContainer";
import CurrentUserContainer from "./components/CurrentUserContainer";
import ContactsContainer from "./components/ContactsContainer";
import ChatContainer from "./components/ChatContainer";
import { MessageContext } from "./utils/MessageContext";
import Home from "./components/Home";

export default function App() {
  const [state, setstate] = useState({
    user_1_id: 1,
    user_1_name: "Balu Babu Naidu",
    user_1_profile_pic:
      "https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg",
    user_2_id: 2,
    user_2_name: "Harish Babu",
    user_2_profile_pic:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
  });

  return (
    <MessageContext.Provider value={{ state, setstate }}>
      <Home />
    </MessageContext.Provider>
  );
}
