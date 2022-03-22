export const environment = {
  production: true
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf_hkOCp-rg4vw_9Ne3TjM4B5fVPiIa1M",
  authDomain: "chrome-store-8c7ad.firebaseapp.com",
  databaseURL: "https://chrome-store-8c7ad-default-rtdb.firebaseio.com",
  projectId: "chrome-store-8c7ad",
  storageBucket: "chrome-store-8c7ad.appspot.com",
  messagingSenderId: "665893488062",
  appId: "1:665893488062:web:a666981e8d7862cbb9a5ef",
  measurementId: "G-EJV8T1ZVHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);