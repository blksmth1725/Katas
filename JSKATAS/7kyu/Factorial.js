//Your Task is to create a function that takes a number and gets the factorial value
//from it.

function Factorial(num) {
    let result = num
    if (num === 0 || num === 1) return 1
    while (num > 1) {
        num--
        result *= num
    }
    return result
}

console.log(Factorial(10))
console.log(Factorial(5))
console.log(Factorial(4))
console.log(Factorial(12))
console.log(Factorial(7))
console.log(Factorial(1))
console.log(Factorial(0))