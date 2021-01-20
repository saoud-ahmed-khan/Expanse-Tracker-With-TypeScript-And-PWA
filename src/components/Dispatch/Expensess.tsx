import React from 'react'
import { contaxt } from "../Context";

export const Expenses = () => {
  const data = React.useContext(contaxt);
  const { Expence, setTotal, setExpence, settransectionData, transectionData } = data
  const [souce,Setsource]=React.useState<string>("")


  return (
    <>
      <h1 style={{ color: "darkred" }} className="heading">Expense</h1>
      <div className="innerb1">
        <div className="input">
          <input onChange={(e) => { setExpence(+(e.target.value)) }} style={{ outlineColor: "darkred" }} placeholder="Withdraw amount"
            value={Expence !== 0 ? Expence : "Withdraw amount"}
            type="number" required />
          <input style={{ outlineColor: "darkred" }} type="Text" onChange={(e)=>{Setsource(e.target.value)}} placeholder="Expense Detail" required />
          <button style={{ color: "darkred" }} onClick={() => {
            if (Expence !== 0) {
              setTotal((prev) => (prev - Expence));
              settransectionData([{amount:Expence,from:"darkred",source:souce},...transectionData])
              setExpence(0);
              console.log("epense");
            }
          }} >Withdraw</button>
        </div>
      </div>
    </>
  )
}


