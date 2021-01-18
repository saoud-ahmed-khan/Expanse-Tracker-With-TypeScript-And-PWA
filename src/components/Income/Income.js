import React, { useContext } from "react";
import { contaxt } from "../Context";

export const Income: React.FC<prop> = () => {
  const dataa = useContext(contaxt);
  const {Total , setTotal,Income,setIncome,Expence, setExpence}=dataa
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
            onChange={(e) => {setIncome(e.target.value)}}
            placeholder="Diposit amount"
            required
          />
          <input
            type="Text"
            name="source"
            placeholder="Source of Income"
            required
          />
          <button onClick={() => {setTotal(Total+Income)}}>Deposit</button>
        </div>
      </div>
    </>
  );
};
