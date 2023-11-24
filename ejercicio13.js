/*
Ejercicio 13

Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Jessica',
  'Peggy',
  'Marc'
]
let nombre = 'Xabier'
let ausente = 0
function finderName(param) {
  for (let i = 0; i < param.length; i++) {
    if (nombre === param[i]) {
      console.log(
        nombre,
        ' una coincidencia encontrada en posición',
        i + 1,
        'de la Lista'
      )
    } else {
      ausente++
      // console.log(ausente)
      //  console.log(param.length)
    }
  }
  if (ausente === param.length) {
    console.log('No hay coincidencias con el nombre buscado')
    ausente = 0
  }
}

finderName(nameFinder)
