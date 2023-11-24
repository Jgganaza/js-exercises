const duplicates = [
  'calamares',
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
  'sushi',
  'calamares',
  'vino'
]

function removeDuplicates(param) {
  let arrayPosicion = []
  let marcaPos = 0

  for (var i = 0; i < param.length - 1; i++) {
    console.log('i -----', i)
    for (var j = i + 1; j < param.length; j++) {
      console.log('j', j)
      if (param[i] === param[j]) {
        console.log('iguales')

        arrayPosicion[marcaPos] = param[i]
        marcaPos++
        console.log(arrayPosicion[i], '', j)
      }
    }
  }
  console.log(arrayPosicion)

  for (var a = 0; a < arrayPosicion.length; a++) {
    for (var j = 0; j < param.length; j++) {
      if (arrayPosicion[a] === param[j]) {
        param.splice(j, 1)
        if (a > 0) {
          a--
          j = 0
        }
        // console.log(a, j, 'iguales')
      }
    }
  }

  // console.log('param', param)
  //  console.log('arrayPosicion', arrayPosicion)
  let z = param.length
  for (var k = 0; k < arrayPosicion.length; k++) {
    //  console.log(param[k])
    //  console.log(arrayPosicion[k])
    //  console.log(param.length)
    param[z] = arrayPosicion[k]
    z++
  }

  console.log(param)
}
removeDuplicates(duplicates)
/**** EL SCRIPT FUNCIONA SÓLO CON LOS ELMENTOS DATOS. SI AÑADIMOS MÁS DEJA DE FUNCIONAR CORRECTAMENTE. ¿POR QUE? */
