const ZERO = 0;
const a1 = [1, 2, 3, 4, 5];
const a2 = [];
const addAll = (acc, curr) => {
  return acc + curr;
};

const addThenMultiply = (acc, curr) => {
  return acc + curr * curr;
};

const reduce = (nums, fn, init) => {
  let acc = init;
  if (nums.length === 0) return init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
};

console.log("Reduce:\n", reduce(a1, addAll, ZERO));
console.log("Reduce:\n", reduce(a2, addAll, ZERO));
console.log("Reduce:\n", reduce(a1, addThenMultiply, ZERO));
console.log("Reduce:\n", reduce(a2, addThenMultiply, ZERO));
