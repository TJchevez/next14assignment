// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuQxghKS2s-P7P_UPkaYT1ehJ4t58oRt0",
  authDomain: "next14-cc-33bc2.firebaseapp.com",
  projectId: "next14-cc-33bc2",
  storageBucket: "next14-cc-33bc2.firebasestorage.app",
  messagingSenderId: "861099477758",
  appId: "1:861099477758:web:54fb15b5bd9e10d39bf3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)