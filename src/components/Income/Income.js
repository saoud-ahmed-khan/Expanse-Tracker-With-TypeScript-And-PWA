import React from "react";

export function Income(props) {
  return (
    <>
        <h2 style={{color:"darkgreen"}} className="heading">Income</h2>
      <div className="innerb1">
          <input type="number" placeholder="Diposit amount" required/>
       <input type="Text" placeholder="Source of Income" required/>
       <button>Deposite</button>

      </div>
    </>
  );
}
