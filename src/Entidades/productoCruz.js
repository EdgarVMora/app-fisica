import multiplicar from "./multiplicar"

let matrizUno = [2,4]
let matrizDos = [2,3]
const matrizK = [0, 0]
let a


function cruz(){
    /*
                  i j k
       matrizUno  2,4,0
        matrizDos 2,3,0
    */
    let i = ((matrizUno[1]*matrizK[1])-(matrizDos[1]*matrizK[0]))
    console.log(i)
    let j = ((multiplicar(matrizUno[0],matrizK[1]))-(multiplicar(matrizDos[1],matrizK[0])))
    console.log(j)
    let k = ((multiplicar(matrizUno[0],matrizDos[1]))-(multiplicar(matrizDos[0],matrizUno[1])))
    console.log(k)
    //i0 + j0 -2K
    console.log(i,"i", " + ", j,"j",k,"k")
    a = [i,j,k]
    return a
     
}

export default cruz
