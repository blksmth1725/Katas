// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

const sqrtx = (x) => {
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const m_square = mid * mid;

    if (m_square === x) return mid;

    if (m_square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};

console.log(sqrtx(8));
console.log(sqrtx(4));
console.log(sqrtx(81));
console.log(sqrtx(9));
console.log(sqrtx(144));
console.log(sqrtx(121));
console.log(sqrtx(49));
console.log(sqrtx(36));
console.log(sqrtx(100));
console.log(sqrtx(3));
console.log(sqrtx(0));
console.log(sqrtx(1));
console.log(sqrtx(2));
console.log(sqrtx(5));
