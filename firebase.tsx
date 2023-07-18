// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_HVU9oUSP58V6C8_50Kk6ubGLUYYoZ7o",
  authDomain: "insta-2-7afe3.firebaseapp.com",
  projectId: "insta-2-7afe3",
  storageBucket: "insta-2-7afe3.appspot.com",
  messagingSenderId: "26313628087",
  appId: "1:26313628087:web:e03b9f56a5ce81125e7032"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};