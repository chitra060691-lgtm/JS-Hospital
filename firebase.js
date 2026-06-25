// ✅ FIREBASE CONFIG - js-clinic project
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpBgo04RqFRj_4pAf3A3UaHfl0ePvN5F0",
  authDomain: "js-clinic.firebaseapp.com",
  projectId: "js-clinic",
  storageBucket: "js-clinic.firebasestorage.app",
  messagingSenderId: "57371602342",
  appId: "1:57371602342:web:9e81f9946e2e5dd1267367",
  measurementId: "G-4WQ740MG30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
