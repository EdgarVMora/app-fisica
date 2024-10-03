import React, { useState } from 'react'
import Suma from '../Entidades/suma'
import Resta from '../Entidades/resta'
import Multiplicar from '../Entidades/multiplicar'
import Producto_Cruz from '../Entidades/productoCruz'




function Operaciones(){
    const[miArreglo, actualizarArreglo] = useState(Producto_Cruz())
    let resultadoSuma = Suma(4, 9)
    let resultadoResta = Resta(3,6)
    let resultadoMultiplicacion = Multiplicar(5,2)
    //let resultadoProductoCruz = Producto_Cruz()
    //i {miArreglo[0]} + j {miArreglo[1]} + k {miArreglo[2]}
    return(
        <div>
            <p>El resultado de la suma es: {resultadoSuma}</p>
            <p>El resultado de la resta es: {resultadoResta}</p>
            <p>El resultado de la multiplicacion es: {resultadoMultiplicacion}</p>
            <p>El resultado de producto cruz de 2 dimensiones es:  
            {miArreglo[0]}i + {miArreglo[1]}j + {miArreglo[2]}k
            </p>
        </div>
    )
}
export default Operaciones