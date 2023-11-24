const duplicates = [
  'Agua',
  'Agua',
  'Vino',
  'Trina',
  'Agua',
  'Vino',
  'Fanta',
  'Tinto',
  'Casera',
  'Tinto',
  'Casera',
  'Coca Cola',
  'Orangina'
]
let varA = 0
let varB = varA + 1
console.log(duplicates)
//console.log('longitud array', duplicates.length)
function removeDuplicates(param) {
  while (varA < param.length) {
    // console.log('VarA', varA, param[varA])
    if (varB < param.length) {
      //console.log('VarB', varB, param[varB])
      if (param[varA] === param[varB]) {
        // console.log(varA, param[varA], '-------', varB, param[varB])
        param.splice(varB, 1)
        console.log(param, '--------------------------------')
        // console.log('varB es', varB)
        varB = varA + 1
        // console.log('varB pasa a', varB)
        // console.log('Nueva longitud array', param.length)
      } else {
        varB++
      }
    } else {
      varA++
      varB = varA + 1
    }
    // console.log(param.length)
  }
}

removeDuplicates(duplicates)
