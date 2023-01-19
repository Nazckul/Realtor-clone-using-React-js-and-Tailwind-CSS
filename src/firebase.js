// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZ10o1m9Vnmzs7GNR7ZBZIiuTlIFPCbI",
  authDomain: "realtor-clone-react-abbcf.firebaseapp.com",
  projectId: "realtor-clone-react-abbcf",
  storageBucket: "realtor-clone-react-abbcf.appspot.com",
  messagingSenderId: "192802208432",
  appId: "1:192802208432:web:f431bca85a8921442a5975",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
