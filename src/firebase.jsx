
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDfkAEWeneQNiVY2jwL_t7-6PjjuD84Oys",
    authDomain: "user-authentication-fbb04.firebaseapp.com",
    projectId: "user-authentication-fbb04",
    storageBucket: "user-authentication-fbb04.appspot.com",
    messagingSenderId: "328395283994",
    appId: "1:328395283994:web:9478df2842c68d1dbe3ba3",
    measurementId: "G-GY78CZX3QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app