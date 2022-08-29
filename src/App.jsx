import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoVehiculo from './paginas/NuevoVehiculo'
import RegistroEntrada from './paginas/RegistroEntrada'
import RegistroSalida from './paginas/RegistroSalida'
import VerFacturas from './paginas/VerFacturas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" index  element={<Inicio />} /> 
          <Route path="vehiculos/nuevo"  element={<NuevoVehiculo />} /> 
          <Route path="registros/entrada"  element={<RegistroEntrada />} /> 
          <Route path="registros/salida"  element={<RegistroSalida />} /> 
          <Route path="registros"  element={<NuevoVehiculo />} /> 
          <Route path="facturacion"  element={<VerFacturas />} /> 
          <Route path="facturacion/generar"  element={<NuevoVehiculo />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
