import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDCfu18rbX9UHxRi1v-Y-EsfqkyG9BMV-w",
  authDomain: "node-chat-app-a686e.firebaseapp.com",
  projectId: "node-chat-app-a686e",
  storageBucket: "node-chat-app-a686e.appspot.com",
  messagingSenderId: "687314106201",
  appId: "1:687314106201:web:eb1f183ed6dc2605087e48",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
