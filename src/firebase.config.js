// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtnc6wQhegxBZqpMoye0hG_-OaKmmGd34",
  authDomain: "task-manager-cf649.firebaseapp.com",
  projectId: "task-manager-cf649",
  storageBucket: "task-manager-cf649.appspot.com",
  messagingSenderId: "959912427143",
  appId: "1:959912427143:web:6e8b3e87244dffc3670222",
  measurementId: "G-GHCY4RCD7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);