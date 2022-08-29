import React from 'react'
import Facturas from '../components/Facturas'

function VerFacturas() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Facturas generadas</h1>
            <p className="mt-3 mb-5">Puede realizar el pago presionando el link correspondiente</p>
            <Facturas />
        </>
    )
}

export default VerFacturas