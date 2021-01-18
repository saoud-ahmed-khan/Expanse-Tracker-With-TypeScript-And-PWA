import React from 'react';
import './App.css';
import { Expenses } from './components/Dispatch/Expenses';
import { Income } from './components/Income/Income';
import { Total } from './components/Total/Total';
import { Context} from './components/Context';

function App() {
  return (
    <div className="App">
        <h1 className="heading">EXPENSE TRACKER</h1>

        <div className="conmtainer">
        <Context>

          <div className="banner1"><Income/></div>
          <div className="banner2"><Total/></div>
          <div className="banner3"><Expenses/></div>
          </Context>

          
        </div>
    </div>
  );
}

export default App;
