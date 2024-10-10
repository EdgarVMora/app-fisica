import multiplicar from "./multiplicar"

let matrizUno = [2, 3, 4]
let matrizDos = [3, 5, 7]
let matrizTres

function cruz3D (){
    /*logica de mi matriz
    i j k
    2 3 4 
    3 5 7*/ 
    
    let i = (multiplicar(matrizUno[1], matrizDos[2]))-(multiplicar(matrizDos[1],matrizUno[2]))
    let j = (multiplicar(matrizUno[0],matrizDos[2]))-(multiplicar(matrizDos[0],matrizUno[2]))
    let k = (multiplicar(matrizUno[0],matrizDos[1]))-(multiplicar(matrizDos[0],matrizUno[1]))
    matrizTres = [i, j, k]
    return matrizTres
}

export default cruz3D