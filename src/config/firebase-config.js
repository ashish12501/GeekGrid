// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv6Rm1xgYK5ZuL8l3Y6bysuL9CesHrXVM",
    authDomain: "geek-grid.firebaseapp.com",
    projectId: "geek-grid",
    storageBucket: "geek-grid.appspot.com",
    messagingSenderId: "715592966518",
    appId: "1:715592966518:web:1cce0a673d43b9ac50da57",
    measurementId: "G-SF5JENGYS2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);