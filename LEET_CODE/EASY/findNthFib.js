const findNthFib = (number, memo = {}) => {
  if (number in memo) return memo[number];
  if (number <= 2) return 1;
  memo[number] = findNthFib(number - 1, memo) + findNthFib(number - 2, memo);
  return memo[number];
};

console.log("\u001b[1;32m10th:\u001b[0m\n", findNthFib(10));
console.log("\u001b[1;32m48th:\u001b[0m\n", findNthFib(48));
console.log("\u001b[1;32m32th:\u001b[0m\n", findNthFib(32));
