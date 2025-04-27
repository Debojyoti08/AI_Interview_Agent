// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvoF08OK9QA2BrLf3Osm63FUi9rdX3yx4",
  authDomain: "interviewprep-2404b.firebaseapp.com",
  projectId: "interviewprep-2404b",
  storageBucket: "interviewprep-2404b.firebasestorage.app",
  messagingSenderId: "989717230232",
  appId: "1:989717230232:web:8e03171c869c710c9a96ed",
  measurementId: "G-BYTP4QSHRC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();