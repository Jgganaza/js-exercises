/*
Ejercicio 25

Usa un bucle p

*/

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let total = 0
for (const product of products) {
  total = total + product.sellCount
}
//console.log(products.length)
console.log('La suma de todos los articulos vendidos es de', total, 'productos')

console.log('La media de ventas por artículo es', total / products.length)
