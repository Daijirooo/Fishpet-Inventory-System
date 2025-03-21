// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQyvMPYX9oqc9R6ksplv3S4GBmWTT7-aw",
  authDomain: "fishpet-inventory-system.firebaseapp.com",
  projectId: "fishpet-inventory-system",
  storageBucket: "fishpet-inventory-system.firebasestorage.app",
  messagingSenderId: "135350623811",
  appId: "1:135350623811:web:00623a04e03c43a1a7bef6",
  measurementId: "G-X2W7EQP1L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();