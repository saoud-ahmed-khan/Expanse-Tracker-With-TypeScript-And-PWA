
import firebase from "firebase/app";
import "firebase/messaging";
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');
const firebaseConfig = {
  apiKey: "AIzaSyA8-7y3o8AbXun5v2oVyjgSX49VCzkQuLs",
  authDomain: "expensetrackerpwa-8105f.firebaseapp.com",
  projectId: "expensetrackerpwa-8105f",
  storageBucket: "expensetrackerpwa-8105f.appspot.com",
  messagingSenderId: "776750821458",
  appId: "1:776750821458:web:28f08e17e34dea34362f8b"
};
firebaseConfig.initializeApp(firebaseConfig)
firebase.messaging();