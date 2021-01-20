import React, { useContext } from 'react'
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
                            <h3 style={{ color: tdata.from }}> {tdata.source}</h3>
                            <h3 style={{ color: tdata.from }}>{tdata.amount}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}


