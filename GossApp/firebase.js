// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHubzwCEOmO7DmkBuvCqF7GTj24sBYvNA",
  authDomain: "goss-ee6e6.firebaseapp.com",
  projectId: "goss-ee6e6",
  storageBucket: "goss-ee6e6.appspot.com",
  messagingSenderId: "1019879370842",
  appId: "1:1019879370842:web:ce18b3a9d012a85ccf2863",
  measurementId: "G-XXW9LV5F59"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export { auth };
