// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrKAZdh6tJ26jeYWKSho_Y__GtosEFFZM",
  authDomain: "coffee-store-1e1e7.firebaseapp.com",
  projectId: "coffee-store-1e1e7",
  storageBucket: "coffee-store-1e1e7.appspot.com",
  messagingSenderId: "483217098991",
  appId: "1:483217098991:web:c00cf02ddd2f46afa9731a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;