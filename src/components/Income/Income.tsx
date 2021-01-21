import React, { useContext, useState } from "react";
import { contaxt } from "../Context";

export const Income: React.FC = () => {
  const dataa = useContext(contaxt);
  const { setTotal, Income, setIncome, transectionData, settransectionData } = dataa
  const [souce, Setsource] = useState<string>("")
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
            onChange={(e) => { Setsource(e.target.value) }}
            required
            value={souce}
          />

          <button onClick={() => {

            if (Income === 0 || souce==="" || Income < 0) 
            {
              
              alert("Invalid Income Amount or Income Source  ")
            }
            else{
              setTotal((prev) => (prev + Income));
              settransectionData([{ amount: Income, from: "darkgreen", source: souce }, ...transectionData])
              setIncome(0);
              Setsource('')
            }
          }}>Deposit</button>
        </div>
      </div>
    </>
  );
};
