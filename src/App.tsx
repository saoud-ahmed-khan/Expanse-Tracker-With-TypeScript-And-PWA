import React from 'react';
import './App.css';
import { Expenses } from './components/Dispatch/Expensess';
import { Income } from './components/Income/Income';
import { Total } from './components/Total/Total';
import { Context } from './components/Context';
import { Transection } from "./components/Transection/Transection";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1 className="heading">EXPENSE TRACKER</h1>

      <Context>
        <div className="conmtainer">
          <div className="banner1"><Income /></div>
          <div className="banner2"><Total /></div>
          <div className="banner3"><Expenses /></div>
        </div>
        <Transection/>

      </Context>


    </div>
  );
}

export default App;
