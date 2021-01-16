import React from "react";

export const Income:React.FC <prop>= ()=>
  (
    <>
      <h2 style={{ color: "darkgreen" }} className="heading">
        Income
      </h2>
      <div className="innerb1">
        <div className="input"> 
          <input type="number" placeholder="Diposit amount" required />
          <input type="Text" placeholder="Source of Income" required />
          <button>Deposit</button>
        </div>
      </div>
    </>
  );

