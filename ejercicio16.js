/*
Ejercicio 16

Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

Puedes usar este array:
*/

let placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

function Lugares(param) {
  for (let Lugar of placesToTravel) {
    console.log(Lugar)
  }
}
Lugares(placesToTravel)
