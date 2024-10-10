import React, { useState } from 'react'
import Suma from '../Entidades/suma'
import Resta from '../Entidades/resta'
import Multiplicar from '../Entidades/multiplicar'
import Producto_Cruz2D from '../Entidades/productoCruz'
import Producto_Cruz3D from '../Entidades/productoCruz3D'
import suma from '../Entidades/suma'




function Operaciones(){
    let resultadoSuma = Suma(4, 9)
    let resultadoResta = Resta(3,6)
    let resultadoMultiplicacion = Multiplicar(5,2)
    const[valor, setValor] = useState(0)
    //setValor = 25
    const[miArreglo2D, actualizarArreglo2D] = useState(Producto_Cruz2D())
    const[miArreglo3D, actualizarArreglo3D] = useState(Producto_Cruz3D)

    const incremetar = () =>{
        setValor(valor + 1)
    }
    return(
        <div>
            <h1>Arriba Newton papa!</h1>
            <h2>pura **** relatividad</h2>
            {/*<input value={valor}onChange={(evento)=> setValor(evento.target.value)}></input>
            //input controlado
            <span>El valor es:{valor}</span>*/}
            
            <p>Ejemplo de useState basico</p>
            <p>contador: {valor}</p>
            <button onClick={incremetar}>Incrementar</button>

            <p>Manipulando el input</p>
            <input value={valor} onChange={(evento)=> setValor(evento.target.value)}></input>
            <span>el valor es: {valor}</span>
      
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