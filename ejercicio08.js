const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(miArray) {
  let iterador = miArray.length
  let masLarga = -1
  let totalLargas = 0
  let redFlag = true
  //console.log(iterador)
  for (var i = 0; i < iterador; i++) {
    if (miArray[i].length >= masLarga) {
      masLarga = miArray[i].length
      //console.log(masLarga)
    }
  }

  for (var i = 0; i < iterador; i++) {
    if (miArray[i].length == masLarga) {
      totalLargas++
      // console.log(totalLargas)
    }
  }
  if (totalLargas > 1) {
    console.log(
      'En este array las palabras más largas comparten igual número de letras, y la que aparece primero es:'
    )
    for (var i = 0; i < iterador; i++) {
      if (miArray[i].length === masLarga) {
        console.log(miArray[i])
        break
      }
    }
  } else {
    console.log('La palabra más larga es:')
    for (var i = 0; i < iterador; i++) {
      if (miArray[i].length === masLarga) {
        console.log(miArray[i])
      }
    }
  }
}

findLongestWord(avengers)
