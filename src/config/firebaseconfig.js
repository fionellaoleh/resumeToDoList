// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR8jPvSLddsnP1OVbqMTtHEThH594PY10",
  authDomain: "to-do-list-99fb4.firebaseapp.com",
  projectId: "to-do-list-99fb4",
  storageBucket: "to-do-list-99fb4.firebasestorage.app",
  messagingSenderId: "785990503377",
  appId: "1:785990503377:web:1ed051ddab3dd23331aef0",
  measurementId: "G-RC562B27QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);