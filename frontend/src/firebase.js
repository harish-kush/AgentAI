// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "automate-demo-9a791.firebaseapp.com",
  projectId: "automate-demo-9a791",
  storageBucket: "automate-demo-9a791.firebasestorage.app",
  messagingSenderId: "506344463027",
  appId: "1:506344463027:web:4b0a48d3cb31315924aec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

