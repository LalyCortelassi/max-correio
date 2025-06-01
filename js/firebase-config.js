// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcLorv7-2vUggVCLV9bkLimDiGcIJ3lZw",
  authDomain: "maxy-correio.firebaseapp.com",
  projectId: "maxy-correio",
  storageBucket: "maxy-correio.firebasestorage.app",
  messagingSenderId: "226088014404",
  appId: "1:226088014404:web:c06228f6f3a0b2e26d6211",
  measurementId: "G-KYVFEH93ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);