//A functioon that determines whether two numbers are off opposite divisibility

const divisibility = (f1, f2) => {
  return f1 % 2 === f2 % 2 ? false : true;
};

console.log(divisibility(2, 6), false);
console.log(divisibility(2, 715), false);
console.log(divisibility(0, 1), true);
console.log(divisibility(7, 1), true);
console.log(divisibility(8, 2), false);
console.log(divisibility(18, 9), false);
