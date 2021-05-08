//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  arr.sort((a, b) => a - b);
}

console.log(minMax([200, 375, 287, 1000, 70000, 356, 8320, 4, 12]));
