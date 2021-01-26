import firebase from "firebase";
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js")

firebase.initializeApp({
  apiKey: "AIzaSyA8-7y3o8AbXun5v2oVyjgSX49VCzkQuLs",
  authDomain: "expensetrackerpwa-8105f.firebaseapp.com",
  projectId: "expensetrackerpwa-8105f",
  storageBucket: "expensetrackerpwa-8105f.appspot.com",
  messagingSenderId: "776750821458",
  appId: "1:776750821458:web:28f08e17e34dea34362f8b"
})

firebase.messaging()