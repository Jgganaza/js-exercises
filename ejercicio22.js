/*
Ejercicio 22

Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
*/
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  /*  { name: 'Burger', isVegan: false },
  { name: 'Burger', isVegan: false },
  { name: 'Burger', isVegan: false },*/
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
let marcadorFrutas = 0
for (const food of foodSchedule) {
  if (food.isVegan === false) {
    if (marcadorFrutas < fruits.length) {
      food.name = fruits[marcadorFrutas]
      // console.log(fruits[marcadorFrutas])
      food.isVegan = true
      marcadorFrutas++
    } else {
      console.log('No más frutas disponibles. Volvemos a repetir ciclo')
      marcadorFrutas = 0
      food.name = fruits[marcadorFrutas]
      food.isVegan = true
    }
  }
}

console.log('MENU MMODIFICADO ----------------')
console.log(foodSchedule)
