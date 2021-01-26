import React from 'react';
import './App.css';
import { Expenses } from './components/Dispatch/Expensess';
import { Income } from './components/Income/Income';
import { Total } from './components/Total/Total';
import { Context } from './components/Context';
import { Transection } from "./components/Transection/Transection";
import firebase from "./firebase"
function App() {
  // Firebase Messaging
  const messaging = firebase.messaging()
  messaging
    .requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
      // prompt("token", token)
      localStorage.setItem("token", JSON.stringify(token))
    })
    .catch((err) => {
      console.warn("Notifications blocked !")
    })


  return (
    <div>
      <h1 className="heading">EXPENSE TRACKER</h1>
      <Context>
        <div className="conmtainer">
          <div className="banner1"><Income /></div>
          <div className="banner2"><Total /></div>
          <div className="banner3"><Expenses /></div>
        </div>
        <Transection />

      </Context>


    </div>
  );
}

export default App;
