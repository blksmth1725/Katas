Object.prototype.skinnyObj = function() {
    if(Array.isArray(this)) {
        return this.length === 0
    } else {
        return Object.keys(this).length === 0
    }
}

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [10,15,20,25,30,25,40,45,50,55,60,65,70,75,80,85,90,95,100]
const arr3 = []
const arr4 = [1,19,20]

const obj1 = {}
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

console.log(arr1.skinnyObj())
console.log(arr2.skinnyObj())
console.log(arr3.skinnyObj())
console.log(arr4.skinnyObj())
console.log(obj1.skinnyObj())
console.log(obj2.skinnyObj())
console.log(obj3.skinnyObj())
console.log(obj4.skinnyObj())
console.log(obj5.skinnyObj())