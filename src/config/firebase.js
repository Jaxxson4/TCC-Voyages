import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAIFlGlzZx5qx4dkFN-orGhJWEwZqYPN90",
  authDomain: "voyages-c5390.firebaseapp.com",
  projectId: "voyages-c5390",
  storageBucket: "voyages-c5390.appspot.com",
  messagingSenderId: "210873192498",
  appId: "1:210873192498:web:a6c8296f51d6016b422c2b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);