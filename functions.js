function getFlower(thing) {
 return thing.toUpperCase()
}
var result = getFlower("blomst")
console.log(result)

function getNumber(a, b) {
  return a * b
}
var number = getNumber(3, 4)
console.log(number)

function helloWorld() {
  console.log("Hello World!")
}
helloWorld()

var hello = 'nisse'
function bye(car, town) {
  return [car, town]
}
console.log(hello)
var bilby = bye('toyota', 'amsterdam')
console.log(bilby)

const car = ["Toyota", "Volvo", "BMW"]
const town = ["Amsterdam", "Berlin", "Paris"]

// Regular function
function regularFunction() {
  console.log('Hello')
}

// Variable function
var regularFunction = function() {

}

// ES6 function (fat arrow), no parameters
const newFunction = () => {

}

// with 1 parameter
const newFunction2 = (a) => {

}

// Parenthesis optional with 1 parameter only
const newFunction3 = a => {

}

// with 2 parameters
const newFunction4 = (a, b) => {

}

list = [1, 2, 3]

list.map((number) => number + 1)
list.map(number => number + 1)
list.map(number => {
  return number + 1
})
list.map(function(number) {
  return number + 1
})

// All three are equivalent ^

function something(fn, a) {
  if (typeof fn == 'function') {
    fn()
    // fn.call()
  }

  return function() {
    console.log('inner function', a)
  }
}

var result = something(function() {
  console.log('hello ingeborg')
}, 17)

console.log({ result })

result()

