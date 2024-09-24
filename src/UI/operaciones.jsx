import Suma from '../Entidades/suma'
import Resta from '../Entidades/resta'

function operaciones(){
    let resultadoSuma = Suma(4, 9)
    let resultadoResta = Resta(3,6)
    return(
        <div>
            <p>El resultado de la suma es: {resultadoSuma}</p>
            <p>El resultado de la resta es: {resultadoResta}</p>
        </div>
    )
}
export default operaciones