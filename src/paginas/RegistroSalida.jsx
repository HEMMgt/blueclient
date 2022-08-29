import React from 'react'
import Salida from '../components/Salida'

function RegistroSalida() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Registrar Salida</h1>
            <p className="mt-3 mb-5">Ingrese el número de placa</p>
            <Salida />
        </>
    )
}

export default RegistroSalida