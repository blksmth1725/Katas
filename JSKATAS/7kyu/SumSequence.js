const sequenceSum = (begin, end, step) => {
  return begin > end ? 0 : begin + sequenceSum(begin + step, end, step);
};

console.log(sequenceSum(1, 25, 3));
console.log(sequenceSum(1, 90, 6));
console.log(sequenceSum(1, 100, 10));
console.log(sequenceSum(1, 2222, 2));
console.log(sequenceSum(1, 25, 5));
