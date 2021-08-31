// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7zPjgomRC4XO3tpQjSU-raSX10EwdyEU",
  authDomain: "tiktok-crawler-8db59.firebaseapp.com",
  projectId: "tiktok-crawler-8db59",
  storageBucket: "tiktok-crawler-8db59.appspot.com",
  messagingSenderId: "666223875380",
  appId: "1:666223875380:web:a768402f359cadc5ab0161",
  measurementId: "G-4TR3J601ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;