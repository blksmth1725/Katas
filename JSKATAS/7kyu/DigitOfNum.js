//Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

const findDigit = (num, nth) => {
  const arr = Math.abs(num).toString().split("");
  let result =
    nth <= 0
      ? -1
      : arr[arr.length - nth] === undefined
      ? 0
      : arr[arr.length - nth];

  return Number(result);
};

console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(5603093, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
