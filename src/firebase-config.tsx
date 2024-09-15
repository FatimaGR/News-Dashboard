// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY31DTeq3YnNjJi5wlmn0Yy4dSHjsM1M4",
  authDomain: "news-dashboard-fgr.firebaseapp.com",
  projectId: "news-dashboard-fgr",
  storageBucket: "news-dashboard-fgr.appspot.com",
  messagingSenderId: "540585512967",
  appId: "1:540585512967:web:0e38b5f75beff51e5c5aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);