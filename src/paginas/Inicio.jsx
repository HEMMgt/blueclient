import React from 'react'
import Login from '../components/Login'

function Inicio() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Ingreso al sistema</h1>
            <p className="mt-3 mb-5">Llena los siguientes campos para ingresar</p>
            <Login />
        </>
    )
}

export default Inicio