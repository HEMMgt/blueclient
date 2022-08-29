import React from 'react'
import Formulario from '../components/Formulario'

function NuevoVehiculo() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Vehiculo</h1>
            <p className="mt-3 mb-5">Llena los siguientes campos para registrar un vehiculo</p>
            <Formulario />
        </>
    )
}

export default NuevoVehiculo