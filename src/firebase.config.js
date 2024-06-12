 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMe6tfxpulllZZ6tp8gfWlvQPLp3KbKt4",
  authDomain: "renters-r-us.firebaseapp.com",
  projectId: "renters-r-us",
  storageBucket: "renters-r-us.appspot.com",
  messagingSenderId: "856385311618",
  appId: "1:856385311618:web:65ab3d507e01027079759b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()