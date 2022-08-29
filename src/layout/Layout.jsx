import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    const urlActual = location.pathname
    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white ">BlueMedical - Control Parqueo</h2>
                <nav className="mt-10">
                    <Link
                        className={`${urlActual === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/"
                    >Inicio</Link>
                    <Link
                        className={`${urlActual === '/vehiculos/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/vehiculos/nuevo"
                    >Nuevo vehiculo</Link>
                    <Link
                        className={`${urlActual === '/registros/entrada' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/registros/entrada"
                    >Registrar entrada</Link>
                    <Link
                        className={`${urlActual === '/registros/salida' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/registros/salida"
                    >Registrar salida</Link>
                    <Link
                        className={`${urlActual === '/facturacion/generar' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/facturacion/generar"
                    >Generar facturación</Link>
                    <Link
                        className={`${urlActual === '/facturacion' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to="/facturacion"
                    >Ver facturación</Link>
                </nav>
            </div>

            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout