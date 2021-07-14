import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

import UserPage1 from "../UserPage1";
import UserPage2 from "../UserPage2";

const Home = createSwitchNavigator({
  UserPage1: UserPage1,
  UserPage2: UserPage2,
});

const container = createBrowserApp(Home);

export default container;
