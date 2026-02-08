const a1 = [2, 2, 1];
const a2 = [4, 1, 2, 1, 2];
const a3 = [1];
const a4 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3,
];
const a5 = [5];
const a6 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

const singleNum = (nums) => {
  if (nums.length === 1) return nums[0];
  const counts = new Map();

  for (const n of nums) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }

  for (const [n, c] of counts) {
    if (c === 1) return n;
  }

  return undefined;
};

console.log(singleNum(a3));
console.log(singleNum(a5));
console.log(singleNum(a1));
console.log(singleNum(a2));
console.log(singleNum(a4));
console.log(singleNum(a6));
