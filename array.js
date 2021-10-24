const car = ["Toyota", "Volvo", "BMW"]
const town = ["Amsterdam", "Berlin", "Paris"]
console.log(car, town)
console.log(car[0], town[2])

let array = [4,5,"cake","muffin",7,"cupcake"]
//slice
let newArray = array.slice(2,4)
console.log(newArray)

//splice-remove
array.splice(0,2)
array.splice(2,1)
console.log(array)

//splice add
array.splice(4, 5, 'pain au chocolat', 'cookies')
console.log(array)

//split string
var anArray = [1, 2, 3, 4, 5]
let myString = anArray.toString()
let kulArray = myString.split(",", 2)
console.log(kulArray)

var a = { hei: 'nei', hadet: 'ja' }
// Legger a inn i en ny variabel
var b = a
// Endrer på b
b.hei = 'kanskje'
console.log(a)

var longArray = [1,2,3,4,5,6,7,8,9,10]
var toSlice = longArray.slice(0, 5)
console.log(toSlice)