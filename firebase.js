// ✅ FIREBASE CONFIG - js-clinic project
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDEkfX8R3H0m5dS2AqYQiFWgTjiioaDwjQ",
    authDomain: "js-hospital-fada9.firebaseapp.com",
    projectId: "js-hospital-fada9",
    storageBucket: "js-hospital-fada9.firebasestorage.app",
    messagingSenderId: "721735239795",
    appId: "1:721735239795:web:d3fa5761c7d0d818168206",
    measurementId: "G-TT4HYKSR8N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
