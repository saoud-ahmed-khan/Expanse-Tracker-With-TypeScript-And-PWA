import React from "react";

export interface abc {
    Total: number,
    Income: number,
    Expence: number,
    setTotal: React.Dispatch<React.SetStateAction<number >>,
    setIncome: React.Dispatch<React.SetStateAction<number>>,
    setExpence: React.Dispatch<React.SetStateAction<number>>,
    transectionData:{amount:number , from:string,source:string }[],


}
const ab:abc=
{
Total:0,
Income:0,
Expence:0,
setTotal:(Total:React.SetStateAction<number>)=> null,
setIncome:(Income:React.SetStateAction<number>)=> null,
setExpence:(Expence:React.SetStateAction<number>)=> null,
transectionData:[{amount:0,from:"",source:""}]
}
let transectionData :[{amount:number , from:string,source:string }];
export const contaxt = React.createContext<abc>(ab);
export const Context: React.FC = ({ children }) => {
   
    const [Total, setTotal] = React.useState<number>(0);
    const [Income, setIncome] = React.useState<number>(0);
    const [Expence, setExpence] = React.useState<number>(0);
    return (
        <contaxt.Provider value={{Total,Income,Expence,setTotal,setIncome,setExpence , transectionData}}>
            {children}
        </contaxt.Provider>


    )
}
