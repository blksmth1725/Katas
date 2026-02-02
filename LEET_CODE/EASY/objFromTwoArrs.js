//Given two arrays keysArr and valuesArr, return a new object obj. Each key-value pair in obj should come from keysArr[i] and valuesArr[i].
//If a duplicate key exists at a previous index, that key-value should be excluded. In other words, only the first key should be added to the object.
//If the key is not a string, it should be converted into a string by calling String() on it.

//Example 1:
//Input: keysArr = ["a", "b", "c"], valuesArr = [1, 2, 3]
//Output: {"a": 1, "b": 2, "c": 3}
//Explanation: The keys "a", "b", and "c" are paired with the values 1, 2, and 3 respectively.

//Example 2:
//Input: keysArr = ["1", 1, false], valuesArr = [4, 5, 6]
//Output: {"1": 4, "false": 6}
//Explanation: First, all the elements in keysArr are converted into strings. We can see there are two occurrences of "1". The value associated with the first occurrence of "1" is used: 4.

//Example 3:
//Input: keysArr = [], valuesArr = []
//Output: {}
//Explanation: There are no keys so an empty object is returned.

kA1 = ["a", "b", "c"];
vA1 = [1, 2, 3];
kA2 = ["1", 1, false];
vA2 = [4, 5, 6];
kA3 = [];
vA3 = [];
kA4 = ["Name", "Age", "Date"];
vA4 = ["Christian Sheen", 35, new Date()];

const crteObj = (kA, vA) => {
  const obj = {};
  if (kA.length === 0 || vA.length === 0) {
    return {};
  }

  for (let i = 0; i < kA.length; i++) {
    const key = String(kA[i]);

    if (!(key in obj)) {
      if (vA[i] instanceof Date) {
        const date = vA[i];
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        vA[i] = `${year}-${month}-${day}`;
      }
      obj[key] = vA[i];
    }
  }

  return obj;
};

console.log(crteObj(kA1, vA1));
console.log(crteObj(kA2, vA2));
console.log(crteObj(kA3, vA3));
console.log(crteObj(kA4, vA4));
