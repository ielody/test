console.log('Hello')
var hello = 6
console.log(hello)
console.log('timeout')
var a = 3
var b = 4
x = a + b
console.log(x)
var person = "John Doe",
carName = "Volvo",
price = 200
console.log(person,',', carName,',', price)

const cars = ["Saab", "Volvo", "BMW"]
console.log(cars)
cars[1] = "Toyota"
console.log(cars)
cars.push("Audi")
console.log(cars)
cars[2] = "Audi"
console.log(cars)

const car = {type:"Fiat", model:"500", color:"white"}
console.log(car)
car.color = "red"
console.log(car.color)

var description = " "
var person = {firstname:"Isa", lastname:"Ibisa", age:52}
for (var x in person) {
  description += person[x] + " "
  console.log(description)
}

var z = 299090
var y = 35345
var time = y + z
console.log(time)

var x = 1003
var y = 29933
y *= x
console.log(y)

var x = 1003
var y = 29933
y %= x
console.log(y)
y **= x
console.log(y)

var x = 12
var y = 4
y **= x
console.log(y)

//var text1 = "Det er fint"
//var text2 = "ute i dag"
//console.log(text1 + ' ', text2)

var text1, text2 = ("Det er fint", "ute i dag")
console.log(text1 + ' ', text2)

var x = 5 + 5
var y = "5" + 5
var z = "Jesus" + 5
console.log(x, y, z)

let flower = 'rose'
let tree = 'maple'
console.log(flower, tree)


const constant = 'constant'
console.log({ constant })

// Not allowed
// constant = 'change'

var a = 2
a = 4

let c = 6
c = 8
