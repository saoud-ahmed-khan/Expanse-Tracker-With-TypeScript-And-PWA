import React, { useContext } from "react";
import { contaxt } from "../Context";

export const Income: React.FC = () => {
  const dataa = useContext(contaxt);
  const { setTotal, Income, setIncome, } = dataa
  return (
    <>
      <h2 style={{ color: "darkgreen" }} className="heading">
        Income
      </h2>
      <div className="innerb1">
        <div className="input">
          <span className="label">Deposit Amount</span>:<input
            type="number"
            name="amount"
            onChange={(e) => { setIncome(+(e.target.value)) }}
            placeholder="Diposit amount"
            value={Income}
            required
          />
          <span className="label">Source of Income</span>:<input
            type="Text"
            name="source"
            placeholder="Source of Income"

            required
          />
          <button onClick={() => { setTotal((prev) => (prev + Income)); setIncome(0); }}>Deposit</button>
        </div>
      </div>
    </>
  );
};
