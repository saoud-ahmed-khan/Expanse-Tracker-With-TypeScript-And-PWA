import React from "react";
export const contaxt=  React.createContext();
export const Context:React.Fc<props> = ({children}) =>

{
const [Total, setTotal] = React.useState <number> (0);
const [Income, setIncome] = React.useState(1000000000);
const [Expence, setExpence] = React.useState();
return (
    <contaxt.Provider value={{Total , setTotal,Income,setIncome,Expence, setExpence}}>
        {children}
    </contaxt.Provider>
    

)
}
