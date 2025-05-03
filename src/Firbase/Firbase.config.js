// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwHq3CXrlmUpLY5QO7ARKqufpAfgEExOg",
  authDomain: "dragon-newspaper-layout.firebaseapp.com",
  projectId: "dragon-newspaper-layout",
  storageBucket: "dragon-newspaper-layout.firebasestorage.app",
  messagingSenderId: "202239224915",
  appId: "1:202239224915:web:ca29aeeb7a08e65e9aaaa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);