// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtnc6wQhegxBZqpMoye0hG_-OaKmmGd34",
  authDomain: "task-manager-cf649.firebaseapp.com",
  projectId: "task-manager-cf649",
  storageBucket: "task-manager-cf649.appspot.com",
  messagingSenderId: "959912427143",
  appId: "1:959912427143:web:558d313cadf964e4670222",
  measurementId: "G-6GBLC3J8GF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }
