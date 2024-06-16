// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIAgsYKPYChrXHCY1GdHEEWUhKbO1KcCk",
  authDomain: "dragon-news-project-fea4d.firebaseapp.com",
  projectId: "dragon-news-project-fea4d",
  storageBucket: "dragon-news-project-fea4d.appspot.com",
  messagingSenderId: "932898724688",
  appId: "1:932898724688:web:1bc9ba4b36c389b313aa55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;