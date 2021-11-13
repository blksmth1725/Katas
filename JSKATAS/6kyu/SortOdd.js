//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const odd = array.filter((el) => el % 2).sort((a, b) => a - b);
  return array.map((el) => (el % 2 ? odd.shift() : el));
}

console.log(
  sortArray([75, 10, 300, 15, 35, 18, 2, 4, 6, 11, 23, 6, 8, 10, 12]),
);
