const fizzBuzz = (n) => {
  let nArray = [];

  for (let i = 1; i < n + 1; i++) {
    i % 3 === 0 && i % 5 === 0
      ? nArray.push("FizzBuzz")
      : i % 5 === 0
      ? nArray.push("Buzz")
      : i % 3 === 0
      ? nArray.push("Fizz")
      : nArray.push(String(i));
  }
  return nArray;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(30));
