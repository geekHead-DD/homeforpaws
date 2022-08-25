// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCyL8U32zBEUIVi24nrZELwKFdUWzGwRUg",
  authDomain: "homeforpaws-99.firebaseapp.com",
  projectId: "homeforpaws-99",
  storageBucket: "homeforpaws-99.appspot.com",
  messagingSenderId: "754489399233",
  appId: "1:754489399233:web:d5a9fe843bb8274af44140",
  measurementId: "G-5CXBPC86YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore()