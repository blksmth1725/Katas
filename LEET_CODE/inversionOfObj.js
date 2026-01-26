//Given an object or an array obj, return an inverted object or array invertedObj.
//The invertedObj should have the keys of obj as values and the values of obj as keys. The indices of array should be treated as keys.
//The function should handle duplicates, meaning that if there are multiple keys in obj with the same value, the invertedObj should map the value to an array containing all corresponding keys.
//It is guaranteed that the values in obj are only strings.

//Example 1:
//Input: obj = {"a": "1", "b": "2", "c": "3", "d": "4"}
//Output: invertedObj = {"1": "a", "2": "b", "3": "c", "4": "d"}
//Explanation: The keys from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.

//Example 2:
//Input: obj = {"a": "1", "b": "2", "c": "2", "d": "4"}
//Output: invertedObj = {"1": "a", "2": ["b", "c"], "4": "d"}
//Explanation: There are two keys in obj with the same value, the invertedObj mapped the value to an array containing all corresponding keys.

//Example 3:
//Input: obj = ["1", "2", "3", "4"]
//Output: invertedObj = {"1": "0", "2": "1", "3": "2", "4": "3"}
//Explanation: Arrays are also objects therefore array has changed to an object and the keys (indices) from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.

//If asked in an interview:
//“This is a hash-map based inversion problem. I iterate once through the input and build a reverse lookup map, grouping duplicate values into arrays.”


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

const invertedObj = (obj) => {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
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


console.log(invertedObj(obj1))
console.log(invertedObj(obj2))
console.log(invertedObj(obj3))
console.log(invertedObj(obj4))
console.log(invertedObj(obj5))
