const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let total = 0
  for (const number of numbers) {
    total = total + number
  }
  total = total / numbers.length
  console.log(total)
}
average(numbers)
