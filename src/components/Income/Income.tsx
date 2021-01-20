import React, { useContext } from "react";
import { contaxt } from "../Context";

export const Income: React.FC = () => {
  const dataa = useContext(contaxt);
  const { setTotal, Income, setIncome, transectionData } = dataa
  let source:string=""
  return (
    <>
      <h2 style={{ color: "darkgreen" }} className="heading">
        Income
      </h2>
      <div className="innerb1">
        <div className="input">
          <input
            type="number"
            name="amount"
            onChange={(e) => { setIncome(+(e.target.value)) }}
            placeholder="Diposit amount"
            value={Income !== 0 ? Income : "Enter Amount"}
            required
          />
          <input
            type="Text"
            name="source"
            placeholder="Source of Income"
            onChange={(e)=>{source=e.target.value}}

            required
          />
          <button onClick={() => {
            if (Income !== 0) {
              setTotal((prev) => (prev + Income)); 
              setIncome(0);
              let data ={amount:Income, from:"Income",source:source};
              transectionData=[data,...];
            }
          }}>Deposit</button>
        </div>
      </div>
    </>
  );
};
