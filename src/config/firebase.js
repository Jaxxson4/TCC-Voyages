import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import 'firebase/database';
import firebase from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIFlGlzZx5qx4dkFN-orGhJWEwZqYPN90",
  authDomain: "voyages-c5390.firebaseapp.com",
  projectId: "voyages-c5390",
  storageBucket: "voyages-c5390.appspot.com",
  messagingSenderId: "210873192498",
  appId: "1:210873192498:web:a6c8296f51d6016b422c2b"
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app); 

export {auth, db};