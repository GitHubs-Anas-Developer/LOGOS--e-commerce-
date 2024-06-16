// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1E6UIHyy59kBBCPNfbs25_dphid-hPG0",
  authDomain: "logos-96476.firebaseapp.com",
  projectId: "logos-96476",
  storageBucket: "logos-96476.appspot.com",
  messagingSenderId: "460655658845",
  appId: "1:460655658845:web:f48c4db086b9d916384ab4",
  measurementId: "G-CSGSYG0J8R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };