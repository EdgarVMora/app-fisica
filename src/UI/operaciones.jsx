import Suma from '../Entidades/suma'
import Resta from '../Entidades/resta'
import Multiplicar from '../Entidades/multiplicar'
import Producto_Cruz from '../Entidades/productoCruz'

function operaciones(){
    let resultadoSuma = Suma(4, 9)
    let resultadoResta = Resta(3,6)
    let resultadoMultiplicacion = Multiplicar(5,2)
    let resultadoProductoCruz = Producto_Cruz()
    return(
        <div>
            <p>El resultado de la suma es: {resultadoSuma}</p>
            <p>El resultado de la resta es: {resultadoResta}</p>
            <p>El resultado de la multiplicacion es: {resultadoMultiplicacion}</p>
        </div>
    )
}
export default operaciones