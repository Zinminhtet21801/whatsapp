import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth,GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMnAz6xNti8MAXpIkHcyKjASEbrB7AeF0",
  authDomain: "whatsapp-cca90.firebaseapp.com",
  projectId: "whatsapp-cca90",
  storageBucket: "whatsapp-cca90.appspot.com",
  messagingSenderId: "171459486090",
  appId: "1:171459486090:web:0de4b6b1a77d7498b7e873",
  measurementId: "G-S5TTH2JV24",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore()

const auth = getAuth()

const provider = new GoogleAuthProvider()

export { db, auth, provider }