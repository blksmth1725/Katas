const hasDups = (a) => {
    const nSet = new Set()
    for(const num of a) {
        if(nSet.has(num)) return true
        nSet.add(num)
    }
    return false
}

const a1 = [1,22,22,3,4,5,6,6]
const a2 = [1,2,3,4,5,6,7,8]
const a3 = [99,9,9,99,8,8]
const a4 = [1,3,4,6,8,10,11]

console.log(hasDups(a1))
console.log(hasDups(a2))
console.log(hasDups(a3))
console.log(hasDups(a4))