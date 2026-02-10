const ZERO = 0;
const a1 = [1, 2, 3, 4, 5];
const a2 = [];
const a3 = [2, 4, 6, 8, 10];
// const addAll = (acc, curr) => {
//   return acc + curr;
// };

// const addThenMultiply = (acc, curr) => {
//   return acc + curr * curr;
// };

const plusOne = (n) => {
  return n + 1;
};

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   if (nums.length === 0) return init;
//   for (let i = 0; i < nums.length; i++) {
//     acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

// console.log("Reduce:\n", reduce(a1, addAll, ZERO));
// console.log("Reduce:\n", reduce(a2, addAll, ZERO));
// console.log("Reduce:\n", reduce(a1, addThenMultiply, ZERO));
// console.log("Reduce:\n", reduce(a2, addThenMultiply, ZERO));

var map = function (arr, fn) {
  let nArr = [];
  for (let i = 0; i < arr.length; i++) {
    nArr.push(fn(arr[i]));
  }
  return nArr;
};

console.log(map(a1, plusOne));
console.log(map(a3, plusOne));
