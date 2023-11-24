/*
1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

*/
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
/*
1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
*/
avengers[0] = 'IRONMAN'
console.log(avengers[0])
/*
1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
*/
console.log(avengers.length)

/*
1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
*/

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty')
rickAndMortyCharacters.push('Summer')
console.log(rickAndMortyCharacters.length)
let ultimo = rickAndMortyCharacters.length - 1
console.log(rickAndMortyCharacters[ultimo])

/*
1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/
const rickAndMorty = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez']
ultimo = rickAndMorty.length - 1
rickAndMorty.pop(ultimo)
ultimo = rickAndMorty.length - 1
console.log(rickAndMorty[0])
console.log(rickAndMorty[ultimo])

/*
1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

var listaArray = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez']

listaArray.splice(1, 1)
/* EL PRIMER NÚMERO INDICA LA POSICIÓN DESDE DONDE SE CORTA Y EL SEGUNDO  INDICA CUÁNTOS ELEMENTOS SE BORRAN */
console.log(listaArray)
