const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [10,15,20,25,30,25,40,45,50,55,60,65,70,75,80,85,90,95,100]
const arr3 = [5,6,4,7,3,8,2,9,1,10]
const arr4 = [10,11,9,12,8,13,7,14,6,13,5,15,4,16,3,17,2,18,1,19,20]

const obj1 = [7,9,11,2,62,100,33,25,66,999,40,50,57,89,88,15,13,12,5,10]
const obj2 = {
    'apple': 'red',
    'banana': 'yellow',
    'grape': 'purple',
    'onion': 'white',
    'zucchini': 'green',
    'blueberry': 'blue',
    'carrot': 'orange'
}
const obj3 = {"a": "1", "b": "2", "c": "3", "d": "4"}
const obj4 = {"a": "1", "b": "2", "c": "2", "d": "4"}
const obj5 = ["1", "2", "3", "4"]


//const bnrysrch = (arr, targ) => {
//    const sArr = arr.sort((a,b) => a - b)
//    let lft = 0
//    let rght = sArr.length - 1
//    while(lft <= rght) {
//        mid = Math.floor((lft + rght) / 2)
//        mNum = sArr[mid]
//        if (mNum === targ) {
//            return {mid: mNum}
//        } else if (mNum < targ) {
//            lft = mid + 1
//        } else {
//            rght = mid - 1
//        }
//    }
//    return -1
//}
//
//console.log(bnrysrch(arr1, 3))
//console.log(bnrysrch(arr2, 90))
//console.log(bnrysrch(arr3, 4))
//console.log(bnrysrch(arr4, 14))


//const twoSum = (arr, targ) => {
//
//    const map = new Map()
//    let complement = targ - arr[i]
//    for(let i = 0; i < arr.length; i++) {
//        return [map.get(complement), i]
//        if(map.has(complement)) {
//            map.set(arr[i], i)
//        } else {
//        }
//        }
//
//    return map
//}
//
//console.log(twoSum(arr2, 185))
//console.log(twoSum(arr1, 11))
//console.log(twoSum(arr4, 30))
//console.log(twoSum(arr3, 17))


const invObj = (obj) => {
    let result = {}
    for(const [key,value] of Object.entries(obj)){
        if(result[value] === undefined) {
            result[value] = String(key)
        } else if (Array.isArray(result[value])){
            result[value].push(String(key))
        } else {
            result[value] = [result[value], String(key)]
        }
    }
    return result
}

console.log(invObj(obj1))
console.log(invObj(obj2))
console.log(invObj(obj3))
console.log(invObj(obj4))
console.log(invObj(obj5))