import React, { useContext } from "react";
import { contaxt } from "../Context";

export const Total: React.FC<prop> = () => {
  const dataa=useContext(contaxt)
  const {Total}=dataa
  return (
    <>
      <h1 style={{ color: "darkcyan" }} className="heading">
        Total
      </h1>
      <div className="innerb1">
  <div className="totalText"> $ {Total}</div>
      </div>
    </>
  );
};
