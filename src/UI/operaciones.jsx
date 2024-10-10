import React, { useState } from 'react'
import Suma from '../Entidades/suma'
import Resta from '../Entidades/resta'
import Multiplicar from '../Entidades/multiplicar'
import Producto_Cruz2D from '../Entidades/productoCruz'
import Producto_Cruz3D from '../Entidades/productoCruz3D'
import suma from '../Entidades/suma'




function Operaciones(){
    const TraerSuma = () => {
        const xUno = parseFloat(document.getElementById('obtener_x_uno').value)
        const yUno = parseFloat(document.getElementById('obtener_y_uno').value)
        const xDos = parseFloat(document.getElementById('obtener_x_dos').value)
        const yDos = parseFloat(document.getElementById('obtener_y_dos').value)
        let resultadoX = suma(xUno,xDos)
        let resultadoY = suma(yUno, yDos)
        document.getElementById('resultado').innerText = `Resultado: (${resultadoX},${resultadoY}) `
    }
    let resultadoSuma = Suma(4, 9)
    let resultadoResta = Resta(3,6)
    let resultadoMultiplicacion = Multiplicar(5,2)
    const[miArreglo2D, actualizarArreglo2D] = useState(Producto_Cruz2D())
    const[miArreglo3D, actualizarArreglo3D] = useState(Producto_Cruz3D)
    return(
        <div>
            <p>Ingresa los valores para X1 de tu primer vector</p>
            <input id='obtener_x_uno' type='number'></input>
            <p>Ingresa los valores para Y1 de tu primer vector</p>
            <input id='obtener_y_uno' type='number'></input>
            <p>Ingresa los valores para X2 de tu primer vector</p>
            <input id='obtener_x_dos' type='number'></input>
            <p>Ingresa los valores para Y2 de tu primer vector</p>
            <input id='obtener_y_dos' type='number'></input>
            <button onClick={TraerSuma}>SUMAR</button>
            <p id='resultado'></p>



            <p>El resultado de la suma es: {resultadoSuma}</p>
            <p>El resultado de la resta es: {resultadoResta}</p>
            <p>El resultado de la multiplicacion es: {resultadoMultiplicacion}</p>
            <p>El resultado del producto cruz de 2 dimensiones es: {miArreglo2D[0]}i + {miArreglo2D[1]}j + {miArreglo2D[2]}k
            </p>
            <p>El resultado del producto cruz de 3 dimensiones es: {miArreglo3D[0]}i + {miArreglo3D[1]}j + {miArreglo3D[2]}k </p>
        </div>
    )
}
export default Operaciones