const reverse = (x) => {
    const conv = String(x).split('').filter(a => a !== '0' && a !== '-').reverse().join('')
    return x < 0 ? Number(`-${conv}`) : x === 0 ? 0 : Number(conv)
};


console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
console.log(reverse(10))
console.log(reverse(100))
console.log(reverse(1000))
console.log(reverse(10000))
console.log(reverse(100000))
console.log(reverse(1000000))
console.log(reverse(10000000))
console.log(reverse(100000000))
console.log(reverse(1534236469))