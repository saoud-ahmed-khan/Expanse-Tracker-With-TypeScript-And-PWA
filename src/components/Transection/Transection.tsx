import React from 'react'
import { contaxt } from "../Context";
export const Transection: React.FC = () => {
    const data = React.useContext(contaxt)
    const { transectionData } = data
    const key: number = 0
    return (
        <div className="transcontainer">

            <div className="transout">
                <div>Details</div>
                <div>Transection Amount</div>
            </div>
            {
                transectionData.map((tdata) => {
                    return (
                        <div key={key} style={{ borderLeft: `5px solid ${tdata.from}` }} className="transmap">
                            <div style={{ color: tdata.from }}> {tdata.source}</div>
                    <div style={{ color: tdata.from }}>{(tdata.from==="darkgreen") ? `$ ${tdata.amount}` : `-$ ${tdata.amount}`}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}


