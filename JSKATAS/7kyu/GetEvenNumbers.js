const getEvenNumbers = (numbersArray) => {
  // filter out the odd numbers
  const filteredArray = numbersArray.filter((el) => {
    if (el % 2 == 0 || el == 0) return el;
  });
  return filteredArray;
};

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
console.log(getEvenNumbers([1, 2, 6, 9, 12, 55, 50]));
console.log(getEvenNumbers([12, 14, 15]));
console.log(getEvenNumbers([1, 3, 9]));
console.log(getEvenNumbers([13, 15]));
