// import { initializeApp } from "firebase/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

// auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9zUbInZn0ALIErcbCDXPTWjxTHx6g7sc",
  authDomain: "clone-666ba.firebaseapp.com",
  projectId: "clone-666ba",
  storageBucket: "clone-666ba.appspot.com",
  messagingSenderId: "704396185219",
  appId: "1:704396185219:web:c15b7327f1aeefb01c95b6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = app.firestore();
export const db = app.firestore();
