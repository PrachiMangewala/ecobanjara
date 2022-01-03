import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGu3VxOakaFntO6JNjpRwR7Wlan43-Dmk",
  authDomain: "ecobanjara-e1f9c.firebaseapp.com",
  projectId: "ecobanjara-e1f9c",
  storageBucket: "ecobanjara-e1f9c.appspot.com",
  messagingSenderId: "163374167379",
  appId: "1:163374167379:web:3ff1231a0ff676be335da6",
  measurementId: "G-C03XSJDRB3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export default firebase;