import React from 'react'
import Entrada from '../components/Entrada'

function RegistroEntrada() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Registrar Ingreso</h1>
            <p className="mt-3 mb-5">Ingrese el número de placa</p>
            <Entrada />
        </>
    )
}

export default RegistroEntrada