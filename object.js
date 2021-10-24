var car = { name: 'Opel', year: 1978 }
// Lookup via string
// var car = { 'name@4.4': 'Opel', year: 1978 }
// car['name@4.4']

console.log({ car })

console.log(car.name)
console.log(car.year)

var t = 'year'
console.log(car[t])

var list = [
  { name: 'Mercedes', year: 2020 },
  { name: 'Kia', year: 2022 },
  { name: 'Tesla', year: 2019 },
  { name: 'BMW', year: 2019 }
]

console.log({ list })

// var first = list[0]
// console.log({ first })
// var firstSlice = list.reverse().slice(1, 3)
// console.log({ firstSlice })

// all cars from 2019
var allCarsFrom2019 = list.filter(function(car) {
  return car.year == 2019
})

console.log({ allCarsFrom2019 })

