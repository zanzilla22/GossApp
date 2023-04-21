// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
if(firebase.apps.length ===0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
// const analytics = getAnalytics(app);

const auth = firebase.auth()

export {auth};