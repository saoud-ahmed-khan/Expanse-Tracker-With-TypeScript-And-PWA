import React from 'react'

export const Expenses:React.FC <prop>= ()=>
  (
        <>
        <h1 style={{color:"darkred"}} className="heading">Expense</h1>
        <div className="innerb1">
        <div className="input"> 
          <input style={{outlineColor:"darkred"}} type="number" placeholder="Withdraw amount" required />
          <input style={{outlineColor:"darkred"}} type="Text" placeholder="Expense Detail" required />
          <button style={{color:"darkred"}} >Withdraw</button>
        </div>
      </div>    </>
    )


