// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnMO04nDt-9J1bHLy8JkNjuUPXwRlIges",
  authDomain: "prioritize-me.firebaseapp.com",
  projectId: "prioritize-me",
  storageBucket: "prioritize-me.appspot.com",
  messagingSenderId: "788340931587",
  appId: "1:788340931587:web:a4ce7ccfe9374037b4e236",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
