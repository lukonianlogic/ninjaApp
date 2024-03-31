// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-fO2F5eTOGxIX2tYX14oCEtyLwsp5vyU",
  authDomain: "ninjaapp-55342.firebaseapp.com",
  projectId: "ninjaapp-55342",
  storageBucket: "ninjaapp-55342.appspot.com",
  messagingSenderId: "157953523641",
  appId: "1:157953523641:web:90b93f1938b3183b8f8068",
  measurementId: "G-J21HMHLQDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);