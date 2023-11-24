/*
Ejercicio 14

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:


*/

//let array = []

//console.log(counterWords.length)
//console.log(array.length)
/*
function repeatCounter(param) {
  console.log(param)
  while (param.length > 0) {
    for (let i = arrayPos + 1; i < param.length; i++) {
      if (param[arrayPos] === param[i + 1]) {
        //  console.log('son iguales')
        contador++
        console.log(param[arrayPos], '=', param[i - 1], contador, 'repeticion')

        param.splice(i + 1, 1)
        console.log(param)
        // console.log(param[i])
        console.log(param.length)
      }
    }
    console.log('---------------')
    console.log(param.length)

    param.splice(0, 1)
    contador = 0
    console.log(param)
    console.log(param.length)
  }
}
*/
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

let contador = 1
let cabezal = 0
function repeatCounter(param) {
  param[param.length + 1] = ''
  for (let i = 0; i < param.length - 1; i++) {
    for (let j = i + 1; j < param.length; j++) {
      if (param[i] === '') {
      } else {
        if (param[i] === param[j]) {
          // console.log(i, param[i], j, param[j])
          contador++
          param[j] = ''
        }
      }
    }
    if (contador > 1) {
      console.log('Hay', contador, '"', param[i], '"', 'en este array')
      console.log('-------')
    }
    param[i] = ''

    contador = 1
    cabezal++
  }
}

repeatCounter(counterWords)
