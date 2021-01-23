import React from "react";

export interface transections {
    amount: number,
    from: string,
    source: string,
}

export interface abc {
    Total: number,
    Income: number,
    Expence: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>,
    setIncome: React.Dispatch<React.SetStateAction<number>>,
    setExpence: React.Dispatch<React.SetStateAction<number>>,
    transectionData: transections[],
    settransectionData: React.Dispatch<React.SetStateAction<transections[]>>


}
let ab: abc =
{
    Total: 0,
    Income: 0,
    Expence: 0,
    setTotal: (Total: React.SetStateAction<number>) => null,
    setIncome: (Income: React.SetStateAction<number>) => null,
    setExpence: (Expence: React.SetStateAction<number>) => null,
    settransectionData: (transectionData: React.SetStateAction<transections[]>) => null,
    transectionData: [],
}
export const contaxt = React.createContext<abc>(ab);
export const Context: React.FC = ({ children }) => {

    const [Total, setTotal] = React.useState<number>(0);
    const [Income, setIncome] = React.useState<number>(0);
    const [Expence, setExpence] = React.useState<number>(0);
    const [transectionData, settransectionData] = React.useState<transections[]>([]);
    
    return (
        <contaxt.Provider value={{ Total, Income, Expence, setTotal, setIncome, setExpence, transectionData, settransectionData }}>
            {children}
        </contaxt.Provider>

    )
}
