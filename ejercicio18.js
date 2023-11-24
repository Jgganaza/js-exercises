/*
Ejercicio 18

Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
*/

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
console.log(placesToTravel)
console.log(' Tras eliminación nos queda: ----------------------')
for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11) {
    placesToTravel.splice(i, 1)
  }

  if (placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1)
  }
}
console.log(placesToTravel)
/*
for (const place of placesToTravel) {
  console.log(place)
}
console.log('-----------------------------------')*/
/*
for (const place of placesToTravel) {
  if (place.id == 11 || place.id == 40) {
    // delete placesToTravel.place
    console.log(placesToTravel[0])
    //placesToTravel.splice(place - 1, 1)
  }
}*/
/*
for (const place of placesToTravel) {
  console.log(place)
}
*/
