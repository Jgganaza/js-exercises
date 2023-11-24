/*
Ejercicio 9
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

*/
/*
const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(miArray) {
  //let total = 0 // Variable contador
  for (const number of numbers) {
    //total = total + items[item]
    console.log(numbers[number])
  }
  //console.log(total)
  // insert code
}
sumAll(numbers)
*/

const iterable = [1, 2, 3, 5, 45, 37, 58]

function sumAll(miArray) {
  let total = 0
  for (const value of iterable) {
    total = total + value
    //console.log(value) // La formula for of recorre automaticamente todos los registros del array accediendo diretamente a su valor. Por eso aquí no hay que poner iterable[value], porque si el value = 300 en la posición 0 del array, intentaría ir a la posición 300 del array que no existe. Por eso daba indefinido.
  }
  console.log(total)
}
sumAll(iterable)
