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
                        <div key={key} className="transmap">
                            <div style={{ color: tdata.from }}> {tdata.source}</div>
                            <div style={{ color: tdata.from }}>{tdata.amount}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}


