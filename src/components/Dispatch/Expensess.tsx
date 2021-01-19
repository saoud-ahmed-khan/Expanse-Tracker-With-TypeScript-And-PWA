import React from 'react'
import { contaxt } from "../Context";

export const Expenses = () =>
{
const data = React.useContext(contaxt);
const {Total,Income,Expence,setTotal,setIncome,setExpence} = data
return (
  <>
    <h1 style={{ color: "darkred" }} className="heading">Expense</h1>
    <div className="innerb1">
      <div className="input">
        <span style={{fontSize:"large", color:"darkred"}}>Withdraw amount</span>:<input style={{ outlineColor: "darkred" }} value={Expence} type="number" placeholder="" required />
        <span style={{fontSize:"large", color:"darkred"}}>Expense Detail</span><input style={{ outlineColor: "darkred" }} type="Text" placeholder="Expense Detail" required />
        <button style={{ color: "darkred" }}  onClick={()=>{setTotal()}}>Withdraw</button>
      </div>
    </div>
  </>
)}


