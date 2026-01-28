const a1 = [1,2,3,4,5,6,7,8,9,10]
const a2 = [10,20,30,40,50,60,70,80,90,100]
const a3 = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]
const a4 = [1,3,5,7,9,11,13,15,17,19,21,23,25]
const a5 = [2,4,6,8,10,12,14,16,18,20]
const a6 = [1,1,2,3,5,8,13,21,34,55,89]

const towSum = (a,t) => {
    const nMap = new Map()
    for(let i = 0; i < a.length; i++) {
        const complement = t - a[i]
        if(nMap.has(complement)) {
            return [nMap.get(complement), i]
        } else {
            nMap.set(a[i], i)
        }
    }
    return []
}

console.log(towSum(a1, 11))
console.log(towSum(a2, 70))
console.log(towSum(a3, 95))
console.log(towSum(a4, 48))
console.log(towSum(a5, 38))
console.log(towSum(a6, 55))



