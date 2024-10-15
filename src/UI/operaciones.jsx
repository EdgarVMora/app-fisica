import React, { useState } from 'react'
import Suma from '../Entidades/suma'
import Resta from '../Entidades/resta'
import Multiplicar from '../Entidades/multiplicar'
import Producto_Cruz2D from '../Entidades/productoCruz'
import Producto_Cruz3D from '../Entidades/productoCruz3D'
import suma from '../Entidades/suma'




function Operaciones(){
    const[xUno, actualizarXUno]=useState(0)
    const[yUno, actualizarYUno]=useState(0)
    const[xDos, actualizarXDos]=useState(0)
    const[yDos, actualizarYDos]=useState(0)

    const[resultadoXTres, actualizarXTres]=useState(0)
    const[resultadoYTres, actualizarYTres]=useState(0)

    //let resultadoSuma = Suma(xUno, yUno)

    const sumaVector = () => {
        actualizarXTres(Suma(xUno, xDos))
        actualizarYTres(Suma(yUno, yDos))
        //return resultadoSuma
    }
    
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
            <p>Ingresa el valor para xUno</p>
            <input value={xUno} type='number' onChange={(eventoSuma) => actualizarXUno(eventoSuma.target.value)}/>
            <p>Ingresa el valor para yUno</p>
            <input value={yUno} type='number' onChange={(eventoSuma) => actualizarYUno(eventoSuma.target.value)}/><br/>
            <p>Aqui esta tu primer vector: ({xUno},{yUno})</p>
            <p>Ingresa el valor de xDos</p>
            <input value={xDos} type='number' onChange={(eventoSuma)=> actualizarXDos(eventoSuma.target.value)} />
            <p>Ingresa el valor de yDos</p>
            <input value={yDos} type='number' onChange={(eventoSuma)=> actualizarYDos(eventoSuma.target.value)} />
            <p>Aqui esta tu segundo vector: ({xDos},{yDos})</p>

            <button onClick={sumaVector}>Suma</button>
            <p>Aqui esta la suma de tus vectores. V3: ({resultadoXTres},{resultadoYTres})</p>
            <p>_______________________</p>
            
            
            <p>El resultado de la resta es: {resultadoResta}</p>
            <p>El resultado de la multiplicacion es: {resultadoMultiplicacion}</p>
            <p>El resultado del producto cruz de 2 dimensiones es: {miArreglo2D[0]}i + {miArreglo2D[1]}j + {miArreglo2D[2]}k
            </p>
            <p>El resultado del producto cruz de 3 dimensiones es: {miArreglo3D[0]}i + {miArreglo3D[1]}j + {miArreglo3D[2]}k </p>
        </div>
    )
}
export default Operaciones