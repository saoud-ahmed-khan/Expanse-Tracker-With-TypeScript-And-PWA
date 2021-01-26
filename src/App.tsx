import React from 'react';
import './App.css';
import { Expenses } from './components/Dispatch/Expensess';
import { Income } from './components/Income/Income';
import { Total } from './components/Total/Total';
import { Context } from './components/Context';
import { Transection } from "./components/Transection/Transection";
// import firebase from "./firebase";
function App() {

  // firebase notification permission
  // useEffect( () => {
  //   const messaging = firebase.messaging();
  //   messaging.requestPermission().then(() => {
  //     return messaging.getToken()
  //     .then((token) => {
  //       prompt("Token" , token)
  //     })
  //   }) 
  // } , []);
  // React.useEffect( () => {
  //   const messaging = firebase.messaging();
  //   messaging.requestPermission().then(() => {
  //     return messaging.getToken().then((token) => {
  //       if (token){
  //         prompt("Welcome to my App \nToken" ,token)
  //       }
  //       else{
  //         console.log("Token not available")
  //       }
  //     })
  //   })
  // } )

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
