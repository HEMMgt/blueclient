import React from 'react'
import useSelect from '../hooks/useSelect'

const Factura = () => {
    return (
        <>
            
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Facturas generadas
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Número de Placa
                </th>
                <th scope="col" class="py-3 px-6">
                    Cantidad de Minutos
                </th>
                <th scope="col" class="py-3 px-6">
                    Monto
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    O986POO
                </th>
                <td class="py-4 px-6">
                    10850
                </td>
                <td class="py-4 px-6">
                    Q335.05
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Pagar</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    P098UYT
                </th>
                <td class="py-4 px-6">
                    91
                </td>
                <td class="py-4 px-6">
                    Q35.55
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Pagar</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    NEWHEMM
                </th>
                <td class="py-4 px-6">
                    989
                </td>
                <td class="py-4 px-6">
                    105.10
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Pagar</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

        </>
    )
}

export default Factura