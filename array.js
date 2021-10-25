//const car = ["Toyota", "Volvo", "BMW"]
//const town = ["Amsterdam", "Berlin", "Paris"]
// console.log(car, town)
// console.log(car[0], town[2])

//let array = [4,5,"cake","muffin",7,"cupcake"]
//slice
//let newArray = array.slice(2,4)
/// console.log(newArray)

//splice-remove
// array.splice(0,2)
// array.splice(2,1)
// console.log(array)

//splice add
// array.splice(4, 5, 'pain au chocolat', 'cookies')
// console.log(array)

//split string
// var anArray = [1, 2, 3, 4, 5]

// // Filter
// var biggerThanThree = anArray.filter(function(val) {
//   return val > 3
// })

// // console.log(biggerThanThree)

// // Find
// var firstMatch = anArray.find(function(val) {
//   return val > 3
// })

// console.log(firstMatch)

// let myString = anArray.toString()
// console.log({ myString })


// let newMyString = anArray.join(',')
// console.log({ newMyString: newMyString })

// function calculateSum(str) {
//   var calculatedSum = 0
//   var numbers = str
//     .split(',')
//     .map(function(x) { return parseInt(x) })

//   numbers.forEach(function(n) {
//     calculatedSum += n
//   })
//   return calculatedSum
// }

// var sum = calculateSum('1,2,3,4,5')
// console.log({ sum })

// var sum2 = calculateSum('6,7,8')
// console.log({ sum2 })

// var commaSeparated = '1,2,3,4,5'
// console.log({ commaSeparated })
// var commaArray = commaSeparated.split(',')
// console.log({ commaArray })

// function mapper(item) {
//   console.log(item)
//   return parseInt(item)
// }

// var numberArray = commaArray.map(mapper)

// var numberArray = commaArray.map(function(item) {
//   console.log(item)
//   return parseInt(item)
// })

//console.log({ numberArray })

// var sum = 0
// numberArray.forEach(function(number) {
//   sum += number
// })

// console.log({ sum })

// Konvertere til tall
// var str = '55'
// console.log(typeof str)
// console.log(str + str)

// var n = parseInt(str)

// console.log({ n })
// console.log(typeof n)
// console.log(n + n)

// let kulArray = myString.split(",", 2)
// console.log(kulArray)

//var a = { hei: 'nei', hadet: 'ja' }
// Legger a inn i en ny variabel
//var b = a
// Endrer på b
//b.hei = 'kanskje'
// console.log(a)

// var longArray = [1,2,3,4,5,6,7,8,9,10]
// var toSlice = longArray.slice(0, 5)
//console.log(toSlice)

//concat-merging arrays

/*const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2)
console.log(array3)

const letters = ['sol', 'skinn', 'regn']
const numbers = [23, 43, 55]

const numletters = letters.concat(numbers)
console.log(numletters)*/

/*const num1 = [[1]]
const num2 = [2, [3]]

const numbers1 = num1.concat(num2)
//console.log(numbers1)

num1[0].push(65)
//console.log(numbers1)

num1[0].push(67, 'hai')
//console.log(numbers1)

num1[0].push('iee', 'yoshi')
console.log(numbers1)*/

//copyWithin
/*const array1 = ['eple', 'appelsin', 'fersken', 'banan', 'mango']
console.log(array1.copyWithin(0,2,4))
console.log(array1.copyWithin(1,2,3))
console.log(array1.copyWithin(-2,-3,-1))

//key/value pairs
const arrayA = ['a', 'b', 'c']
const iterator1 = arrayA.entries()
console.log(iterator1.next().value)

const a = ['oslo','bergen','stavanger']
for (const [index, element] of a.entries())
  console.log(index, element)

var b = ['gresshoppe','champagne','mynte']
var iterator = b.entries()

for (let e of iterator) {
  console.log(e)
}*/

//every- test each element
/*const isBelowThreshold = (currentValue) => currentValue < 98
const array2 = [1, 30, 15, 93, 95, 83]
console.log(array2.every(isBelowThreshold))

const isAboveLimit = (currentValue) => currentValue > 111
const array3 = [300, 3, 150, 13, 95, 83]
console.log(array2.every(isAboveLimit))*/


let frukt = ['eple', 'appelsin', 'fersken', 'banan', 'mango']
console.log(frukt.length)

//access items using index pos.
/*let first = frukt[0]
let last = frukt[frukt.length - 1]
*/

let nyLengde = frukt.push('mandarin')
console.log(nyLengde)

let last1 = frukt.pop('mandarin')
console.log(frukt)
console.log(last1)















