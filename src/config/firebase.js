// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEwePCwfil81x_uH8AWmFJ7__erVBw7d0",
  authDomain: "fir-vite-76f52.firebaseapp.com",
  projectId: "fir-vite-76f52",
  storageBucket: "fir-vite-76f52.appspot.com",
  messagingSenderId: "567449692598",
  appId: "1:567449692598:web:baf2eca268db8da0f67917",
  measurementId: "G-G1H5289S14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);