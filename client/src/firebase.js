// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-29dbf.firebaseapp.com",
  projectId: "mern-estate-29dbf",
  storageBucket: "mern-estate-29dbf.firebasestorage.app",
  messagingSenderId: "108501810837",
  appId: "1:108501810837:web:6842e2e5b011c0d5bb259c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
