// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCztVGUv-tpNLVWvoYCZyC6Nc_WDebEM6E",
  authDomain: "dragon-news-870cc.firebaseapp.com",
  projectId: "dragon-news-870cc",
  storageBucket: "dragon-news-870cc.firebasestorage.app",
  messagingSenderId: "449047960990",
  appId: "1:449047960990:web:c3bd723a526ec6d5088a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;