import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcLorv7-2UvgVCLv9bkLimDiGcIJ3lZw",
  authDomain: "maxy-correio.firebaseapp.com",
  projectId: "maxy-correio",
  storageBucket: "maxy-correio.appspot.com",
  messagingSenderId: "226088014404",
  appId: "1:226088014404:web:c06228f6f3a0b2e26d6211",
  measurementId: "G-KYVFEH93ZV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
